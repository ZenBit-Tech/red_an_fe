import { Box, Typography, Slider, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

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
}));

export const PageDescription = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight500,
  fontSize: theme.typography.fontSize20,
  marginBottom: theme.spacing(10),
}));

export const PlansWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: theme.spacing(6),
  marginBottom: theme.spacing(10),
}));

export const CurrentPlanContainer = styled(Box)(({ theme }) => ({
  width: theme.spacing(129),
}));

export const CurrentPlanTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight500,
  fontSize: theme.typography.fontSize32,
  marginBottom: theme.spacing(8),
  color: theme.palette.primaryColors[400],
}));

export const CurrentPlanBox = styled(Box)(({ theme }) => ({
  width: "100%",
  border: `1px solid ${theme.palette.primaryColors[400]}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(10, 8),
  background: theme.palette.neutralColors[900],
  boxShadow: "0 4px 24px 0 rgba(0, 0, 0, 0.4)",
}));

export const CurrentPlanState = styled(Typography)(({ theme }) => ({
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

export const CurrentPlanPrise = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize38,
  color: theme.palette.primaryColors[50],
}));

export const CurrentPlanPeriod = styled(Typography)(({ theme }) => ({
  display: "flex",
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight400,
  fontSize: theme.typography.fontSize16,
  color: theme.palette.textColors[200],
  alignItems: "baseline",
  marginLeft: theme.spacing(0.5),
}));

export const CurrrentPlanConditions = styled(Box)(({ theme }) => ({
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

export const AvialablePlanContainer = styled(CurrentPlanContainer)(() => ({}));

export const AvialablePlanTitle = styled(CurrentPlanTitle)(({ theme }) => ({
  color: theme.palette.primaryColors[50],
}));

export const AvialablePlanBox = styled(CurrentPlanBox)(({ theme }) => ({
  border: `2px solid ${theme.palette.primaryColors[200]}`,
}));

export const AvialablePlanState = styled(CurrentPlanState)(({ theme }) => ({
  background: theme.palette.primaryColors[200],
  color: theme.palette.primaryColors[700],
  width: theme.spacing(31),
}));

export const AvialablePlanPrise = styled(CurrentPlanPrise)(({ theme }) => ({
  color: theme.palette.primaryColors[200],
}));

export const AvialablePlanPeriod = styled(CurrentPlanPeriod)(({ theme }) => ({
  color: theme.palette.textColors[200],
}));

export const AvialablePlanConditionsList = styled("ul")(({ theme }) => ({
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

export const PaymentHistoryTitle = styled(AvialablePlanTitle)(() => ({}));
