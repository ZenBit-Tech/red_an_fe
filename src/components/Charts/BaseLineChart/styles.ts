import { styled } from "@mui/material/styles";
import { LineChart } from "@mui/x-charts/LineChart";

export const StyledLineChart = styled(LineChart)(({ theme }) => ({
  "& .MuiChartsAxis-line": {
    display: "block",
    stroke: theme.palette.strokeColors[500],
    strokeWidth: 2,
  },

  "& .MuiChartsGrid-line": {
    stroke: theme.palette.strokeColors[500],
    strokeDasharray: "4 4",
  },

  "& .MuiChartsLegend-root": {
    "& .MuiChartsLegend-series": {
      display: "flex",
      alignItems: "center",
      gap: 8,
    },

    "& .MuiChartsLegend-series rect": {
      rx: 8,
      ry: 8,
      width: 16,
      height: 16,
    },

    "& .MuiChartsLegend-label": {
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeight400,
      fontSize: theme.typography.fontSize14,
      lineHeight: "143%",
      fill: theme.palette.primaryColors[50],
    },
  },
}));
