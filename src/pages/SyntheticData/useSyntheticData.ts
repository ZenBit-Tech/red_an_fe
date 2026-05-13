import { useState } from "react";

import { useAppSelector } from "@/common/hooks/hooks";
import { useGenerateSyntheticZipMutation } from "@/common/api/syntheticApi";
import {
  SYNTHETIC_COUNT_LIMITS,
  SYNTHETIC_OUTPUT_FORMAT,
  type SyntheticOutputFormat,
} from "@/pages/SyntheticData/constants";
import type { GenerateSyntheticRequest } from "@/common/api/deidentifyApiTypes";

interface UseSyntheticDataReturn {
  recordsCount: number;
  outputFormat: SyntheticOutputFormat;
  isAccordionOpen: boolean;
  isGenerating: boolean;
  isGenerated: boolean;
  generateErrorKey: string;
  successMessageKey: string;
  outputText: string;
  hasSourceData: boolean;
  handleRecordsCountChange: (value: number) => void;
  handleOutputFormatChange: (value: SyntheticOutputFormat) => void;
  toggleAccordion: () => void;
  handleGenerate: () => Promise<void>;
}

export const useSyntheticData = (): UseSyntheticDataReturn => {
  const [generateSyntheticZip, { isLoading: isGenerating }] =
    useGenerateSyntheticZipMutation();

  const [recordsCount, setRecordsCount] = useState<number>(
    SYNTHETIC_COUNT_LIMITS.DEFAULT,
  );
  const [outputFormat, setOutputFormat] = useState<SyntheticOutputFormat>(
    SYNTHETIC_OUTPUT_FORMAT.TXT,
  );
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [generateErrorKey, setGenerateErrorKey] = useState<string>("");
  const [successMessageKey, setSuccessMessageKey] = useState<string>("");

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

  const handleOutputFormatChange = (value: SyntheticOutputFormat): void => {
    setOutputFormat(value);
    setSuccessMessageKey("");
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

    try {
      setGenerateErrorKey("");
      setSuccessMessageKey("");

      const response = await generateSyntheticZip(requestPayload).unwrap();
      downloadZipFile(response.blob, response.fileName);

      setIsGenerated(true);
      setSuccessMessageKey("syntheticGenerator.success.downloadStarted");
    } catch {
      setGenerateErrorKey(
        "syntheticGenerator.errors.syntheticGenerationFailed",
      );
      setIsGenerated(false);
    }
  };

  return {
    recordsCount,
    outputFormat,
    isAccordionOpen,
    isGenerating,
    isGenerated,
    generateErrorKey,
    successMessageKey,
    outputText: anonymizedOutputText || originalInputText,
    hasSourceData,
    handleRecordsCountChange,
    handleOutputFormatChange,
    toggleAccordion,
    handleGenerate,
  };
};
