import { styled } from "@mui/material/styles";
import { LineChart } from "@mui/x-charts/LineChart";

export const StyledLineChart = styled(LineChart)(({ theme }) => ({
  "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel, & .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":
    {
      fill: theme.palette.textColors[100],
      fontSize: theme.typography.fontSize12,
    },
  "& .MuiChartsAxis-line": {
    stroke: theme.palette.strokeColors[500],
    strokeWidth: 2,
  },
  "& .MuiChartsGrid-line": {
    stroke: theme.palette.strokeColors[500],
    strokeDasharray: "4 4",
  },

  "& .MuiLineElement-root": {
    strokeWidth: 2,
  },
  "& .MuiMarkElement-root": {
    strokeWidth: 0,
    r: 2,
  },

  "& .MuiChartsLegend-root": {
    "& .MuiChartsLegend-mark": {
      strokeOpacity: 0,
      rx: 8,
      ry: 8,
      width: 16,
      height: 16,
    },
    "& .MuiChartsLegend-label": {
      fill: theme.palette.textColors[100],
      fontSize: "14px",
    },
  },
}));
