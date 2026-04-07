import { useMemo } from "react";
import mammoth from "mammoth";
import { useTranslation } from "react-i18next";

import {
  EMPTY_TEXT_SEGMENT,
  FILE_PATH_REDACTED_PREFIX,
  MAX_UPLOAD_FILE_SIZE_BYTES,
  PDF_TEXT_JOIN_SEPARATOR,
  SUPPORTED_FILE_EXTENSIONS,
  type ClinicalInputTab,
} from "@/components/clinicalInput/constants";
import {
  clearFileError,
  setActiveTab,
  setClinicalText,
  setFileError,
  setFileResult,
} from "@/store/clinicalInputSlice";
import { useAppDispatch, useAppSelector } from "@/common/hooks/hooks";

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
  fileError: string;
  switchToTab: (tab: ClinicalInputTab) => void;
  handleClinicalTextChange: (nextValue: string) => void;
  handleFileSelected: (file: File, providedPath?: string) => Promise<void>;
}

const FILE_ERROR_KEY = {
  FILE_TOO_LARGE: "deidentify.clinicalInput.errors.fileTooLarge",
  FILE_EMPTY: "deidentify.clinicalInput.errors.fileEmpty",
  FILE_UNSUPPORTED: "deidentify.clinicalInput.errors.fileUnsupported",
  FILE_READ_GENERIC: "deidentify.clinicalInput.errors.fileRead",
  FILE_READ_TXT: "deidentify.clinicalInput.errors.fileReadTxt",
  FILE_READ_WORD: "deidentify.clinicalInput.errors.fileReadWord",
  FILE_READ_PDF: "deidentify.clinicalInput.errors.fileReadPdf",
} as const;

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

  throw new Error(FILE_ERROR_KEY.FILE_UNSUPPORTED);
};

const getReadErrorKey = (fileName: string): string => {
  if (isTxtFile(fileName)) {
    return FILE_ERROR_KEY.FILE_READ_TXT;
  }

  if (isWordFile(fileName)) {
    return FILE_ERROR_KEY.FILE_READ_WORD;
  }

  if (isPdfFile(fileName)) {
    return FILE_ERROR_KEY.FILE_READ_PDF;
  }

  return FILE_ERROR_KEY.FILE_READ_GENERIC;
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

  const filePathLabel = useMemo(() => {
    if (!uploadedFilePath) {
      return EMPTY_TEXT_SEGMENT;
    }

    return t("deidentify.clinicalInput.uploadedFilePath", {
      path: uploadedFilePath,
    });
  }, [t, uploadedFilePath]);

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
    const normalizedFileName = file.name.toLowerCase();

    if (
      !isTxtFile(normalizedFileName) &&
      !isWordFile(normalizedFileName) &&
      !isPdfFile(normalizedFileName)
    ) {
      dispatch(setFileError(t(FILE_ERROR_KEY.FILE_UNSUPPORTED)));
      return;
    }

    if (file.size > MAX_UPLOAD_FILE_SIZE_BYTES) {
      dispatch(
        setFileError(
          t(FILE_ERROR_KEY.FILE_TOO_LARGE, {
            maxMb: Math.floor(MAX_UPLOAD_FILE_SIZE_BYTES / (1024 * 1024)),
          }),
        ),
      );
      return;
    }

    try {
      const parsedText = (await extractClinicalText(file)).trim();

      if (!parsedText) {
        dispatch(setFileError(t(FILE_ERROR_KEY.FILE_EMPTY)));
        return;
      }

      const resolvedPath = resolveBestAvailablePath(file, providedPath);

      dispatch(
        setFileResult({
          text: parsedText,
          path: resolvedPath,
        }),
      );
    } catch (error: unknown) {
      if (
        error instanceof Error &&
        error.message === FILE_ERROR_KEY.FILE_UNSUPPORTED
      ) {
        dispatch(setFileError(t(FILE_ERROR_KEY.FILE_UNSUPPORTED)));
        return;
      }

      dispatch(setFileError(t(getReadErrorKey(normalizedFileName))));
    }
  };

  return {
    activeTab,
    clinicalText,
    filePathLabel,
    fileError,
    switchToTab,
    handleClinicalTextChange,
    handleFileSelected,
  };
};
