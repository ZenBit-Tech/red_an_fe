import { styled, type Theme } from "@mui/material/styles";
import { Box } from "@mui/material";

export const LineContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 300,
  marginTop: theme.spacing(4),
}));

// Стилі для самого графіка (сітка, текст осей)
export const lineChartStyles = (theme: Theme) => ({
  "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
    fill: theme.palette.text.secondary,
  },
  "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
    fill: theme.palette.text.secondary,
  },
  "& .MuiChartsAxis-line": {
    stroke: theme.palette.divider,
  },
  "& .MuiChartsGrid-line": {
    stroke: theme.palette.divider,
    strokeDasharray: "4 4",
  },
});

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
