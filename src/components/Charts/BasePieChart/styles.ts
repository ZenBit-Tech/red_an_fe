import { styled } from "@mui/material/styles";
import { PieChart } from "@mui/x-charts/PieChart";

export const StyledPieChart = styled(PieChart)(() => ({
  "& .MuiChartsLegend-root": { display: "none" },
  "& .MuiPieArc-root": { stroke: "none" },
}));
