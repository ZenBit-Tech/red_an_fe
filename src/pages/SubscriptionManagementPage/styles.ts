import { Box, Typography, Slider, Button } from "@mui/material";
import { styled, type Theme } from "@mui/material/styles";

type ProfPlanBoxProps = {
  isCurrent: boolean;
};

type ProfPlanStateProps = {
  isCurrent: boolean;
};

export const PageWrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(9, 10, 20),
}));

export const PageHeader = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize48,
}));

export const ActivePlanLabel = styled(Box)(({ theme }) => ({
  display: "flex",
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize20,
  color: theme.palette.primaryColors[200],
  height: theme.spacing(15),
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2, 3),
  background: theme.palette.strokeColors[120],
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    fontSize: theme.typography.fontSize12,
    height: theme.spacing(8.25),
  },
}));

export const PageDescription = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight500,
  fontSize: theme.typography.fontSize20,
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down("lg")]: {
    marginBottom: theme.spacing(6),
  },
}));

export const PlansWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: theme.spacing(6),
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const CurrentPlanContainer = styled(Box)(({ theme }) => ({
  width: theme.spacing(129),
  [theme.breakpoints.down("lg")]: {
    width: theme.spacing(150.75),
  },
}));

export const FreePlanTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight500,
  fontSize: theme.typography.fontSize32,
  marginBottom: theme.spacing(8),
  color: theme.palette.primaryColors[400],
  [theme.breakpoints.down("lg")]: {
    marginBottom: theme.spacing(6),
  },
}));

export const FreePlanBox = styled(Box)(({ theme }) => ({
  width: "100%",
  border: `1px solid ${theme.palette.primaryColors[400]}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(10, 8),
  background: theme.palette.neutralColors[900],
  boxShadow: "0 4px 24px 0 rgba(0, 0, 0, 0.4)",
}));

export const FreePlanState = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight400,
  fontSize: theme.typography.fontSize14,
  borderRadius: theme.spacing(3),
  padding: theme.spacing(1, 3),
  width: theme.spacing(21),
  height: "auto",
  marginBottom: theme.spacing(3),
  background: theme.palette.primaryColors[400],
  color: theme.palette.textColors[50],
  textAlign: "center",
}));

export const PlanName = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight600,
  fontSize: theme.typography.fontSize32,
  color: theme.palette.primaryColors[50],
}));

export const PlanPriseBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "baseline",
  marginBottom: theme.spacing(4),
}));

export const FreePlanPrise = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize38,
  color: theme.palette.primaryColors[50],
}));

export const FreePlanPeriod = styled(Typography)(({ theme }) => ({
  display: "flex",
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight400,
  fontSize: theme.typography.fontSize16,
  color: theme.palette.textColors[200],
  alignItems: "baseline",
  marginLeft: theme.spacing(0.5),
}));

export const FreePlanConditions = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight400,
  fontSize: theme.typography.fontSize16,
  color: theme.palette.textColors[200],
  marginBottom: theme.spacing(4),
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  fill: theme.palette.textColors[400],
  width: theme.spacing(4),
  height: theme.spacing(4),
  marginRight: theme.spacing(3),
}));

export const CustomSliderBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  alignItems: "flex-start",
  paddingTop: theme.spacing(6),
}));

export const SliderIndicatorString = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
}));

export const CustomSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.primary.main,
  height: 8,
  width: "100%",
  boxSizing: "border-box",

  "& .MuiSlider-thumb": {
    height: theme.spacing(5),
    width: theme.spacing(5),
    border: `2px solid ${theme.palette.primary.main}`,

    "&:focus, &:hover, &.Mui-active": {
      boxShadow: "0px 0px 0px 8px rgba(59, 130, 246, 0.16)",
    },
  },

  "& .MuiSlider-track": {
    border: "none",
    borderRadius: 4,
    width: "100%",
  },

  "& .MuiSlider-rail": {
    background: theme.palette.strokeColors[150],
    borderRadius: 4,
  },
}));

export const ProfPlanContainer = styled(CurrentPlanContainer)(() => ({}));

export const ProfPlanTitle = styled(FreePlanTitle)(({ theme }) => ({
  color: theme.palette.primaryColors[50],
}));

export const ProfPlanBox = styled(FreePlanBox, {
  shouldForwardProp: (prop) => prop !== "isCurrent",
})<ProfPlanBoxProps>(({ theme, isCurrent }) => ({
  border: `2px solid ${
    isCurrent
      ? theme.palette.primaryColors[400]
      : theme.palette.primaryColors[200]
  }`,
}));

export const ProfPlanState = styled(FreePlanState, {
  shouldForwardProp: (prop) => prop !== "isCurrent",
})<ProfPlanStateProps>(({ theme, isCurrent }) => ({
  width: theme.spacing(31),

  background: isCurrent
    ? theme.palette.primaryColors[400]
    : theme.palette.primaryColors[200],

  color: isCurrent
    ? theme.palette.textColors[50]
    : theme.palette.primaryColors[700],
}));

export const ProfPlanPrise = styled(FreePlanPrise)(({ theme }) => ({
  color: theme.palette.primaryColors[200],
}));

export const ProfPlanPeriod = styled(FreePlanPeriod)(({ theme }) => ({
  color: theme.palette.textColors[200],
}));

export const ProfPlanConditionsList = styled("ul")(({ theme }) => ({
  width: "100%",
  listStyle: "none",
  padding: 0,
  marginBottom: theme.spacing(8),
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: theme.spacing(6),
}));

export const ConditionsItem = styled("li")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: theme.spacing(3),
}));

export const ConditionIconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
  flexShrink: 0,
  "& svg": {
    fontSize: "20px",
    fill: theme.palette.primaryColors[200],
  },
}));

export const ConditionTextContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const ConditionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight600,
  fontSize: theme.typography.fontSize16,
  color: theme.palette.textColors[50],
  marginBottom: theme.spacing(1),
}));

export const ConditionDescription = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight400,
  fontSize: theme.typography.fontSize12,
  color: theme.palette.textColors[200],
}));

export const UpgradeButton = styled(Button)(({ theme }) => ({
  display: "flex",
  width: "300px",
  height: "60px",
  padding: theme.spacing(5, 10),
  borderRadius: theme.spacing(2),
  background: theme.palette.primaryColors[200],
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize16,
  color: theme.palette.neutralColors[700],
  margin: "0 auto",
  textAlign: "center",
  border: `1px solid ${theme.palette.strokeColors[150]}`,
  textTransform: "none",

  "&:hover": {
    backgroundImage: `linear-gradient(167deg, ${theme.palette.primaryColors[500]} 28.37%, ${theme.palette.primaryColors[900]} 100%)`,
    boxShadow: `0px 4px 12px ${theme.palette.primaryColors[700]}4D`,
  },
}));

export const PaymentHistoryContainer = styled(Box)(() => ({}));

export const PaymentHistoryTitle = styled(ProfPlanTitle)(({ theme }) => ({
  marginBottom: 0,
  padding: theme.spacing(10, 0, 8),
}));

export const InfoPlanBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(4),
  padding: theme.spacing(11),
  width: "100%",
  height: "auto",
  boxShadow: "0 4px 24px 0 rgba(0, 0, 0, 0.4)",
  background: theme.palette.neutralColors[900],
}));

export const InfoPlanCardString = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid rgba(67, 70, 82, 0.5)",
  padding: theme.spacing(0, 1, 2),
  marginBottom: theme.spacing(6),
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight500,
  fontSize: theme.typography.fontSize16,
  color: theme.palette.textColors[200],
}));

export const StatusValue = styled("span")(({ theme }) => ({
  color: theme.palette.primaryColors[200],
}));

export const CancelButton = styled(UpgradeButton)(({ theme }) => ({
  display: "flex",
  width: "366px",

  padding: theme.spacing(5, 10),
  borderRadius: theme.spacing(2),
  background: "inherit",

  color: theme.palette.primaryColors[50],
  margin: "0 auto",
  textAlign: "center",
  border: `1px solid #434652`,
  textTransform: "none",

  "&:hover": {
    backgroundImage: `linear-gradient(167deg, ${theme.palette.primaryColors[500]} 28.37%, ${theme.palette.primaryColors[900]} 100%)`,
    boxShadow: `0px 4px 12px ${theme.palette.primaryColors[700]}4D`,
  },
}));

