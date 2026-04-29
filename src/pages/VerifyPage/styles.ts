import { Box, CircularProgress, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: theme.palette.secondaryColors[900],
}));

export const Spinner = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primaryColors[200],
  marginBottom: theme.spacing(2),
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[50],
  fontFamily: theme.typography.fontFamily,
}));
