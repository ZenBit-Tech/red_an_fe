import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
const MAX_WIDTH_FOR_SIDEBAR = 1440;
export const LayoutWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  backgroundColor: theme.palette.backgroundColor,
  fontFamily: theme.typography.fontFamily,
}));

export const BodyWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  overflow: "hidden",
  width: "100%",
  maxWidth: MAX_WIDTH_FOR_SIDEBAR,
  marginInline: "auto",
});

export const ContentRow = styled(Box)({
  display: "flex",
  flex: 1,
  overflow: "hidden",
});

export const RightContent = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  overflowY: "auto",
  overflowX: "hidden",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": { display: "none" },
});

export const StickyHeader = styled(Box)({
  position: "sticky",
  top: 0,
  zIndex: 10,
});

export const MainContent = styled(Box)({
  flex: 1,
});
