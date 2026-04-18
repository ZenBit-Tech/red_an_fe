import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import { ComplianceFrameworkSelection } from "@/components/ComplianceSelect/ComplianceFrameworkSelection";
import { ClinicalTextInput } from "@/components/ClinicalInput";
import { DeidentifySettings } from "@/components/Deidentify";
import { AnalysisResults } from "@/components/AnalysisResults";
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
  StepperCompletedIcon,
  StepperActionButton,
  StepperActionsContainer,
} from "@/pages/Deidentify/styles";
import {
  DEIDENTIFY_STEP,
  useDeidentify,
} from "@/pages/Deidentify/useDeidentify";

const DEIDENTIFY_STEP_LABEL_KEYS = [
  "deidentify.stepper.steps.framework",
  "deidentify.stepper.steps.inputData",
  "deidentify.stepper.steps.transformation",
  "deidentify.stepper.steps.result",
] as const;

const DeidentifyPage = () => {
  const { t } = useTranslation();
  const {
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
  } = useDeidentify();

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
                {isCompleted ? <StepperCompletedIcon /> : index + 1}
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
