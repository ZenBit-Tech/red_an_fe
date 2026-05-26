import { useEffect, useRef, useState } from "react";

import { ApiClientError } from "@/common/api/apiClient";
import { analyzeText } from "@/common/api/deidentifyApi";
import { useAppDispatch, useAppSelector } from "@/common/hooks/hooks";
import { resetActiveStep, setActiveStep } from "@/store/deidentifyStepSlice";
import { resetClinicalInput } from "@/store/clinicalInputSlice";
import {
  clearLastDeidentifiedResult,
  setLastDeidentifiedResult,
} from "@/store/lastDeidentifiedResultSlice";
import {
  mapFindingToEntity,
  type Entity,
} from "@/components/AnalysisResults/constants";
import {
  DEFAULT_DEIDENTIFY_SETTINGS,
  type DeidentifySettingsFormData,
} from "@/components/Deidentify/constants";

export const DEIDENTIFY_STEP = {
  FRAMEWORK: 0,
  INPUT_DATA: 1,
  SETTINGS: 2,
  RESULT: 3,
} as const;

interface UseDeidentifyReturn {
  activeStep: number;
  analysisRunId: number;
  analyzedInputText: string;
  jobId: string;
  entities: Entity[];
  confirmedSettings: DeidentifySettingsFormData;
  analysisResultsRef: React.RefObject<HTMLDivElement | null>;
  clinicalInputKey: number;
  isClinicalTextProvided: boolean;
  isResultReady: boolean;
  isFreeLimitReached: boolean;
  isStepCompleted: (stepIndex: number) => boolean;
  handleAnalyzeWithSettings: (
    settings: DeidentifySettingsFormData,
  ) => Promise<void>;
  handleStepBack: () => void;
  handleFrameworkNext: () => void;
  handleInputNext: () => void;
  handleRestart: () => void;
  clearFreeLimitError: () => void;
}

const FREE_LIMIT_ERROR_SUBSTRINGS = ["free", "limit", "2", "day"];

const isFreeLimitExceededError = (error: unknown): boolean => {
  if (!(error instanceof ApiClientError) || error.status !== 403) {
    return false;
  }

  const normalizedMessage = error.message.toLowerCase();
  return FREE_LIMIT_ERROR_SUBSTRINGS.some((fragment) =>
    normalizedMessage.includes(fragment),
  );
};

export const useDeidentify = (): UseDeidentifyReturn => {
  const dispatch = useAppDispatch();
  const activeStep = useAppSelector((state) => state.deidentifyStep.activeStep);
  const [confirmedSettings, setConfirmedSettings] =
    useState<DeidentifySettingsFormData>(DEFAULT_DEIDENTIFY_SETTINGS);
  const [analysisRunId, setAnalysisRunId] = useState(0);
  const [analyzedInputText, setAnalyzedInputText] = useState("");
  const [jobId, setJobId] = useState<string>("");
  const [entities, setEntities] = useState<Entity[]>([]);
  const [clinicalInputKey, setClinicalInputKey] = useState(0);
  const [isFreeLimitReached, setIsFreeLimitReached] = useState(false);
  const analysisResultsRef = useRef<HTMLDivElement | null>(null);
  const clinicalText = useAppSelector(
    (state) => state.clinicalInput.clinicalText,
  );
  const selectedFramework = useAppSelector(
    (state) => state.complianceFramework.selectedFramework,
  );
  const isClinicalTextProvided = clinicalText.trim().length > 0;
  const isResultReady = analysisRunId > 0;

  const isStepCompleted = (stepIndex: number): boolean => {
    if (stepIndex === DEIDENTIFY_STEP.FRAMEWORK) {
      return activeStep > DEIDENTIFY_STEP.FRAMEWORK;
    }

    if (stepIndex === DEIDENTIFY_STEP.INPUT_DATA) {
      return activeStep > DEIDENTIFY_STEP.INPUT_DATA;
    }

    if (stepIndex === DEIDENTIFY_STEP.SETTINGS) {
      return activeStep > DEIDENTIFY_STEP.SETTINGS;
    }

    return false;
  };

  useEffect(() => {
    dispatch(resetActiveStep());
    dispatch(resetClinicalInput());
    return () => {
      dispatch(resetActiveStep());
      dispatch(resetClinicalInput());
    };
  }, [dispatch]);

  useEffect(() => {
    if (activeStep !== DEIDENTIFY_STEP.RESULT || !isResultReady) {
      return;
    }

    requestAnimationFrame(() => {
      analysisResultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [activeStep, isResultReady]);

  const handleAnalyzeWithSettings = async (
    settings: DeidentifySettingsFormData,
  ): Promise<void> => {
    try {
      setConfirmedSettings(settings);
      if (!isClinicalTextProvided) {
        return;
      }

      const response = await analyzeText({
        text: clinicalText,
        framework: selectedFramework,
        threshold: settings.threshold,
        preserveStructure: settings.preserveStructure,
      });

      setIsFreeLimitReached(false);

      const mappedEntities = response.findings.map((finding) =>
        mapFindingToEntity(finding, clinicalText),
      );

      setJobId(response.jobId);
      setEntities(mappedEntities);
      setAnalyzedInputText(clinicalText);
      setAnalysisRunId((prevRunId) => prevRunId + 1);
      dispatch(
        setLastDeidentifiedResult({
          originalInputText: clinicalText,
          anonymizedOutputText: "",
          jobId: response.jobId,
          activeEntityIds: mappedEntities.map((entity) => entity.id),
          activeEntityTypes: Array.from(
            new Set(mappedEntities.map((entity) => entity.type)),
          ),
          framework: selectedFramework,
          updatedAt: new Date().toISOString(),
        }),
      );
      dispatch(setActiveStep(DEIDENTIFY_STEP.RESULT));
    } catch (error: unknown) {
      if (isFreeLimitExceededError(error)) {
        setIsFreeLimitReached(true);
        return;
      }

      if (error instanceof Error) {
        throw error;
      }

      throw new Error("Failed to analyze de-identification data with settings");
    }
  };

  const handleStepBack = (): void => {
    dispatch(
      setActiveStep(Math.max(activeStep - 1, DEIDENTIFY_STEP.FRAMEWORK)),
    );
  };

  const handleFrameworkNext = (): void => {
    dispatch(setActiveStep(DEIDENTIFY_STEP.INPUT_DATA));
  };

  const handleInputNext = (): void => {
    if (!isClinicalTextProvided) {
      return;
    }

    dispatch(setActiveStep(DEIDENTIFY_STEP.SETTINGS));
  };

  const handleRestart = (): void => {
    dispatch(resetActiveStep());
    dispatch(resetClinicalInput());
    dispatch(clearLastDeidentifiedResult());
    setAnalysisRunId(0);
    setAnalyzedInputText("");
    setJobId("");
    setEntities([]);
    setClinicalInputKey((k) => k + 1);
    setIsFreeLimitReached(false);
  };

  const clearFreeLimitError = (): void => {
    setIsFreeLimitReached(false);
  };

  return {
    activeStep,
    analysisRunId,
    analyzedInputText,
    jobId,
    entities,
    confirmedSettings,
    analysisResultsRef,
    clinicalInputKey,
    isClinicalTextProvided,
    isResultReady,
    isFreeLimitReached,
    isStepCompleted,
    handleAnalyzeWithSettings,
    handleStepBack,
    handleFrameworkNext,
    handleInputNext,
    handleRestart,
    clearFreeLimitError,
  };
};
