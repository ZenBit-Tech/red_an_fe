import { styled } from "@mui/material/styles";
import { Box, type BoxProps } from "@mui/material";

export const AboutPageWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.default,

  minHeight: "100vh",

  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  width: "100%",
  gap: 0,
}));
