import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

export const CapabilitiesSection = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.secondaryColors[900],
  paddingBlock: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingBlock: theme.spacing(15),
  },
  [theme.breakpoints.up("lg")]: {
    paddingBlock: theme.spacing(20),
  },
}));

export const ContentWrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(6),
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export const LeftContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),

  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(6),
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: 628,
  },
}));

export const LeftTextBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),

  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(6),
  },
}));

export const Title = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontSize: theme.typography.fontSize32,
  fontWeight: theme.typography.fontWeight700,
  lineHeight: "40px",
  color: theme.palette.primaryColors[50],
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize48,
    lineHeight: "60px",
  },
  [theme.breakpoints.up("lg")]: {
    lineHeight: "56px",
  },
}));

export const TitleHighlight = styled("span")(({ theme }) => ({
  color: theme.palette.primaryColors[200],
}));

export const DescriptionMain = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize20,
  },
}));

export const FeaturesList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
}));

export const FeatureItemBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(4),
}));

export const FeatureTextWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  flex: 1,
}));

export const FeatureIconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(13, 71, 161, 0.2)",
  borderRadius: theme.spacing(1),
  width: 36,
  height: 36,
  flexShrink: 0,

  color: theme.palette.primaryColors[200],

  "& svg": {
    width: 20,
    height: 20,
    fill: theme.palette.primaryColors[200],
  },
}));

export const FeatureTitle = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.primaryColors[50],
}));

export const Description = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],
  lineHeight: "20px",

  [theme.breakpoints.up("lg")]: {
    lineHeight: "22px",
  },
}));

export const RightGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(4),
  width: "100%",

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: theme.spacing(6),
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: 628,
  },
}));

export const GridCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.neutralColors[800],
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  border: `1px solid ${theme.palette.strokeColors[150]}`,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6),
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(8),
  },
}));

export const CardIconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: theme.palette.primaryColors[200],

  "& svg": {
    width: 24,
    height: 24,
    fill: theme.palette.primaryColors[200],
  },
}));

export const CardTitle = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.primaryColors[200],
  lineHeight: "32px",
}));
