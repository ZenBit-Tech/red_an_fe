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

export const ChartContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const PieContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
});

export const LegendWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  flex: 1,
}));

export const LegendItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

export const LabelGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
}));

export const ColorDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bgcolor",
})<{ bgcolor: string }>(({ bgcolor }) => ({
  width: 12,
  height: 12,
  borderRadius: "50%",
  backgroundColor: bgcolor,
}));

export const PercentageText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.textColors[50],
}));

export const LabelText = styled(Typography)`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.textColors[100]};
`;

export const EmptyStateCircle = styled(Box)(({ theme }) => ({
  height: 180,
  width: 180,
  borderRadius: "50%",
  backgroundColor: theme.palette.neutralColors[800],
}));
