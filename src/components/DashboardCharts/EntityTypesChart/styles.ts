import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

export const BarContainer = styled(Box)({
  width: "100%",
  height: 450,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const StyledBarChart = styled(BarChart, {
  shouldForwardProp: (prop) => prop !== "bottomAxis" && prop !== "leftAxis",
})(({ theme }) => ({
  "& .MuiChartsGrid-line": {
    stroke: theme.palette.strokeColors[500],
    strokeDasharray: "2 4",
  },
  "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
    stroke: theme.palette.strokeColors[500],
  },
  "& .MuiChartsAxis-tick": {
    stroke: theme.palette.strokeColors[500],
  },
  "& .MuiChartsAxis-left .MuiChartsAxis-line": {
    display: "none",
  },
  // --- ДОДАЄМО СТИЛІ ДЛЯ ПІДПИСІВ ОСІ ТУТ ---
  "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
    fill: theme.palette.textColors[100] + " !important",
    fontSize: "12px",
    // Поворот тексту через CSS:
    transform: "rotate(-45deg)",
    transformOrigin: "left top",
    dominantBaseline: "right",
    translate: "0px 50px",
  },
}));

export const EmptyStatePlaceholder = styled(Box)(({ theme }) => ({
  height: 300,
  width: "100%",
  background: theme.palette.neutralColors[800],
  borderRadius: 8,
  border: `1px dashed ${theme.palette.strokeColors[500]}`,
}));
