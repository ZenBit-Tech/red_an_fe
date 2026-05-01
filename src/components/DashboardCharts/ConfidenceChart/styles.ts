import { styled, type Theme } from "@mui/material/styles";
import { Box } from "@mui/material";

export const BarContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 300,
  marginTop: theme.spacing(4),
}));

export const barChartStyles = (theme: Theme) => ({
  "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
    fill: theme.palette.text.secondary,
  },
  "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
    fill: theme.palette.text.secondary,
  },
  "& .MuiChartsAxis-label": {
    fill: theme.palette.text.primary,
    fontSize: "12px",
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
