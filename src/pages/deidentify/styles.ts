import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const deidentifyPageStyles = {
  minHeight: "100vh",
  paddingY: 6,
  paddingX: 3,
  paddingYMobile: 2,
  paddingXMobile: 1,
  maxContentWidth: 1560,
  sectionsGap: 3,
  stepperContainerPaddingDesktop: 3,
  stepperContainerPaddingMobile: 2,
  stepperActionsGap: 1.5,
  stepperActionsMarginTop: 1,
  stepperPanelBorderRadius: 3,
  stepperIconSizeDesktop: 40,
  stepperIconSizeMobile: 34,
  stepperTrackHeight: 2,
  stepperLabelOffsetDesktop: 2,
  stepperLabelOffsetMobile: 1.5,
} as const;

interface DeidentifyStepIconProps {
  isActive: boolean;
  isCompleted: boolean;
}

interface DeidentifyStepLabelProps {
  isActive: boolean;
  isCompleted: boolean;
  isFirstStep: boolean;
}

interface DeidentifyStepperProgressProps {
  activeStep: number;
  stepCount: number;
}

const DEIDENTIFY_STEPPER_COLOR = {
  PANEL_BACKGROUND: "#0b1326",
  PANEL_BORDER: "#1c2742",
  TRACK: "#222a3d",
  TRACK_FILL: "#0d47a1",
  STEP_BORDER: "#0b1326",
  COMPLETED_BACKGROUND: "#0d47a1",
  ACTIVE_BACKGROUND: "#b0c6ff",
  ACTIVE_TEXT: "#002d6f",
  INACTIVE_BACKGROUND: "#222a3d",
  INACTIVE_LABEL: "#c3c6d4",
  FIRST_COMPLETED_LABEL: "#dae2fd",
  ACTIVE_LABEL: "#b0c6ff",
} as const;

const DEIDENTIFY_STEPPER_SHADOW = {
  COMPLETED:
    "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
  ACTIVE: "0px 0px 20px 0px rgba(176, 198, 255, 0.4)",
} as const;

const getProgressWidth = (activeStep: number, stepCount: number): string => {
  if (stepCount <= 1) {
    return "0px";
  }

  return `${(Math.max(activeStep, 0) / (stepCount - 1)) * 100}%`;
};

const getStepperTrackTop = (
  paddingUnits: number,
  iconSize: number,
  trackHeight: number,
): string =>
  `calc(${paddingUnits * 4}px + ${iconSize / 2}px - ${trackHeight / 2}px)`;

export const DeidentifyPageWrapper = styled(Box)(({ theme }) => ({
  minHeight: deidentifyPageStyles.minHeight,
  boxSizing: "border-box",
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(
    deidentifyPageStyles.paddingY,
    deidentifyPageStyles.paddingX,
  ),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(
      deidentifyPageStyles.paddingYMobile,
      deidentifyPageStyles.paddingXMobile,
    ),
  },
}));

export const DeidentifyPageContent = styled(Box)({
  width: "100%",
  maxWidth: deidentifyPageStyles.maxContentWidth,
  boxSizing: "border-box",
  margin: "0 auto",
});

export const DeidentifyPageSections = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(deidentifyPageStyles.sectionsGap),
}));

export const DeidentifyStepperContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
  padding: theme.spacing(deidentifyPageStyles.stepperContainerPaddingDesktop),
  border: `1px solid ${DEIDENTIFY_STEPPER_COLOR.PANEL_BORDER}`,
  borderRadius: theme.spacing(deidentifyPageStyles.stepperPanelBorderRadius),
  backgroundColor: DEIDENTIFY_STEPPER_COLOR.PANEL_BACKGROUND,
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(deidentifyPageStyles.stepperContainerPaddingMobile),
  },
}));

export const DeidentifyStepperProgressTrack = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: getStepperTrackTop(
    deidentifyPageStyles.stepperContainerPaddingDesktop,
    deidentifyPageStyles.stepperIconSizeDesktop,
    deidentifyPageStyles.stepperTrackHeight,
  ),
  left: `calc(${theme.spacing(deidentifyPageStyles.stepperContainerPaddingDesktop)} + ${deidentifyPageStyles.stepperIconSizeDesktop / 2}px)`,
  right: `calc(${theme.spacing(deidentifyPageStyles.stepperContainerPaddingDesktop)} + ${deidentifyPageStyles.stepperIconSizeDesktop / 2}px)`,
  height: `${deidentifyPageStyles.stepperTrackHeight}px`,
  backgroundColor: DEIDENTIFY_STEPPER_COLOR.TRACK,
  [theme.breakpoints.down("sm")]: {
    top: getStepperTrackTop(
      deidentifyPageStyles.stepperContainerPaddingMobile,
      deidentifyPageStyles.stepperIconSizeMobile,
      deidentifyPageStyles.stepperTrackHeight,
    ),
    left: `calc(${theme.spacing(deidentifyPageStyles.stepperContainerPaddingMobile)} + ${deidentifyPageStyles.stepperIconSizeMobile / 2}px)`,
    right: `calc(${theme.spacing(deidentifyPageStyles.stepperContainerPaddingMobile)} + ${deidentifyPageStyles.stepperIconSizeMobile / 2}px)`,
  },
}));

