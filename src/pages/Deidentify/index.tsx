import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";
import { AnalysisResults } from "@/components/AnalysisResults";
import { ClinicalTextInput } from "@/components/ClinicalInput";
import { ComplianceFrameworkSelection } from "@/components/ComplianceSelect/ComplianceFrameworkSelection";
import { DeidentifySettings } from "@/components/Deidentify";
import {
  DEIDENTIFY_STEP,
  useDeidentify,
} from "@/pages/Deidentify/useDeidentify";

import { DEIDENTIFY_STEP_LABEL_KEYS } from "@/pages/Deidentify/constants";
import {
  DeidentifyPageContent,
  DeidentifyPageSections,
  DeidentifyPageWrapper,
  DeidentifyStepConnector,
  DeidentifyStepIcon,
  DeidentifyStepItem,
  DeidentifyStepLabel,
  DeidentifyStepperContainer,
  DeidentifyStepperSteps,
  StepperActionButton,
  StepperActionsContainer,
  StepperBackButton,
  StepperCompletedIcon,
  backgroundGlow,
} from "@/pages/Deidentify/styles";
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
                  {isCompleted ? <StepperCompletedIcon /> : index + 1}
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
          <Box sx={backgroundGlow} />
          {renderStepper()}
          {renderCurrentStep()}
          {renderStepActions()}
        </DeidentifyPageSections>
      </DeidentifyPageContent>
    </DeidentifyPageWrapper>
  );
};

export default DeidentifyPage;
