import CheckIcon from "@mui/icons-material/Check";
import { Box, Button } from "@mui/material";
import { styled, type Theme } from "@mui/material/styles";

const deidentifyPageStyles = {
  minHeight: "100vh",
  paddingY: 6,
  paddingX: 3,
  paddingYMobile: 2,
  paddingXMobile: 1,
  maxContentWidth: 1560,
  stepperToContentGap: 4,
  contentToActionsGap: 12.5,
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
const DEIDENTIFY_STEPPER_COLOR = {
  TRACK: "#222A3D",
  TRACK_COMPLETED: "#0B3D8B",
  ACTIVE_BACKGROUND: "#b0c6ff",
  ACTIVE_TEXT: "#051f46",
  COMPLETED_BACKGROUND: "#0d47a1",
  COMPLETED_TEXT: "#ffffff",
  COMPLETED_LABEL: "#b0c6ff",
  INACTIVE_BACKGROUND: "#131b2e",
  INACTIVE_BORDER: "#222A3D",
  INACTIVE_NUMBER: "#ffffff",
  INACTIVE_LABEL: "#70778e",
  ACTIVE_LABEL: "#dae2fd",
  FOOTER_DIVIDER: "rgba(67, 70, 82, 0.4)",
} as const;
interface DeidentifyStepIconProps {
  isActive: boolean;
  isCompleted: boolean;
}

interface DeidentifyStepLabelProps {
  isActive: boolean;
  isCompleted: boolean;
}

interface DeidentifyStepperProgressProps {
  activeStep: number;
  stepCount: number;
}

const getStepperColors = (theme: Theme) => ({
  panelBackground: theme.palette.backgroundColor,
  panelBorder: theme.palette.strokeColors[400],
  track: theme.palette.neutralColors[800],
  trackFill: theme.palette.primaryColors[700],
  stepBorder: theme.palette.backgroundColor,
  completedBackground: theme.palette.primaryColors[700],
  activeBackground: theme.palette.primaryColors[200],
  activeText: theme.palette.primaryColors[900],
  inactiveBackground: theme.palette.neutralColors[800],
  inactiveLabel: theme.palette.textColors[200],
  firstCompletedLabel: theme.palette.primaryColors[50],
  activeLabel: theme.palette.primaryColors[200],
});

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
  position: "relative",
});

export const DeidentifyPageSections = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  "& > :nth-of-type(2)": {
    marginTop: theme.spacing(deidentifyPageStyles.stepperToContentGap),
  },
  "& > :nth-of-type(3)": {
    marginTop: theme.spacing(deidentifyPageStyles.contentToActionsGap),
  },
}));

export const DeidentifyStepperContainer = styled(Box)(({ theme }) => {
  const stepperColors = getStepperColors(theme);

  return {
    width: "100%",
    position: "relative",
    padding: theme.spacing(deidentifyPageStyles.stepperContainerPaddingDesktop),

    borderRadius: theme.spacing(deidentifyPageStyles.stepperPanelBorderRadius),
    backgroundColor: stepperColors.panelBackground,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(
        deidentifyPageStyles.stepperContainerPaddingMobile,
      ),
    },
  };
});

export const DeidentifyStepperProgressTrack = styled(Box)(({ theme }) => {
  const stepperColors = getStepperColors(theme);

  return {
    position: "absolute",
    top: getStepperTrackTop(
      deidentifyPageStyles.stepperContainerPaddingDesktop,
      deidentifyPageStyles.stepperIconSizeDesktop,
      deidentifyPageStyles.stepperTrackHeight,
    ),
    left: `calc(${theme.spacing(deidentifyPageStyles.stepperContainerPaddingDesktop)} + ${deidentifyPageStyles.stepperIconSizeDesktop / 2}px)`,
    right: `calc(${theme.spacing(deidentifyPageStyles.stepperContainerPaddingDesktop)} + ${deidentifyPageStyles.stepperIconSizeDesktop / 2}px)`,
    height: `${deidentifyPageStyles.stepperTrackHeight}px`,
    backgroundColor: stepperColors.track,
    [theme.breakpoints.down("sm")]: {
      top: getStepperTrackTop(
        deidentifyPageStyles.stepperContainerPaddingMobile,
        deidentifyPageStyles.stepperIconSizeMobile,
        deidentifyPageStyles.stepperTrackHeight,
      ),
      left: `calc(${theme.spacing(deidentifyPageStyles.stepperContainerPaddingMobile)} + ${deidentifyPageStyles.stepperIconSizeMobile / 2}px)`,
      right: `calc(${theme.spacing(deidentifyPageStyles.stepperContainerPaddingMobile)} + ${deidentifyPageStyles.stepperIconSizeMobile / 2}px)`,
    },
  };
});

