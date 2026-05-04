import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const ChartWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.neutralColors[900],
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(6),
  border: `1px solid ${theme.palette.strokeColors[120]}`,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
  width: "100%",
  height: 400,
  alignItems: "center",
  justifyContent: "center",
}));

export const BarContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 300,
  marginTop: theme.spacing(4),
}));

export const EmptyStatePlaceholder = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: theme.shape.borderRadius,
  border: `2px dashed ${theme.palette.strokeColors[120]}`,
  backgroundColor: theme.palette.backgroundColor[100],
}));
