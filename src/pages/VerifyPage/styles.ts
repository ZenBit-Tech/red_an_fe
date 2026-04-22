import { theme } from "@/common/theme/theme";

export const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  bgcolor: theme.palette.secondaryColors[900],
};

export const spinner = {
  color: theme.palette.primaryColors[200],
  mb: theme.spacing(2),
};

export const text = {
  color: theme.palette.textColors[50],
  fontFamily: theme.typography.fontFamily,
};
