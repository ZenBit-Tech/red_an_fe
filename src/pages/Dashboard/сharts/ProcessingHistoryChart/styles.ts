import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import BaseLineChart from "@/components/Charts/BaseLineChart/BaseLineChart";

export const LineContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 300,
  marginTop: theme.spacing(4),
}));

export const LocalStyledChart = styled(BaseLineChart)(({ theme }) => ({
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

    color: theme.palette.textColors[400],
  },
  "& .MuiChartsTooltip-mark": {
    overflow: "visible",
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
