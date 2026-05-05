import { styled } from "@mui/material/styles";
import { BarChart } from "@mui/x-charts/BarChart";

export const StyledBarChart = styled(BarChart)(({ theme }) => ({
  "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel, & .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":
    {
      fill: theme.palette.textColors[200],
      fontSize: theme.typography.fontSize12,
    },

  "& .MuiChartsAxis-line": {
    display: "block",
    stroke: theme.palette.strokeColors[500],
    strokeWidth: 2,
  },

  "& .MuiChartsAxis-tick": {
    display: "block",
    stroke: theme.palette.strokeColors[500],
  },

  "& .MuiChartsGrid-line": {
    stroke: theme.palette.strokeColors[500],
    strokeDasharray: "4 4",
  },

  "& .MuiChartsSurface-root": {
    overflow: "visible",
  },
}));
