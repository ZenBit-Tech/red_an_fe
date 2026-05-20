import { useCallback, useEffect, useRef, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/common/hooks/hooks";
import { resetActiveStep, setActiveStep } from "@/store/deidentifyStepSlice";
import {
  useDownloadSyntheticArchiveMutation,
  useGenerateSyntheticTableMutation,
  useRegenerateSyntheticTableMutation,
} from "@/common/api/syntheticApi";
import type {
  GenerateSyntheticTableRequest,
  RegenerateSyntheticTableRequest,
  SyntheticTableResponse,
} from "@/common/api/deidentifyApiTypes";
import {
  SYNTHETIC_COUNT_LIMITS,
  SYNTHETIC_OUTPUT_FORMAT,
  type SyntheticOutputFormat,
} from "@/pages/SyntheticData/constants";

export interface SyntheticTableState {
  generationId: string;
  outputFormat: SyntheticOutputFormat;
  columns: string[];
  rows: SyntheticTableResponse["rows"];
}

interface UseSyntheticDataReturn {
  recordsCount: number;
  isCountAboveMax: boolean;
  isAccordionOpen: boolean;
  isGenerating: boolean;
  isRegenerating: boolean;
  isDownloading: boolean;
  tableState: SyntheticTableState | null;
  generateErrorKey: string;
  outputText: string;
  hasSourceData: boolean;
  handleRecordsCountChange: (value: number) => void;
  toggleAccordion: () => void;
  handleGenerate: () => Promise<void>;
  handleRegenerate: () => Promise<void>;
  handleDownload: () => Promise<void>;
}

const SYNTHETIC_STEP_INDEX = 4;

export const useSyntheticData = (): UseSyntheticDataReturn => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setActiveStep(SYNTHETIC_STEP_INDEX));
    return () => {
      dispatch(resetActiveStep());
    };
  }, [dispatch]);

  const [generateSyntheticTable, { isLoading: isGenerating }] =
    useGenerateSyntheticTableMutation();
  const [regenerateSyntheticTable, { isLoading: isRegenerating }] =
    useRegenerateSyntheticTableMutation();
  const [downloadSyntheticArchive, { isLoading: isDownloading }] =
    useDownloadSyntheticArchiveMutation();

  const [recordsCount, setRecordsCount] = useState<number>(
    SYNTHETIC_COUNT_LIMITS.DEFAULT,
  );
  const [isCountAboveMax, setIsCountAboveMax] = useState<boolean>(false);
  const recordsCountRef = useRef<number>(SYNTHETIC_COUNT_LIMITS.DEFAULT);
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);
  const [tableState, setTableState] = useState<SyntheticTableState | null>(
    null,
  );
  const [generateErrorKey, setGenerateErrorKey] = useState<string>("");

  const { originalInputText, anonymizedOutputText, jobId } = useAppSelector(
    (state) => state.lastDeidentifiedResult,
  );

  const hasSourceData = Boolean(originalInputText.trim() && jobId.trim());

  const handleRecordsCountChange = useCallback((value: number): void => {
    if (Number.isNaN(value)) {
      setIsCountAboveMax(false);
      return;
    }

    setIsCountAboveMax(value > SYNTHETIC_COUNT_LIMITS.MAX);

    const boundedValue = Math.min(
      Math.max(value, SYNTHETIC_COUNT_LIMITS.MIN),
      SYNTHETIC_COUNT_LIMITS.MAX,
    );

    setRecordsCount(boundedValue);
  }, []);

  useEffect(() => {
    recordsCountRef.current = recordsCount;
  }, [recordsCount]);

  const toggleAccordion = useCallback((): void => {
    setIsAccordionOpen((previous) => !previous);
  }, []);

  const downloadZipFile = (blob: Blob, fileName: string): void => {
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(objectUrl);
  };

  const buildTableState = (
    response: SyntheticTableResponse,
    currentOutputFormat: SyntheticOutputFormat,
  ): SyntheticTableState => ({
    generationId: response.generationId,
    outputFormat: currentOutputFormat,
    columns: response.columns,
    rows: response.rows,
  });

  const handleGenerate = useCallback(async (): Promise<void> => {
    const currentRecordsCount = recordsCountRef.current;

    if (!hasSourceData) {
      setGenerateErrorKey("syntheticGenerator.errors.noDeidentifiedData");
      return;
    }

    if (
      currentRecordsCount < SYNTHETIC_COUNT_LIMITS.MIN ||
      currentRecordsCount > SYNTHETIC_COUNT_LIMITS.MAX
    ) {
      setGenerateErrorKey("syntheticGenerator.errors.invalidCount");
      return;
    }

    const requestPayload: GenerateSyntheticTableRequest = {
      jobId,
      text: originalInputText,
      count: currentRecordsCount,
      outputFormat: SYNTHETIC_OUTPUT_FORMAT.PDF,
    };

    if (!requestPayload.jobId || !requestPayload.text) {
      setGenerateErrorKey("syntheticGenerator.errors.noDeidentifiedData");
      return;
    }

    try {
      setGenerateErrorKey("");

      const response = await generateSyntheticTable(requestPayload).unwrap();
      setTableState(buildTableState(response, requestPayload.outputFormat));
    } catch {
      setGenerateErrorKey(
        "syntheticGenerator.errors.syntheticGenerationFailed",
      );
      setTableState(null);
    }
  }, [generateSyntheticTable, hasSourceData, jobId, originalInputText]);

  const handleRegenerate = useCallback(async (): Promise<void> => {
    const currentRecordsCount = recordsCountRef.current;

    if (!tableState) {
      setGenerateErrorKey("syntheticGenerator.errors.noDeidentifiedData");
      return;
    }

    const requestPayload: RegenerateSyntheticTableRequest = {
      count: currentRecordsCount,
      outputFormat: SYNTHETIC_OUTPUT_FORMAT.PDF,
    };

    try {
      setGenerateErrorKey("");

      const response = await regenerateSyntheticTable({
        generationId: tableState.generationId,
        request: requestPayload,
      }).unwrap();

      setTableState(buildTableState(response, requestPayload.outputFormat));
    } catch {
      setGenerateErrorKey(
        "syntheticGenerator.errors.syntheticGenerationFailed",
      );
    }
  }, [regenerateSyntheticTable, tableState]);

  const handleDownload = useCallback(async (): Promise<void> => {
    if (!tableState) {
      setGenerateErrorKey("syntheticGenerator.errors.noDeidentifiedData");
      return;
    }

    try {
      setGenerateErrorKey("");

      const response = await downloadSyntheticArchive(
        tableState.generationId,
      ).unwrap();

      downloadZipFile(response.blob, response.fileName);
    } catch {
      setGenerateErrorKey(
        "syntheticGenerator.errors.syntheticGenerationFailed",
      );
    }
  }, [downloadSyntheticArchive, tableState]);

  return {
    recordsCount,
    isCountAboveMax,
    isAccordionOpen,
    isGenerating,
    isRegenerating,
    isDownloading,
    tableState,
    generateErrorKey,
    outputText: anonymizedOutputText || originalInputText,
    hasSourceData,
    handleRecordsCountChange,
    toggleAccordion,
    handleGenerate,
    handleRegenerate,
    handleDownload,
  };
};
