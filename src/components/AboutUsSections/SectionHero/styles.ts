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
  flexDirection: "column",
  padding: theme.spacing(0, 43),
  maxWidth: "1440px",
  width: "100%",

  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(0, 2),
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
