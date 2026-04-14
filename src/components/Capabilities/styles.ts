import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const CapabilitiesSection = styled("section")(({ theme }) => ({
  padding: theme.spacing(10, 4),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(22.5, 0),
  },
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(6),
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));

export const LeftContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: 622,
  gap: theme.spacing(8),
}));

export const LeftTextBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
}));

export const Title = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize26,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.textColors[50],
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize48,
  },
}));

export const DescriptionMain = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize18,
  },
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(13, 71, 161, 0.2)",
  borderRadius: theme.spacing(1),

  width: 28,
  height: 28,
  "& svg": {
    width: 14,
    height: 14,
    fill: theme.palette.primaryColors[200],
  },

  [theme.breakpoints.up("md")]: {
    width: 36,
    height: 36,
    "& svg": {
      width: 18,
      height: 18,
    },
  },
}));

export const FeaturesList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
}));

export const FeatureItemBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: theme.spacing(4),
}));

export const FeatureTextWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const FeatureTitle = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight700,
  marginBottom: theme.spacing(1),
  color: theme.palette.secondary.main,
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize16,
  },
}));

export const Description = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize14,
  },
}));

export const RightGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(6),
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
}));

export const GridCard = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  backgroundColor: theme.palette.neutralColors[800],
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(8),
  border: `1px solid ${theme.palette.strokeColors[150]}`,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    width: 310,
    height: 212,
  },
}));

export const CardTitle = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.textColors[400],
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize20,
  },
}));
