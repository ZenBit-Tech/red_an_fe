import CheckIcon from "@mui/icons-material/Check";
import { Box, Button } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { theme } from "@/common/theme/theme";
export interface DeidentifyStepIconProps {
  isActive: boolean;
  isCompleted: boolean;
}

export interface DeidentifyStepLabelProps {
  isActive: boolean;
  isCompleted: boolean;
}

export interface DeidentifyStepperProgressProps {
  activeStep: number;
  stepCount: number;
}

export interface DeidentifyStepConnectorProps {
  isCompleted: boolean;
}

const getProgressWidth = (activeStep: number, stepCount: number): string => {
  if (stepCount <= 1) {
    return "0px";
  }
  return `${(Math.max(activeStep, 0) / (stepCount - 1)) * 100}%`;
};

export const DeidentifyPageWrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  boxSizing: "border-box",
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(9, 10),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2, 1),
  },
}));

export const DeidentifyPageContent = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: theme.spacing(390),
  boxSizing: "border-box",
  margin: "0 auto",
  position: "relative",
}));

export const DeidentifyPageSections = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  "& > :nth-of-type(2)": {
    marginTop: theme.spacing(4),
  },
  "& > :nth-of-type(3)": {
    marginTop: theme.spacing(12.5),
  },
}));

export const DeidentifyStepperContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
  padding: theme.spacing(3),
  borderRadius: theme.spacing(3),
  backgroundColor: "transparent",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

export const DeidentifyStepperProgressTrack = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: `calc(${theme.spacing(3)} + ${theme.spacing(10)} / 2 - ${theme.spacing(0.5)} / 2)`,
  left: `calc(${theme.spacing(3)} + ${theme.spacing(10)} / 2)`,
  right: `calc(${theme.spacing(3)} + ${theme.spacing(10)} / 2)`,
  height: theme.spacing(0.5), // 2px
  backgroundColor: theme.palette.neutralColors[800],
  [theme.breakpoints.down("sm")]: {
    top: `calc(${theme.spacing(2)} + ${theme.spacing(8.5)} / 2 - ${theme.spacing(0.5)} / 2)`,
    left: `calc(${theme.spacing(2)} + ${theme.spacing(8.5)} / 2)`,
    right: `calc(${theme.spacing(2)} + ${theme.spacing(8.5)} / 2)`,
  },
}));

export const DeidentifyStepperProgress = styled(Box, {
  shouldForwardProp: (prop) => prop !== "activeStep" && prop !== "stepCount",
})<DeidentifyStepperProgressProps>(({ theme, activeStep, stepCount }) => ({
  height: "100%",
  backgroundColor: theme.palette.primaryColors[700],
  width: getProgressWidth(activeStep, stepCount),
  transition: "width 220ms ease",
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
    width: theme.spacing(10),
    height: theme.spacing(10),
    borderRadius: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: theme.typography.fontWeight700,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize16,
    transition: "all 220ms ease",
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(8.5),
      height: theme.spacing(8.5),
      fontSize: theme.typography.fontSize14,
    },
  } as const;

  if (isCompleted) {
    return {
      ...baseStyle,
      backgroundColor: theme.palette.primaryColors[700],
      color: theme.palette.textColors[50],
      boxShadow: `0px 10px 15px -3px ${alpha(theme.palette.neutralColors[900], 0.1)}, 0px 4px 6px -4px ${alpha(theme.palette.neutralColors[900], 0.1)}`,
    };
  }

  if (isActive) {
    return {
      ...baseStyle,
      backgroundColor: theme.palette.primaryColors[200],
      color: theme.palette.primaryColors[900],
      boxShadow: `0px 0px 20px 0px ${alpha(theme.palette.primaryColors[200], 0.4)}`,
    };
  }

  return {
    ...baseStyle,
    backgroundColor: theme.palette.neutralColors[800],
    color: theme.palette.textColors[200],
  };
});

export const StepperActionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(20),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));

export const StepperActionButton = styled(Button)(({ theme }) => ({
  width: theme.spacing(48.75),
  height: theme.spacing(14),
  minWidth: 0,
  padding: theme.spacing(3, 20),
  borderRadius: theme.spacing(2),
  backgroundImage: `linear-gradient(167deg, ${theme.palette.primaryColors[700]} 0%, ${theme.palette.primaryColors[900]} 100%)`,
  backgroundColor: "transparent",
  color: theme.palette.textColors[50],
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize20,
  textAlign: "right",
  textTransform: "none",
  "&:hover": {
    backgroundImage: `linear-gradient(167deg, ${theme.palette.primaryColors[700]} 0%, ${theme.palette.primaryColors[900]} 100%)`,
    filter: "brightness(1.08)",
  },
  "&.Mui-disabled": {
    backgroundImage: `linear-gradient(167deg, ${theme.palette.primaryColors[800]} 0%, ${theme.palette.neutralColors[900]} 100%)`,
    color: alpha(theme.palette.textColors[50], 0.45),
    filter: "brightness(0.55)",
    cursor: "not-allowed",
    pointerEvents: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const StepperBackButton = styled(Button)(({ theme }) => ({
  marginRight: "auto",
  padding: theme.spacing(1.5, 1),
  color: theme.palette.textColors[200],
  backgroundImage: "none",
  backgroundColor: "transparent",
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize16,
  textAlign: "center",
  textTransform: "none",
  "&:hover": {
    backgroundImage: "none",
    backgroundColor: alpha(theme.palette.textColors[50], 0.04),
  },
  "&.Mui-disabled": {
    color: alpha(theme.palette.textColors[200], 0.5),
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const DeidentifyStepConnector = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isCompleted",
})<DeidentifyStepConnectorProps>(({ theme, isCompleted }) => ({
  flex: 1,
  alignSelf: "flex-start",
  height: isCompleted ? theme.spacing(0.5) : theme.spacing(0.5),
  backgroundColor: isCompleted
    ? theme.palette.primaryColors[700]
    : theme.palette.neutralColors[800],
  marginTop: `calc(${theme.spacing(10)} / 2)`,
  transition: "background-color 220ms ease, height 220ms ease",
  [theme.breakpoints.down("sm")]: {
    marginTop: `calc(${theme.spacing(8.5)} / 2)`,
  },
}));

export const DeidentifyStepLabel = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isActive" && prop !== "isCompleted",
})<DeidentifyStepLabelProps>(({ theme, isActive, isCompleted }) => ({
  marginTop: theme.spacing(2),
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize12,
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  textAlign: "center",
  color: isCompleted
    ? theme.palette.primaryColors[200]
    : isActive
      ? theme.palette.primaryColors[50]
      : theme.palette.textColors[200],
  fontWeight:
    isActive || isCompleted
      ? theme.typography.fontWeight700
      : theme.typography.fontWeight500,
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(1.5),
    fontSize: theme.typography.fontSize12,
  },
}));

export const backgroundGlow = {
  position: "absolute",
  top: theme.spacing(-25),
  left: theme.spacing(-12.5),
  width: theme.spacing(175),
  height: theme.spacing(75),
  background: theme.palette.strokeColors[120],
  filter: `blur(${theme.spacing(25)})`,
  borderRadius: "50%",
  pointerEvents: "none",
  zIndex: 0,
};
export const StepperCompletedIcon = styled(CheckIcon)(({ theme }) => ({
  fontSize: theme.typography.fontSize20,
}));
