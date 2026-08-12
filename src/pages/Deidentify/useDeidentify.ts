import { useEffect, useRef, useState } from "react";

import { ApiClientError } from "@/common/api/apiClient";
import {
  BILLING_PLAN_TIER,
  type BillingStatusResponse,
} from "@/common/api/billingApi";
import { apiClient } from "@/common/api/apiClient";
import { analyzeText, warmUpAnalyzer } from "@/common/api/deidentifyApi";
import { useAppDispatch, useAppSelector } from "@/common/hooks/hooks";
import { API_ENDPOINTS } from "@/constants";
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
  freeLimitUsedToday: number;
  freeLimitDailyCap: number;
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

const FREE_LIMIT_MESSAGE_REQUIRED_SUBSTRINGS = ["free", "limit"];
const FREE_LIMIT_VALUES_PATTERN = /(\d+)\s*(?:of|\/)\s*(\d+)/i;
const DEFAULT_FREE_DAILY_LIMIT = 2;

type FreeLimitInfo = {
  usedToday: number;
  dailyLimit: number;
};

const parseFreeLimitInfoFromMessage = (
  message: string,
): FreeLimitInfo | null => {
  const matched = message.match(FREE_LIMIT_VALUES_PATTERN);

  if (!matched) {
    return null;
  }

  const usedToday = Number(matched[1]);
  const dailyLimit = Number(matched[2]);

  if (!Number.isFinite(usedToday) || !Number.isFinite(dailyLimit)) {
    return null;
  }

  return { usedToday, dailyLimit };
};

const isFreeLimitExceededError = (error: unknown): boolean => {
  if (!(error instanceof ApiClientError) || error.status !== 403) {
    return false;
  }

  const normalizedMessage = error.message.toLowerCase();
  return FREE_LIMIT_MESSAGE_REQUIRED_SUBSTRINGS.every((fragment) =>
    normalizedMessage.includes(fragment),
  );
};

const getFreeLimitInfoFromBillingStatus =
  async (): Promise<FreeLimitInfo | null> => {
    try {
      const response = await apiClient.get<BillingStatusResponse>(
        API_ENDPOINTS.BILLING_STATUS,
      );

      if (
        response.data.planTier !== BILLING_PLAN_TIER.FREE ||
        response.data.dailyLimit === null
      ) {
        return null;
      }

      return {
        usedToday: response.data.usedToday,
        dailyLimit: response.data.dailyLimit,
      };
    } catch {
      return null;
    }
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
  const [freeLimitInfo, setFreeLimitInfo] = useState<FreeLimitInfo | null>(
    null,
  );
  const analysisResultsRef = useRef<HTMLDivElement | null>(null);
  const clinicalText = useAppSelector(
    (state) => state.clinicalInput.clinicalText,
  );
  const selectedFramework = useAppSelector(
    (state) => state.complianceFramework.selectedFramework,
  );
  const isClinicalTextProvided = clinicalText.trim().length > 0;
  const isResultReady = analysisRunId > 0;
  const isFreeLimitReached = freeLimitInfo !== null;

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

  // Presidio sleeps on an Eco dyno and is slow to boot. Nudge it awake as soon
  // as the page opens so it is ready by the time the user submits text.
  useEffect(() => {
    void warmUpAnalyzer();
  }, []);

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

      setFreeLimitInfo(null);

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
        const messageInfo =
          error instanceof Error
            ? parseFreeLimitInfoFromMessage(error.message)
            : null;
        const billingInfo = await getFreeLimitInfoFromBillingStatus();

        setFreeLimitInfo(
          billingInfo ??
            messageInfo ?? {
              usedToday: DEFAULT_FREE_DAILY_LIMIT,
              dailyLimit: DEFAULT_FREE_DAILY_LIMIT,
            },
        );
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
    setFreeLimitInfo(null);
  };

  const clearFreeLimitError = (): void => {
    setFreeLimitInfo(null);
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
    freeLimitUsedToday: freeLimitInfo?.usedToday ?? DEFAULT_FREE_DAILY_LIMIT,
    freeLimitDailyCap: freeLimitInfo?.dailyLimit ?? DEFAULT_FREE_DAILY_LIMIT,
    isStepCompleted,
    handleAnalyzeWithSettings,
    handleStepBack,
    handleFrameworkNext,
    handleInputNext,
    handleRestart,
    clearFreeLimitError,
  };
};
