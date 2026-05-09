import { useMemo, useState } from "react";
import mammoth from "mammoth";
import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppSelector } from "@/common/hooks/hooks";
import {
  EMPTY_TEXT_SEGMENT,
  FILE_PATH_REDACTED_PREFIX,
  MAX_CLINICAL_TEXT_CHARACTERS,
  MAX_UPLOAD_FILE_SIZE_BYTES,
  MAX_UPLOAD_FILE_SIZE_MB,
  PDF_TEXT_JOIN_SEPARATOR,
  SUPPORTED_FILE_EXTENSIONS,
  type ClinicalInputTab,
} from "@/components/ClinicalInput/constants";
import {
  clearFileError,
  clearUploadedFile,
  setActiveTab,
  setClinicalText,
  setFileResult,
  setFileTooLarge,
  type RejectedFileMeta,
} from "@/store/clinicalInputSlice";

interface PdfJsModule {
  getDocument: (params: { data: Uint8Array }) => {
    promise: Promise<{
      numPages: number;
      getPage: (pageNumber: number) => Promise<{
        getTextContent: () => Promise<{
          items: Array<{ str?: string }>;
        }>;
      }>;
    }>;
  };
  GlobalWorkerOptions: {
    workerSrc: string;
  };
}

interface FileWithOptionalPath extends File {
  path?: string;
}

interface UseClinicalTextInputReturn {
  activeTab: ClinicalInputTab;
  clinicalText: string;
  filePathLabel: string;
  uploadedFileName: string;
  processingFileName: string;
  uploadedFileSizeBytes: number;
  fileError: string;
  rejectedFile: RejectedFileMeta | null;
  isCharLimitExceeded: boolean;
  isProcessing: boolean;
  uploadProgress: number;
  switchToTab: (tab: ClinicalInputTab) => void;
  handleClinicalTextChange: (nextValue: string) => void;
  handleFileSelected: (file: File, providedPath?: string) => Promise<void>;
  clearUploadedFileState: () => void;
}

const FILE_TOO_LARGE_KEY = "deidentify.clinicalInput.errors.fileTooLarge";

const supportedWordExtensions = [
  SUPPORTED_FILE_EXTENSIONS.DOC,
  SUPPORTED_FILE_EXTENSIONS.DOCX,
] as const;

const resolveBestAvailablePath = (
  file: File,
  providedPath?: string,
): string => {
  const typedFile = file as FileWithOptionalPath;

  if (providedPath && !providedPath.startsWith(FILE_PATH_REDACTED_PREFIX)) {
    return providedPath;
  }

  if (typedFile.path) {
    return typedFile.path;
  }

  if (providedPath) {
    return providedPath;
  }

  return file.name;
};

const isWordFile = (fileName: string): boolean => {
  return supportedWordExtensions.some((extension) =>
    fileName.endsWith(extension),
  );
};

const isPdfFile = (fileName: string): boolean => {
  return fileName.endsWith(SUPPORTED_FILE_EXTENSIONS.PDF);
};

const isTxtFile = (fileName: string): boolean => {
  return fileName.endsWith(SUPPORTED_FILE_EXTENSIONS.TXT);
};

const loadPdfJs = async (): Promise<PdfJsModule> => {
  const pdfJsModule = (await import("pdfjs-dist")) as unknown as PdfJsModule;
  const workerModule =
    (await import("pdfjs-dist/build/pdf.worker.min.mjs?url")) as {
      default: string;
    };

  pdfJsModule.GlobalWorkerOptions.workerSrc = workerModule.default;

  return pdfJsModule;
};

const extractTextFromPdf = async (file: File): Promise<string> => {
  const pdfJsModule = await loadPdfJs();
  const arrayBuffer = await file.arrayBuffer();
  const pdfDocument = await pdfJsModule.getDocument({
    data: new Uint8Array(arrayBuffer),
  }).promise;

  const pageTexts: string[] = [];

  for (
    let pageNumber = 1;
    pageNumber <= pdfDocument.numPages;
    pageNumber += 1
  ) {
    const page = await pdfDocument.getPage(pageNumber);
    const textContent = await page.getTextContent();
    const pageText = textContent.items
      .map((item) => {
        if ("str" in item) {
          return item.str;
        }

        return EMPTY_TEXT_SEGMENT;
      })
      .join(" ")
      .trim();

    if (pageText) {
      pageTexts.push(pageText);
    }
  }

  return pageTexts.join(PDF_TEXT_JOIN_SEPARATOR);
};

