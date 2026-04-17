import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: theme.spacing(31),

  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.backgroundColor,
  position: "relative",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    zIndex: 0,

    width: "600px",
    height: "300px",
    left: "10%",
    top: "10%",
    backgroundColor: theme.palette.primaryColors[700],
    opacity: 0.2,
    filter: "blur(120px)",
    pointerEvents: "none",
  },
}));

export const CustomContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(0, 20),
  maxWidth: "1440px",
  width: "100%",
  margin: "0 auto",
  position: "relative",
  zIndex: 1,

  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(0, 4),
  },
}));

export const TextWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingBottom: theme.spacing(7),
  borderBottom: `1px solid ${theme.palette.strokeColors[500]}`,
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
  fontFamily: theme.typography.fontFamily,
  maxWidth: "520px",
  fontSize: theme.typography.fontSize18,
  fontWeight: theme.typography.fontWeight400,
}));
