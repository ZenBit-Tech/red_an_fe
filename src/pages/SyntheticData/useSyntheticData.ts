import { useState } from "react";

import { useAppSelector } from "@/common/hooks/hooks";
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

export const useSyntheticData = (): UseSyntheticDataReturn => {
  const [generateSyntheticTable, { isLoading: isGenerating }] =
    useGenerateSyntheticTableMutation();
  const [regenerateSyntheticTable, { isLoading: isRegenerating }] =
    useRegenerateSyntheticTableMutation();
  const [downloadSyntheticArchive, { isLoading: isDownloading }] =
    useDownloadSyntheticArchiveMutation();

  const [recordsCount, setRecordsCount] = useState<number>(
    SYNTHETIC_COUNT_LIMITS.DEFAULT,
  );
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);
  const [tableState, setTableState] = useState<SyntheticTableState | null>(
    null,
  );
  const [generateErrorKey, setGenerateErrorKey] = useState<string>("");

  const { originalInputText, anonymizedOutputText, jobId } = useAppSelector(
    (state) => state.lastDeidentifiedResult,
  );

  const hasSourceData = Boolean(originalInputText.trim() && jobId.trim());

  const handleRecordsCountChange = (value: number): void => {
    if (Number.isNaN(value)) {
      return;
    }

    const boundedValue = Math.min(
      Math.max(value, SYNTHETIC_COUNT_LIMITS.MIN),
      SYNTHETIC_COUNT_LIMITS.MAX,
    );

    setRecordsCount(boundedValue);
  };

  const toggleAccordion = (): void => {
    setIsAccordionOpen((previous) => !previous);
  };

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

  const handleGenerate = async (): Promise<void> => {
    if (!hasSourceData) {
      setGenerateErrorKey("syntheticGenerator.errors.noDeidentifiedData");
      return;
    }

    if (
      recordsCount < SYNTHETIC_COUNT_LIMITS.MIN ||
      recordsCount > SYNTHETIC_COUNT_LIMITS.MAX
    ) {
      setGenerateErrorKey("syntheticGenerator.errors.invalidCount");
      return;
    }

    const requestPayload: GenerateSyntheticTableRequest = {
      jobId,
      text: originalInputText,
      count: recordsCount,
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
  };

  const handleRegenerate = async (): Promise<void> => {
    if (!tableState) {
      setGenerateErrorKey("syntheticGenerator.errors.noDeidentifiedData");
      return;
    }

    const requestPayload: RegenerateSyntheticTableRequest = {
      count: recordsCount,
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
  };

  const handleDownload = async (): Promise<void> => {
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
  };

  return {
    recordsCount,
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
