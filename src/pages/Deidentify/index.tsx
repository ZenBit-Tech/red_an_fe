import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";

import { AnalysisResults } from "@/components/AnalysisResults";
import { ClinicalTextInput } from "@/components/ClinicalInput";
import { ComplianceFrameworkSelection } from "@/components/ComplianceSelect/ComplianceFrameworkSelection";
import DeidentifySettings from "@/components/Deidentify";
import {
  DEIDENTIFY_STEP,
  useDeidentify,
} from "@/pages/Deidentify/useDeidentify";
import { DEIDENTIFY_STEP_LABEL_KEYS } from "@/pages/Deidentify/constants";
import * as S from "@/pages/Deidentify/styles";

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
    clinicalInputKey,
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
        />
      );
    }

    if (activeStep === DEIDENTIFY_STEP.INPUT_DATA) {
      return <ClinicalTextInput key={clinicalInputKey} />;
    }

    if (activeStep === DEIDENTIFY_STEP.RESULT && isResultReady) {
      return (
        <Box ref={analysisResultsRef}>
          <AnalysisResults
            key={analysisRunId}
            inputText={analyzedInputText}
            entities={entities}
            jobId={jobId}
            onBack={handleStepBack}
            onRestart={handleRestart}
          />
        </Box>
      );
    }

    return null;
  };

  const renderStepActions = (): React.ReactNode => {
    if (activeStep === DEIDENTIFY_STEP.FRAMEWORK) {
      return (
        <S.StepperActionsContainer>
          <S.StepperActionButton
            variant="contained"
            onClick={handleFrameworkNext}
            endIcon={<ArrowForwardIcon />}
          >
            {t("deidentify.stepper.actions.next")}
          </S.StepperActionButton>
        </S.StepperActionsContainer>
      );
    }

    if (activeStep === DEIDENTIFY_STEP.SETTINGS) {
      return (
        <S.StepperActionsContainer>
          <S.StepperBackButton
            onClick={handleStepBack}
            startIcon={<ArrowBackIcon />}
            type="button"
          >
            {t("deidentify.stepper.actions.back")}
          </S.StepperBackButton>
          <S.StepperActionButton
            key="btn-analyze-submit"
            type="submit"
            form="deidentify-settings-form"
            endIcon={<ArrowForwardIcon />}
          >
            {t("deidentify.stepper.actions.analyzeAndContinue")}
          </S.StepperActionButton>
        </S.StepperActionsContainer>
      );
    }

    if (activeStep === DEIDENTIFY_STEP.INPUT_DATA) {
      return (
        <S.StepperActionsContainer>
          <S.StepperBackButton
            onClick={handleStepBack}
            startIcon={<ArrowBackIcon />}
            type="button"
          >
            {t("deidentify.stepper.actions.back")}
          </S.StepperBackButton>
          <S.StepperActionButton
            variant="contained"
            onClick={handleInputNext}
            disabled={!isClinicalTextProvided}
            endIcon={<ArrowForwardIcon />}
            type="button"
            key="btn-input-next"
          >
            {t("deidentify.stepper.actions.next")}
          </S.StepperActionButton>
        </S.StepperActionsContainer>
      );
    }

    return null;
  };

  const renderStepper = (): React.ReactNode => (
    <S.DeidentifyStepperContainer>
      <S.DeidentifyStepperSteps>
        {DEIDENTIFY_STEP_LABEL_KEYS.map((labelKey, index) => {
          const isActive = index === activeStep;
          const isCompleted = isStepCompleted(index);
          const isPreviousCompleted = index > 0 && isStepCompleted(index - 1);

          return (
            <Fragment key={labelKey}>
              {index > 0 && (
                <S.DeidentifyStepConnector isCompleted={isPreviousCompleted} />
              )}
              <S.DeidentifyStepItem>
                <S.DeidentifyStepIcon
                  isActive={isActive}
                  isCompleted={isCompleted}
                >
                  {isCompleted ? <S.StepperCompletedIcon /> : index + 1}
                </S.DeidentifyStepIcon>
                <S.DeidentifyStepLabel
                  isActive={isActive}
                  isCompleted={isCompleted}
                >
                  {t(labelKey)}
                </S.DeidentifyStepLabel>
              </S.DeidentifyStepItem>
            </Fragment>
          );
        })}
      </S.DeidentifyStepperSteps>
    </S.DeidentifyStepperContainer>
  );

  return (
    <S.DeidentifyPageWrapper>
      <S.DeidentifyPageContent>
        <S.DeidentifyPageSections>
          <Box sx={S.backgroundGlow} />
          {renderStepper()}
          {renderCurrentStep()}
          {renderStepActions()}
        </S.DeidentifyPageSections>
      </S.DeidentifyPageContent>
    </S.DeidentifyPageWrapper>
  );
};

export default DeidentifyPage;
