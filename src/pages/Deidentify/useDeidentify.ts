import { useEffect, useRef, useState } from "react";

import { analyzeText } from "@/common/api/deidentifyApi";
import { useAppDispatch, useAppSelector } from "@/common/hooks/hooks";
import { resetActiveStep, setActiveStep } from "@/store/deidentifyStepSlice";
import { resetClinicalInput } from "@/store/clinicalInputSlice";
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
  isClinicalTextProvided: boolean;
  isResultReady: boolean;
  isStepCompleted: (stepIndex: number) => boolean;
  handleAnalyzeWithSettings: (
    settings: DeidentifySettingsFormData,
  ) => Promise<void>;
  handleStepBack: () => void;
  handleFrameworkNext: () => void;
  handleInputNext: () => void;
  handleRestart: () => void;
}

export const useDeidentify = (): UseDeidentifyReturn => {
  const dispatch = useAppDispatch();
  const activeStep = useAppSelector((state) => state.deidentifyStep.activeStep);
  const [confirmedSettings, setConfirmedSettings] =
    useState<DeidentifySettingsFormData>(DEFAULT_DEIDENTIFY_SETTINGS);
  const [analysisRunId, setAnalysisRunId] = useState(0);
  const [analyzedInputText, setAnalyzedInputText] = useState("");
  const [jobId, setJobId] = useState<string>("");
  const [entities, setEntities] = useState<Entity[]>([]);
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

      const mappedEntities = response.findings.map((finding) =>
        mapFindingToEntity(finding, clinicalText),
      );

      setJobId(response.jobId);
      setEntities(mappedEntities);
      setAnalyzedInputText(clinicalText);
      setAnalysisRunId((prevRunId) => prevRunId + 1);
      dispatch(setActiveStep(DEIDENTIFY_STEP.RESULT));
    } catch (error: unknown) {
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
    setAnalysisRunId(0);
    setAnalyzedInputText("");
    setJobId("");
    setEntities([]);
  };

  return {
    activeStep,
    analysisRunId,
    analyzedInputText,
    jobId,
    entities,
    confirmedSettings,
    analysisResultsRef,
    isClinicalTextProvided,
    isResultReady,
    isStepCompleted,
    handleAnalyzeWithSettings,
    handleStepBack,
    handleFrameworkNext,
    handleInputNext,
    handleRestart,
  };
};