export const DeidentifyStepperProgress = styled(Box, {
  shouldForwardProp: (prop) => prop !== "activeStep" && prop !== "stepCount",
})<DeidentifyStepperProgressProps>(({ theme, activeStep, stepCount }) => {
  const stepperColors = getStepperColors(theme);

  return {
    height: "100%",
    backgroundColor: stepperColors.trackFill,
    width: getProgressWidth(activeStep, stepCount),
    transition: "width 220ms ease",
    [theme.breakpoints.down("sm")]: {
      width: getProgressWidth(activeStep, stepCount),
    },
  };
});

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
  const stepperColors = getStepperColors(theme);

  const baseStyle = {
    width: `${deidentifyPageStyles.stepperIconSizeDesktop}px`,
    height: `${deidentifyPageStyles.stepperIconSizeDesktop}px`,
    borderRadius: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: theme.typography.fontWeight700,
    fontFamily: theme.typography.fontFamily,
    fontSize: `${theme.typography.fontSize16}px`,
    lineHeight: "1.5",
    border: `4px solid ${stepperColors.stepBorder}`,
    transition: "all 220ms ease",
    [theme.breakpoints.down("sm")]: {
      width: `${deidentifyPageStyles.stepperIconSizeMobile}px`,
      height: `${deidentifyPageStyles.stepperIconSizeMobile}px`,
      fontSize: `${theme.typography.fontSize14}px`,
      lineHeight: "1",
    },
  } as const;

  if (isCompleted) {
    return {
      ...baseStyle,
      backgroundColor: stepperColors.completedBackground,
      color: theme.palette.common.white,
      boxShadow: DEIDENTIFY_STEPPER_SHADOW.COMPLETED,
    };
  }

  if (isActive) {
    return {
      ...baseStyle,
      backgroundColor: stepperColors.activeBackground,
      color: stepperColors.activeText,
      boxShadow: DEIDENTIFY_STEPPER_SHADOW.ACTIVE,
    };
  }

  return {
    ...baseStyle,
    backgroundColor: stepperColors.inactiveBackground,
    color: stepperColors.inactiveLabel,
  };
});

export const StepperCompletedIcon = styled(CheckIcon)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize14}px`,
}));

export const StepperActionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: theme.spacing(deidentifyPageStyles.stepperActionsGap),
  marginTop: theme.spacing(deidentifyPageStyles.stepperActionsMarginTop),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));

export const StepperActionButton = styled(Button)(({ theme }) => ({
  width: "195px",
  height: "56px",
  minWidth: 0,
  padding: "12px 80px",
  borderRadius: "8px",
  backgroundImage: "linear-gradient(167deg, #0d47a1 0%, #002d6f 100%)",
  background: "linear-gradient(167deg, #0d47a1 0%, #002d6f 100%)",
  color: "#fff",
  fontFamily: `"Manrope", sans-serif`,
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "140%",
  textAlign: "right",
  textTransform: "none",
  "&:hover": {
    backgroundImage: "linear-gradient(167deg, #0d47a1 0%, #002d6f 100%)",
    background: "linear-gradient(167deg, #0d47a1 0%, #002d6f 100%)",
    filter: "brightness(1.08)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
export const StepperBackButton = styled(Button)(({ theme }) => ({
  marginRight: "auto",
  padding: theme.spacing(1.5, 1),
  color: "#c3c6d4",
  backgroundImage: "none",
  background: "transparent",
  fontFamily: `"Manrope", sans-serif`,
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "150%",
  textAlign: "center",
  textTransform: "none",
  "&:hover": {
    backgroundImage: "none",
    background: "rgba(255, 255, 255, 0.04)",
  },
  "&.Mui-disabled": {
    color: "rgba(195, 198, 212, 0.5)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
interface DeidentifyStepConnectorProps {
  isCompleted: boolean;
}

export const DeidentifyStepConnector = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isCompleted",
})<DeidentifyStepConnectorProps>(({ theme, isCompleted }) => ({
  flex: 1,
  alignSelf: "flex-start",
  height: isCompleted ? "2px" : `${deidentifyPageStyles.stepperTrackHeight}px`,
  backgroundColor: isCompleted
    ? DEIDENTIFY_STEPPER_COLOR.TRACK_COMPLETED
    : DEIDENTIFY_STEPPER_COLOR.TRACK,
  marginTop: `${deidentifyPageStyles.stepperIconSizeDesktop / 2}px`,
  transition: "background-color 220ms ease, height 220ms ease",
  [theme.breakpoints.down("sm")]: {
    marginTop: `${deidentifyPageStyles.stepperIconSizeMobile / 2}px`,
  },
}));
export const DeidentifyStepLabel = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isActive" && prop !== "isCompleted",
})<DeidentifyStepLabelProps>(({ theme, isActive, isCompleted }) => ({
  marginTop: theme.spacing(deidentifyPageStyles.stepperLabelOffsetDesktop),
  fontFamily: "Manrope, Inter, sans-serif",
  fontSize: "12px",
  lineHeight: "16px",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  textAlign: "center",
  color: isCompleted
    ? DEIDENTIFY_STEPPER_COLOR.COMPLETED_LABEL
    : isActive
      ? DEIDENTIFY_STEPPER_COLOR.ACTIVE_LABEL
      : DEIDENTIFY_STEPPER_COLOR.INACTIVE_LABEL,
  fontWeight: isActive || isCompleted ? 700 : 500,
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(deidentifyPageStyles.stepperLabelOffsetMobile),
    fontSize: "10px",
    lineHeight: "14px",
  },
}));
