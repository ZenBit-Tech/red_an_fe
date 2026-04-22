import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Fragment } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
  DeidentifyStepperSteps,
  StepperActionButton,
  StepperBackButton,
  StepperActionsContainer,
  DeidentifyStepConnector,
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
            endIcon={<ArrowForwardIcon />}
          >
            {t("deidentify.stepper.actions.next")}
          </StepperActionButton>
        </StepperActionsContainer>
      );
    }

    if (activeStep === DEIDENTIFY_STEP.SETTINGS) {
      return (
        <StepperActionsContainer>
          <StepperBackButton
            onClick={handleStepBack}
            startIcon={<ArrowBackIcon />}
          >
            {t("deidentify.stepper.actions.back")}
          </StepperBackButton>
        </StepperActionsContainer>
      );
    }

    if (activeStep === DEIDENTIFY_STEP.INPUT_DATA) {
      return (
        <StepperActionsContainer>
          <StepperBackButton
            onClick={handleStepBack}
            startIcon={<ArrowBackIcon />}
          >
            {t("deidentify.stepper.actions.back")}
          </StepperBackButton>
          <StepperActionButton
            variant="contained"
            onClick={handleInputNext}
            disabled={!isClinicalTextProvided}
            endIcon={<ArrowForwardIcon />}
          >
            {t("deidentify.stepper.actions.next")}
          </StepperActionButton>
        </StepperActionsContainer>
      );
    }

    if (activeStep === DEIDENTIFY_STEP.RESULT) {
      return (
        <StepperActionsContainer>
          <StepperBackButton
            onClick={handleStepBack}
            startIcon={<ArrowBackIcon />}
          >
            {t("deidentify.stepper.actions.back")}
          </StepperBackButton>
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
      <DeidentifyStepperSteps>
        {DEIDENTIFY_STEP_LABEL_KEYS.map((labelKey, index) => {
          const isActive = index === activeStep;
          const isCompleted = isStepCompleted(index);

          const isPreviousCompleted = index > 0 && isStepCompleted(index - 1);

          return (
            <Fragment key={labelKey}>
              {index > 0 && (
                <DeidentifyStepConnector isCompleted={isPreviousCompleted} />
              )}
              <DeidentifyStepItem>
                <DeidentifyStepIcon
                  isActive={isActive}
                  isCompleted={isCompleted}
                >
                  {isCompleted ? (
                    <CheckIcon sx={{ fontSize: 20 }} />
                  ) : (
                    index + 1
                  )}
                </DeidentifyStepIcon>
                <DeidentifyStepLabel
                  isActive={isActive}
                  isCompleted={isCompleted}
                >
                  {t(labelKey)}
                </DeidentifyStepLabel>
              </DeidentifyStepItem>
            </Fragment>
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
