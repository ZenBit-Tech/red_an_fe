import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const ChartContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  gap: theme.spacing(5),
  width: "100%",
  padding: theme.spacing(6, 4, 12),
}));

export const PieContainer = styled(Box)({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 200,
  minHeight: 200,
});

export const LegendWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  flexGrow: 1,
}));

export const LegendItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const LabelGroup = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
});

export const ColorDot = styled(Box)<{ bgcolor: string }>(
  ({ theme, bgcolor }) => ({
    width: 16,
    height: 16,
    backgroundColor: bgcolor,
    marginRight: theme.spacing(3),
    flexShrink: 0,
  }),
);

export const LabelText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[50],
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight600,
  flexGrow: 1,
}));

export const PercentageText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[50],
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight600,
}));

export const EmptyStateCircle = styled(Box)(({ theme }) => ({
  width: 150,
  height: 150,
  borderRadius: "50%",
  border: `4px dashed ${theme.palette.strokeColors[120]}`,
}));
