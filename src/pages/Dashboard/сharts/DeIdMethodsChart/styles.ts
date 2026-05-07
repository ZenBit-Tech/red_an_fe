import { styled, type Theme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { type BarChartProps } from "@mui/x-charts/BarChart";
import BaseBarChart from "@/components/Charts/BaseBarChart/BaseBarChart";

export const BarContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 300,
  marginTop: theme.spacing(4),
}));

export const barChartStyles = (theme: Theme) => ({
  "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
    fill: theme.palette.textColors[200],
    fontSize: theme.typography.fontSize12,
  },
  "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
    fill: theme.palette.textColors[200],
    fontSize: theme.typography.fontSize12,
  },
  "& .MuiChartsAxis-line": {
    stroke: theme.palette.strokeColors[500],
  },
  "& .MuiChartsAxis-tick": {
    stroke: theme.palette.strokeColors[500],
  },
});

export const LocalStyledChart = styled(BaseBarChart)(({ theme }) => ({
  "& .MuiChartsAxis-bottom .MuiChartsAxis-tick": {
    display: "none",
  },
  "& .MuiBarElement-root": {
    transition: "all 0.2s ease-in-out",
  },

  "& .MuiChartsItemHighlighted": {
    fill: "none",
  },

  "& .MuiChartsAxisHighlight-root": {
    display: "none",
  },

  "& .MuiChartsHighlightMark": {
    display: "none",
  },

  "& rect": {
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  },

  "& rect:hover": {
    fill: "url(#hoverGradient)",
    filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.4))",
  },

  "& .MuiChartsTooltip-paper": {
    boxShadow: "0 18px 26px 0 rgba(0, 0, 0, 0.5)",
    background: "rgba(34, 42, 61, 0.85)",
    border: `1px solid ${theme.palette.strokeColors[120]}`,
    borderRadius: "2px !important",
    backdropFilter: "blur(4px)",
    minWidth: "114px",
    padding: theme.spacing(1, 6, 1, 2),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  "& .MuiChartsTooltip-table": {
    borderSpacing: 0,
  },
  "& .MuiChartsTooltip-cell": {
    padding: 0,
    border: "none",
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeight700,
    fontSize: theme.typography.fontSize12,
    lineHeight: "133%",
    color: theme.palette.textColors[400],
  },
  "& .MuiChartsTooltip-mark": {
    overflow: "visible !important",
    width: "auto !important",
    height: "auto !important",
    backgroundColor: "transparent !important",
    boxShadow: "none !important",
    "&:before": {
      content: '"Count"',
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeight400,
      fontSize: theme.typography.fontSize12,
      color: theme.palette.textColors[200],
      marginRight: theme.spacing(2),
    },
  },
  "& .MuiChartsTooltip-valueCell": {
    marginLeft: "auto",
    textAlign: "right",
  },

  "& .MuiChartsTooltip-row": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  "& .MuiChartsTooltip-markCell": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const chartSlotsProps: BarChartProps["slotProps"] = {
  bar: {
    rx: 2,
    ry: 2,

    style: {
      fill: "url(#barGradient)",
      transform: "translateY(-4px)",
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      transition: "all 0.2s ease-in-out",
    },
  },
  tooltip: {
    trigger: "axis",
  },
};

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
