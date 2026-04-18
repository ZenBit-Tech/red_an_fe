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
});

export const DeidentifyPageSections = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(deidentifyPageStyles.sectionsGap),
}));

export const DeidentifyStepperContainer = styled(Box)(({ theme }) => {
  const stepperColors = getStepperColors(theme);

  return {
    width: "100%",
    position: "relative",
    padding: theme.spacing(deidentifyPageStyles.stepperContainerPaddingDesktop),
    border: `1px solid ${stepperColors.panelBorder}`,
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

export const DeidentifyStepLabel = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "isActive" && prop !== "isCompleted" && prop !== "isFirstStep",
})<DeidentifyStepLabelProps>(({
  theme,
  isActive,
  isCompleted,
  isFirstStep,
}) => {
  const stepperColors = getStepperColors(theme);
  let color: string = stepperColors.inactiveLabel;
  let fontWeight = theme.typography.fontWeight500;

  if (isCompleted && isFirstStep) {
    color = stepperColors.firstCompletedLabel;
    fontWeight = theme.typography.fontWeight400;
  } else if (isActive) {
    color = stepperColors.activeLabel;
    fontWeight = theme.typography.fontWeight700;
  }

  return {
    marginTop: theme.spacing(deidentifyPageStyles.stepperLabelOffsetDesktop),
    fontFamily: theme.typography.fontFamily,
    fontSize: `${theme.typography.fontSize12}px`,
    lineHeight: "1.333",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    textAlign: "center",
    color,
    fontWeight,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(deidentifyPageStyles.stepperLabelOffsetMobile),
      fontSize: `${theme.typography.fontSize10}px`,
      lineHeight: "1.4",
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
