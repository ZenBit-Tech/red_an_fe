import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const LayoutWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

export const MainContent = styled("main")({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
});
