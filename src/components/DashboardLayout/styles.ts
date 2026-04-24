import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LayoutWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: theme.palette.backgroundColor,
  fontFamily: theme.typography.fontFamily,
}));

export const BodyWrapper = styled(Box)({
  display: "flex",
  flex: 1,
  overflow: "hidden",
});

export const RightContent = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  overflowX: "hidden",
});

export const MainContent = styled(Box)({
  flex: 1,
  overflow: "auto",
});
