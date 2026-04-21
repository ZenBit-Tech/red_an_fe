import { theme } from "@/common/theme/theme";

export const layoutWrapper = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  bgcolor: theme.palette.backgroundColor,
  fontFamily: theme.typography.fontFamily,
};

export const bodyWrapper = {
  display: "flex",
  flex: 1,
  overflow: "hidden",
};

export const rightContent = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  overflowX: "hidden",
};

export const mainContent = {
  flex: 1,
  overflow: "auto",
};
