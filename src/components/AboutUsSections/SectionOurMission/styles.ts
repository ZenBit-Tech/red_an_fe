import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(20),
  display: "flex",
  flexDirection: "column",
}));

export const CustomContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: theme.spacing(0, 43),
  maxWidth: "1440px",
  width: "100%",
  margin: "0 auto",
  gap: theme.spacing(6),

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    padding: theme.spacing(0, 4),
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(6),
  fontSize: theme.typography.fontSize56,
  fontWeight: theme.typography.fontWeight700,
  [theme.breakpoints.down("sm")]: {},
}));

export const SectionContentText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  maxWidth: "520px",
  fontSize: theme.typography.fontSize18,
}));

export const ItemsList = styled("ul")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "24px",
  listStyle: "none",
  padding: 0,
  margin: 0,

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const MissionItem = styled("li")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",

  width: "252px",
  height: "209px",
  padding: "32px",

  borderRadius: "24px",
  border: "1px solid rgba(67, 70, 82, 0.15)",
  background: "#222a3d",

  boxSizing: "border-box",
}));

export const ItemText = styled(Typography)(() => ({
  color: "#fff",
  fontSize: "16px",
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& svg": {
    width: "40px",
    height: "40px",
  },
}));

export const ItemTitle = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontWeight: 700,
  fontSize: "20px",
  marginBottom: theme.spacing(2),
}));

export const ItemDescription = styled(Typography)(() => ({
  color: "rgba(255, 255, 255, 0.7)",
  fontSize: "14px",
  lineHeight: 1.5,
}));