export const DeidentifyStepperProgress = styled(Box, {
  shouldForwardProp: (prop) => prop !== "activeStep" && prop !== "stepCount",
})<DeidentifyStepperProgressProps>(({ theme, activeStep, stepCount }) => ({
  height: "100%",
  backgroundColor: DEIDENTIFY_STEPPER_COLOR.TRACK_FILL,
  width: getProgressWidth(activeStep, stepCount),
  transition: "width 220ms ease",
  [theme.breakpoints.down("sm")]: {
    width: getProgressWidth(activeStep, stepCount),
  },
}));

export const DeidentifyStepperSteps = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
});

export const DeidentifyStepItem = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  zIndex: 1,
});

export const DeidentifyStepIcon = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isActive" && prop !== "isCompleted",
})<DeidentifyStepIconProps>(({ theme, isActive, isCompleted }) => {
  const baseStyle = {
    width: `${deidentifyPageStyles.stepperIconSizeDesktop}px`,
    height: `${deidentifyPageStyles.stepperIconSizeDesktop}px`,
    borderRadius: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontFamily: "Manrope, Inter, sans-serif",
    fontSize: "16px",
    lineHeight: "24px",
    border: `4px solid ${DEIDENTIFY_STEPPER_COLOR.STEP_BORDER}`,
    transition: "all 220ms ease",
    [theme.breakpoints.down("sm")]: {
      width: `${deidentifyPageStyles.stepperIconSizeMobile}px`,
      height: `${deidentifyPageStyles.stepperIconSizeMobile}px`,
      fontSize: "0.88rem",
      lineHeight: "1",
    },
  } as const;

  if (isCompleted) {
    return {
      ...baseStyle,
      backgroundColor: DEIDENTIFY_STEPPER_COLOR.COMPLETED_BACKGROUND,
      color: theme.palette.common.white,
      boxShadow: DEIDENTIFY_STEPPER_SHADOW.COMPLETED,
    };
  }

  if (isActive) {
    return {
      ...baseStyle,
      backgroundColor: DEIDENTIFY_STEPPER_COLOR.ACTIVE_BACKGROUND,
      color: DEIDENTIFY_STEPPER_COLOR.ACTIVE_TEXT,
      boxShadow: DEIDENTIFY_STEPPER_SHADOW.ACTIVE,
    };
  }

  return {
    ...baseStyle,
    backgroundColor: DEIDENTIFY_STEPPER_COLOR.INACTIVE_BACKGROUND,
    color: DEIDENTIFY_STEPPER_COLOR.INACTIVE_LABEL,
  };
});

export const DeidentifyStepLabel = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "isActive" && prop !== "isCompleted" && prop !== "isFirstStep",
})<DeidentifyStepLabelProps>(({
  theme,
  isActive,
  isCompleted,
  isFirstStep,
}) => {
  let color: string = DEIDENTIFY_STEPPER_COLOR.INACTIVE_LABEL;
  let fontWeight = 500;

  if (isCompleted && isFirstStep) {
    color = DEIDENTIFY_STEPPER_COLOR.FIRST_COMPLETED_LABEL;
    fontWeight = 400;
  } else if (isActive) {
    color = DEIDENTIFY_STEPPER_COLOR.ACTIVE_LABEL;
    fontWeight = 700;
  }

  return {
    marginTop: theme.spacing(deidentifyPageStyles.stepperLabelOffsetDesktop),
    fontFamily: "Manrope, Inter, sans-serif",
    fontSize: "12px",
    lineHeight: "16px",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    textAlign: "center",
    color,
    fontWeight,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(deidentifyPageStyles.stepperLabelOffsetMobile),
      fontSize: "10px",
      lineHeight: "14px",
    },
  };
});

export const StepperActionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: theme.spacing(deidentifyPageStyles.stepperActionsGap),
  marginTop: theme.spacing(deidentifyPageStyles.stepperActionsMarginTop),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));

export const StepperActionButton = styled(Button)(({ theme }) => ({
  minWidth: theme.spacing(18),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
