import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

export const Card = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
  padding: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.strokeColors[500]}`,
  [theme.breakpoints.up("md")]: {
    flex: "1 1 0",
    maxWidth: 448,
    alignSelf: "flex-start",
    padding: theme.spacing(10),
  },
}));

export const CardPopular = styled(Card)(({ theme }) => ({
  border: `2px solid ${theme.palette.primaryColors[200]}`,
  [theme.breakpoints.up("md")]: {
    maxWidth: 532,
  },
}));

export const PopularRibbon = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 18,
  right: -42,
  width: 160,
  transform: "rotate(45deg)",
  backgroundImage: `linear-gradient(161deg, ${theme.palette.primaryColors[200]} 0%, ${theme.palette.primaryColors[700]} 100%)`,
  color: theme.palette.textColors[50],
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight700,
  textAlign: "center",
  padding: theme.spacing(1, 0),
  pointerEvents: "none",
}));

export const CardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: theme.spacing(4),
  flexWrap: "wrap",
}));

export const HeaderLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing(3),
}));

export const HeaderRight = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing(1),
}));

export const HeaderRightPopular = styled(HeaderRight)({
  alignItems: "flex-end",
});

export const TierChip = styled(Box)(({ theme }) => ({
  alignSelf: "flex-start",
  padding: theme.spacing(1, 3),
  borderRadius: theme.spacing(10),
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight600,
  color: theme.palette.textColors[50],
  backgroundColor: theme.palette.neutralColors[700],
}));

export const TierChipPopular = styled(TierChip)(({ theme }) => ({
  color: theme.palette.primaryColors[900],
  backgroundColor: theme.palette.primaryColors[200],
}));

export const PlanName = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize22,
  color: theme.palette.secondary.main,
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize30,
  },
}));

export const Price = styled(Typography)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "baseline",
  gap: theme.spacing(1),
  fontWeight: theme.typography.fontWeight800,
  fontSize: theme.typography.fontSize26,
  color: theme.palette.secondary.main,
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize36,
  },
}));

export const PricePeriod = styled("span")(({ theme }) => ({
  fontWeight: theme.typography.fontWeight500,
  fontSize: theme.typography.fontSize12,
  color: theme.palette.textColors[200],
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize16,
  },
}));

export const BillingNote = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeight500,
  fontSize: theme.typography.fontSize12,
  color: theme.palette.neutralColors[300],
  whiteSpace: "pre-line",
  textAlign: "right",
}));

export const FeaturesList = styled("ul")(({ theme }) => ({
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  flexGrow: 1,
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(6),
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: theme.spacing(10),
  },
}));

export const FeaturesListPopular = styled(FeaturesList)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    justifyContent: "center",
  },
}));

export const FeatureItem = styled("li")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    flexBasis: 180,
  },
}));

export const FeatureIconBox = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  color: theme.palette.primaryColors[200],
  flexShrink: 0,
}));

export const FeatureText = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeight600,
  fontSize: theme.typography.fontSize14,
  color: theme.palette.textColors[50],
}));

export const FeatureSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  color: theme.palette.neutralColors[300],
}));

export const ActionButton = styled(Button)(({ theme }) => ({
  backgroundImage: "none",
  backgroundColor: "transparent",
  color: theme.palette.secondary.main,
  fontSize: theme.typography.fontSize12,
  border: `1px solid ${theme.palette.secondaryColors[550]}`,
  "&:hover": {
    backgroundImage: "none",
    backgroundColor: theme.palette.neutralColors[600],
  },
  "&:active": {
    backgroundImage: "none",
    backgroundColor: theme.palette.neutralColors[900],
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4, 10),
    fontSize: theme.typography.fontSize16,
  },
}));

export const ActionButtonPopular = styled(ActionButton)(({ theme }) => ({
  backgroundColor: theme.palette.primaryColors[200],
  color: theme.palette.neutralColors[700],
  border: "none",
  "&:hover": {
    backgroundImage: "none",
    backgroundColor: theme.palette.primaryColors[300],
  },
  "&:active": {
    backgroundImage: "none",
    backgroundColor: theme.palette.secondaryColors[200],
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4.5, 9.5),
  },
}));
