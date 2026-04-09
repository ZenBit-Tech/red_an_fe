import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  width: "100%",

  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(20),

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
