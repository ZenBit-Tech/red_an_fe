import { styled, type Theme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

export type ComplianceFramework = "HIPAA" | "GDPR_UK" | "GDPR_EU";

interface ColorDotProps {
  framework: ComplianceFramework;
}

export const getFrameworkColor = (
  theme: Theme,
  framework: ComplianceFramework | string,
) => {
  const map: Record<ComplianceFramework, string> = {
    HIPAA: theme.palette.secondaryColors[50],
    GDPR_UK: theme.palette.primaryColors[800],
    GDPR_EU: theme.palette.primaryColors[500],
  };
  return (
    map[framework as ComplianceFramework] || theme.palette.neutralColors[500]
  );
};

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

export const StyledPieChart = styled(PieChart)({
  "& .MuiChartsLegend-root": { display: "none" },
  "& .MuiPieArc-root": { stroke: "none" },
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

export const ColorDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "framework",
})<ColorDotProps>(({ theme, framework }) => ({
  width: 16,
  height: 16,

  backgroundColor: getFrameworkColor(theme, framework),
  marginRight: theme.spacing(3),
  flexShrink: 0,
}));

export const LabelText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[50],
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight600,
  flexGrow: 1,
  fontFamily: theme.typography.fontFamily,
}));

export const PercentageText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[50],
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight600,
  fontFamily: theme.typography.fontFamily,
}));

export const EmptyStateCircle = styled(Box)(({ theme }) => ({
  width: 150,
  height: 150,
  borderRadius: "50%",
  border: `4px dashed ${theme.palette.strokeColors[120]}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
