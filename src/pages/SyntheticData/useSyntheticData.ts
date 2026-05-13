import { useMemo, useState } from "react";

import { useAppSelector } from "@/common/hooks/hooks";
import {
  SYNTHETIC_COUNT_LIMITS,
  SYNTHETIC_OUTPUT_FORMAT,
  buildSyntheticRows,
  getSyntheticColumnDefinitions,
  type GenerateSyntheticRequest,
  type SyntheticOutputFormat,
} from "@/pages/SyntheticData/constants";

interface UseSyntheticDataReturn {
  recordsCount: number;
  outputFormat: SyntheticOutputFormat;
  isAccordionOpen: boolean;
  isGeneratedVisible: boolean;
  generateErrorKey: string;
  generatedRows: Array<Record<string, string | number>>;
  columns: ReturnType<typeof getSyntheticColumnDefinitions>;
  outputText: string;
  hasSourceData: boolean;
  handleRecordsCountChange: (value: number) => void;
  handleOutputFormatChange: (value: SyntheticOutputFormat) => void;
  toggleAccordion: () => void;
  handleGenerate: () => void;
}

export const useSyntheticData = (): UseSyntheticDataReturn => {
  const [recordsCount, setRecordsCount] = useState<number>(
    SYNTHETIC_COUNT_LIMITS.DEFAULT,
  );
  const [outputFormat, setOutputFormat] = useState<SyntheticOutputFormat>(
    SYNTHETIC_OUTPUT_FORMAT.TXT,
  );
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);
  const [isGeneratedVisible, setIsGeneratedVisible] = useState<boolean>(false);
  const [generateErrorKey, setGenerateErrorKey] = useState<string>("");
  const [generatedRows, setGeneratedRows] = useState<
    Array<Record<string, string | number>>
  >([]);

  const { originalInputText, anonymizedOutputText, jobId, activeEntityTypes } =
    useAppSelector((state) => state.lastDeidentifiedResult);

  const hasSourceData = Boolean(originalInputText.trim() && jobId.trim());

  const columns = useMemo(
    () => getSyntheticColumnDefinitions(activeEntityTypes),
    [activeEntityTypes],
  );

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

  const handleOutputFormatChange = (value: SyntheticOutputFormat): void => {
    setOutputFormat(value);
  };

  const toggleAccordion = (): void => {
    setIsAccordionOpen((previous) => !previous);
  };

  const handleGenerate = (): void => {
    if (!hasSourceData) {
      setGenerateErrorKey("syntheticGenerator.errors.noDeidentifiedData");
      return;
    }

    if (recordsCount < SYNTHETIC_COUNT_LIMITS.MIN) {
      setGenerateErrorKey("syntheticGenerator.errors.invalidCount");
      return;
    }

    const requestPayload: GenerateSyntheticRequest = {
      jobId,
      text: originalInputText,
      count: recordsCount,
      outputFormat,
    };

    if (!requestPayload.jobId || !requestPayload.text) {
      setGenerateErrorKey("syntheticGenerator.errors.noDeidentifiedData");
      return;
    }

    setGenerateErrorKey("");
    setGeneratedRows(buildSyntheticRows(recordsCount, columns));
    setIsGeneratedVisible(true);
  };

  return {
    recordsCount,
    outputFormat,
    isAccordionOpen,
    isGeneratedVisible,
    generateErrorKey,
    generatedRows,
    columns,
    outputText: anonymizedOutputText || originalInputText,
    hasSourceData,
    handleRecordsCountChange,
    handleOutputFormatChange,
    toggleAccordion,
    handleGenerate,
  };
};
