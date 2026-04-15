import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useTranslation } from "react-i18next";

import { ComplianceFrameworkSelection } from "@/components/complianceSelect/ComplianceFrameworkSelection";
import { ClinicalTextInput } from "@/components/clinicalInput";
import { DeidentifySettings } from "@/components/deidentify";
import { AnalysisResults } from "@/components/analysisResults";
import { analyzeText } from "@/common/api/deidentifyApi";
import {
  mapFindingToEntity,
  type Entity,
} from "@/components/analysisResults/constants";
import {
  DEFAULT_DEIDENTIFY_SETTINGS,
  type DeidentifySettingsFormData,
} from "@/components/deidentify/constants";
import { useAppSelector } from "@/common/hooks/hooks";
import {
  DeidentifyPageSections,
  DeidentifyPageContent,
  DeidentifyStepperContainer,
  DeidentifyPageWrapper,
  DeidentifyStepIcon,
  DeidentifyStepItem,
  DeidentifyStepLabel,
  DeidentifyStepperProgress,
  DeidentifyStepperProgressTrack,
  DeidentifyStepperSteps,
  StepperActionButton,
  StepperActionsContainer,
} from "@/pages/deidentify/styles";

const DEIDENTIFY_STEP = {
  FRAMEWORK: 0,
  INPUT_DATA: 1,
  SETTINGS: 2,
  RESULT: 3,
} as const;

const DEIDENTIFY_STEP_LABEL_KEYS = [
  "deidentify.stepper.steps.framework",
  "deidentify.stepper.steps.inputData",
  "deidentify.stepper.steps.transformation",
  "deidentify.stepper.steps.result",
] as const;

const DeidentifyPage = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState<number>(
    DEIDENTIFY_STEP.FRAMEWORK,
  );
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
      return isResultReady;
    }

    return false;
  };

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
      setActiveStep(DEIDENTIFY_STEP.RESULT);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw error;
      }

      throw new Error("Failed to analyze de-identification data with settings");
    }
  };

  const handleStepBack = (): void => {
    setActiveStep((prevStep) =>
      Math.max(prevStep - 1, DEIDENTIFY_STEP.FRAMEWORK),
    );
  };

  const handleFrameworkNext = (): void => {
    setActiveStep(DEIDENTIFY_STEP.INPUT_DATA);
  };

  const handleInputNext = (): void => {
    if (!isClinicalTextProvided) {
      return;
    }

    setActiveStep(DEIDENTIFY_STEP.SETTINGS);
  };

  const handleRestart = (): void => {
    setActiveStep(DEIDENTIFY_STEP.FRAMEWORK);
    setAnalysisRunId(0);
    setAnalyzedInputText("");
    setJobId("");
    setEntities([]);
  };

  const renderCurrentStep = (): React.ReactNode => {
    if (activeStep === DEIDENTIFY_STEP.FRAMEWORK) {
      return <ComplianceFrameworkSelection />;
    }

    if (activeStep === DEIDENTIFY_STEP.SETTINGS) {
      return (
        <DeidentifySettings
          onAnalyze={handleAnalyzeWithSettings}
          initialValues={confirmedSettings}
          submitButtonLabel={t("deidentify.stepper.actions.analyzeAndContinue")}
        />
      );
    }

    if (activeStep === DEIDENTIFY_STEP.INPUT_DATA) {
      return <ClinicalTextInput />;
    }

    if (activeStep === DEIDENTIFY_STEP.RESULT && isResultReady) {
      return (
        <Box ref={analysisResultsRef}>
          <AnalysisResults
            key={analysisRunId}
            inputText={analyzedInputText}
            entities={entities}
            jobId={jobId}
          />
        </Box>
      );
    }

    return null;
  };

  const renderStepActions = (): React.ReactNode => {
    if (activeStep === DEIDENTIFY_STEP.FRAMEWORK) {
      return (
        <StepperActionsContainer>
          <StepperActionButton
            variant="contained"
            onClick={handleFrameworkNext}
          >
            {t("deidentify.stepper.actions.next")}
          </StepperActionButton>
        </StepperActionsContainer>
      );
    }

    if (activeStep === DEIDENTIFY_STEP.SETTINGS) {
      return (
        <StepperActionsContainer>
          <StepperActionButton variant="outlined" onClick={handleStepBack}>
            {t("deidentify.stepper.actions.back")}
          </StepperActionButton>
        </StepperActionsContainer>
      );
    }

    if (activeStep === DEIDENTIFY_STEP.INPUT_DATA) {
      return (
        <StepperActionsContainer>
          <StepperActionButton variant="outlined" onClick={handleStepBack}>
            {t("deidentify.stepper.actions.back")}
          </StepperActionButton>
          <StepperActionButton
            variant="contained"
            onClick={handleInputNext}
            disabled={!isClinicalTextProvided}
          >
            {t("deidentify.stepper.actions.next")}
          </StepperActionButton>
        </StepperActionsContainer>
      );
    }

    if (activeStep === DEIDENTIFY_STEP.RESULT) {
      return (
        <StepperActionsContainer>
          <StepperActionButton variant="outlined" onClick={handleStepBack}>
            {t("deidentify.stepper.actions.back")}
          </StepperActionButton>
          <StepperActionButton variant="contained" onClick={handleRestart}>
            {t("deidentify.stepper.actions.restart")}
          </StepperActionButton>
        </StepperActionsContainer>
      );
    }

    return null;
  };

  const renderStepper = (): React.ReactNode => (
    <DeidentifyStepperContainer>
      <DeidentifyStepperProgressTrack>
        <DeidentifyStepperProgress
          activeStep={activeStep}
          stepCount={DEIDENTIFY_STEP_LABEL_KEYS.length}
        />
      </DeidentifyStepperProgressTrack>
      <DeidentifyStepperSteps>
        {DEIDENTIFY_STEP_LABEL_KEYS.map((labelKey, index) => {
          const isActive = index === activeStep;
          const isCompleted = isStepCompleted(index);

          return (
            <DeidentifyStepItem key={labelKey}>
              <DeidentifyStepIcon isActive={isActive} isCompleted={isCompleted}>
                {isCompleted ? <CheckIcon sx={{ fontSize: 14 }} /> : index + 1}
              </DeidentifyStepIcon>
              <DeidentifyStepLabel
                isActive={isActive}
                isCompleted={isCompleted}
                isFirstStep={index === DEIDENTIFY_STEP.FRAMEWORK}
              >
                {t(labelKey)}
              </DeidentifyStepLabel>
            </DeidentifyStepItem>
          );
        })}
      </DeidentifyStepperSteps>
    </DeidentifyStepperContainer>
  );

  return (
    <DeidentifyPageWrapper>
      <DeidentifyPageContent>
        <DeidentifyPageSections>
          {renderStepper()}
          {renderCurrentStep()}
          {renderStepActions()}
        </DeidentifyPageSections>
      </DeidentifyPageContent>
    </DeidentifyPageWrapper>
  );
};

export default DeidentifyPage;
