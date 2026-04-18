import {
  primaryColors,
  secondaryColors,
  textColors,
} from "@/constants/themeConstants";
import { theme } from "@/common/theme/theme";

export const font =
  (theme.typography.fontFamily as string) || "'Inter', sans-serif";

export const container = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  bgcolor: secondaryColors[900],
};

export const spinner = {
  color: primaryColors[200],
  mb: 2,
};

export const text = {
  color: textColors[50],
  fontFamily: font,
};