export const modalStyles = (
  theme: Theme,
  status: "idle" | "loading" | "success" | "error",
) => {
  const isError = status === "error";
  return {
    backdrop: {
      backgroundColor: "rgba(13, 17, 27, 0.8)",
      backdropFilter: "blur(1px)",
    },
    container: {
      position: "absolute" as const,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      maxWidth: 630,
      backgroundColor: theme.palette.neutralColors[900],
      borderRadius: theme.spacing(2),
      padding: theme.spacing(9, 38),
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",

      outline: "none",
      border: isError
        ? `1px solid ${theme.palette.tertiaryColors[600]}`
        : `1px solid ${theme.palette.textColors[400]}`,
      [theme.breakpoints.down("lg")]: {
        maxWidth: 440,
        padding: theme.spacing(6, 16.25, 8, 16.25),
      },
    },
    outerCircle: {
      marginBottom: theme.spacing(4),
      backgroundColor: "rgba(178, 197, 255, 0.2)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      width: "80px",
      height: "80px",
    },
    innerCircle: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      backgroundColor: theme.palette.textColors[400],
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    checkIcon: {
      width: 24,
      height: 24,
      fill: "rgba(19, 27, 46, 0.8)",
    },
    title: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize20,
      fontWeight: theme.typography.fontWeight700,
      textAlign: "center" as const,
      color: theme.palette.textColors[50],
      marginBottom: theme.spacing(2),
    },
    subTitle: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize14,
      fontWeight: theme.typography.fontWeight400,
      color: theme.palette.textColors[200],
      textAlign: "center" as const,
      marginBottom: theme.spacing(11),
    },
    closeButton: {
      border: `0.80px solid ${theme.palette.neutralColors[600]}4D`,
      borderRadius: "8px",
      padding: theme.spacing(3, 4),
      width: "166px",
      height: "48px",
      background: theme.palette.neutralColors[600],
      fontWeight: theme.typography.fontWeight500,
      fontSize: theme.typography.fontSize16,
      color: theme.palette.textColors[50],
      cursor: "pointer",

      "&:hover": {
        backgroundImage: "none",

        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
      },

      "&:active": {
        transform: "scale(0.98)",
        backgroundImage: "none",
        backgroundColor: "black",
      },
    },
  };
};
