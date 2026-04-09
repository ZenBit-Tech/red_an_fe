import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  width: "100%",

  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(20),

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize38,
  fontWeight: theme.typography.fontWeight600,
  color: theme.palette.text.primary,

  marginBottom: theme.spacing(10),

  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize16 * 1.5, // Наприклад, 24px
  },
}));
