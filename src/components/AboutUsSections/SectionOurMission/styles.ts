import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: theme.spacing(16),
  paddingBottom: theme.spacing(38),
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.backgroundColor,
}));

export const CustomContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: theme.spacing(0, 20),
  maxWidth: "1440px",
  width: "100%",
  margin: "0 auto",
  justifyContent: "space-between",

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    padding: theme.spacing(0, 4),
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(6),
  fontSize: theme.typography.fontSize64,
  fontWeight: theme.typography.fontWeight700,
  fontFamily: theme.typography.secondFamily,
  [theme.breakpoints.down("sm")]: { fontSize: theme.typography.fontSize32 },
}));

export const SectionContentText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[400],
  maxWidth: "80%",
  fontSize: theme.typography.fontSize18,
  marginBottom: theme.spacing(6),
  fontFamily: theme.typography.fontFamily,
}));

export const ItemsList = styled("ul")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",

  gap: theme.spacing(6),
  listStyle: "none",
  padding: 0,
  paddingRight: theme.spacing(12),
  margin: 0,

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const MissionItem = styled("li")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "252px",
  height: "209px",
  padding: theme.spacing(8),
  borderRadius: theme.spacing(6),
  border: `1px solid ${theme.palette.strokeColors[150]}`,
  background: theme.palette.neutralColors[800],
  boxSizing: "border-box",
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `0.80px solid ${theme.palette.primaryColors[200]}4D`,
  width: theme.spacing(10),
  height: theme.spacing(10),
  borderRadius: theme.spacing(3),
  marginBottom: "auto",
  padding: theme.spacing(0, 2),
  background: `linear-gradient(135deg, ${theme.palette.primaryColors[200]}33 0%, ${theme.palette.primaryColors[700]}33 100%)`,
  "& svg": {
    width: "20px",
    height: "20px",
    fill: theme.palette.primaryColors[200],
  },
}));

export const ItemTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[50],
  fontFamily: theme.typography.secondFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize48,
}));

export const ItemDescription = styled(Typography)(({ theme }) => ({
  ccolor: theme.palette.textColors[100],
  fontSize: theme.typography.fontSize12,
  fontFamily: theme.typography.fontFamily,
}));
