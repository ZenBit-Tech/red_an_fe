import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const LineContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 300,
  marginTop: theme.spacing(4),
}));

export const EmptyStatePlaceholder = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.neutralColors[900],
  borderRadius: theme.shape.borderRadius,
  border: `1px dashed ${theme.palette.strokeColors[500]}`,
  minHeight: 300,
}));