const extractTextFromWord = async (file: File): Promise<string> => {
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });

  return result.value.trim();
};

const extractClinicalText = async (file: File): Promise<string> => {
  const fileName = file.name.toLowerCase();

  if (isTxtFile(fileName)) {
    return file.text();
  }

  if (isWordFile(fileName)) {
    return extractTextFromWord(file);
  }

  if (isPdfFile(fileName)) {
    return extractTextFromPdf(file);
  }

  return EMPTY_TEXT_SEGMENT;
};

export const useClinicalTextInput = (): UseClinicalTextInputReturn => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((state) => state.clinicalInput.activeTab);
  const clinicalText = useAppSelector(
    (state) => state.clinicalInput.clinicalText,
  );
  const uploadedFilePath = useAppSelector(
    (state) => state.clinicalInput.uploadedFilePath,
  );
  const fileError = useAppSelector((state) => state.clinicalInput.fileError);
  const rejectedFile = useAppSelector(
    (state) => state.clinicalInput.rejectedFile,
  );
  const uploadedFileSizeBytes = useAppSelector(
    (state) => state.clinicalInput.uploadedFileSizeBytes,
  );

  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [processingFileName, setProcessingFileName] = useState("");

  const filePathLabel = useMemo(() => {
    if (!uploadedFilePath) {
      return EMPTY_TEXT_SEGMENT;
    }

    return t("deidentify.clinicalInput.uploadedFilePath", {
      path: uploadedFilePath,
    });
  }, [t, uploadedFilePath]);

  const uploadedFileName = useMemo(() => {
    if (!uploadedFilePath) {
      return EMPTY_TEXT_SEGMENT;
    }
    const parts = uploadedFilePath.split(/[/\\]/);
    return parts[parts.length - 1] || EMPTY_TEXT_SEGMENT;
  }, [uploadedFilePath]);

  const isCharLimitExceeded =
    clinicalText.length > MAX_CLINICAL_TEXT_CHARACTERS;

  const switchToTab = (tab: ClinicalInputTab): void => {
    dispatch(setActiveTab(tab));
  };

  const handleClinicalTextChange = (nextValue: string): void => {
    dispatch(setClinicalText(nextValue));
    dispatch(clearFileError());
  };

  const handleFileSelected = async (
    file: File,
    providedPath?: string,
  ): Promise<void> => {
    dispatch(clearUploadedFile());
    setIsProcessing(true);
    setProcessingFileName(file.name);
    setUploadProgress(15); // Початковий прогрес

    if (file.size > MAX_UPLOAD_FILE_SIZE_BYTES) {
      setIsProcessing(false);
      setUploadProgress(0);
      dispatch(
        setFileTooLarge({
          error: t(FILE_TOO_LARGE_KEY, { maxMb: MAX_UPLOAD_FILE_SIZE_MB }),
          file: { name: file.name, sizeBytes: file.size },
        }),
      );
      return;
    }

    // Симуляція прогресу під час парсингу
    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => (prev < 90 ? prev + 15 : prev));
    }, 150);

    try {
      const parsedText = (await extractClinicalText(file)).trim();

      if (!parsedText) {
        return;
      }

      const resolvedPath = resolveBestAvailablePath(file, providedPath);

      setUploadProgress(100); // 100% перед завершенням
      dispatch(
        setFileResult({
          text: parsedText,
          path: resolvedPath,
          sizeBytes: file.size,
        }),
      );
    } catch {
      // Silently ignore read failures
    } finally {
      clearInterval(progressInterval);
      // Невелика затримка, щоб юзер побачив 100%
      setTimeout(() => {
        setIsProcessing(false);
      }, 400);
    }
  };

  const clearUploadedFileState = (): void => {
    setIsProcessing(false);
    setUploadProgress(0);
    setProcessingFileName("");
    dispatch(clearUploadedFile());
  };

  return {
    activeTab,
    clinicalText,
    filePathLabel,
    uploadedFileName,
    processingFileName,
    uploadedFileSizeBytes,
    fileError,
    rejectedFile,
    isCharLimitExceeded,
    isProcessing,
    uploadProgress,
    switchToTab,
    handleClinicalTextChange,
    handleFileSelected,
    clearUploadedFileState,
  };
};
