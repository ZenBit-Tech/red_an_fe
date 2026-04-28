import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const ChartWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.neutralColors[900],
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(6),
  border: `1px solid ${theme.palette.strokeColors[120]}`,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
  width: "100%",
}));

export const ChartHeader = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const ChartTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.textColors[50],
  lineHeight: 1.2,
}));

export const ChartSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  color: theme.palette.neutralColors[300],
  marginTop: theme.spacing(1),
}));

export const BarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: theme.spacing(2),
}));

export const EmptyStatePlaceholder = styled(Box)(({ theme }) => ({
  height: "300px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: theme.palette.action.hover,
  borderRadius: "8px",
}));
