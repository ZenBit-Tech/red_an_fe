import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

export const ChartContent = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  width: 100%;
  padding: 10px 0;
`;

export const PieContainer = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  min-height: 180px;
`;

export const StyledPieChart = styled(PieChart)`
  & .MuiChartsLegend-root {
    display: none;
  }
  /* Вимикаємо виділення секторів при кліку, якщо не потрібно */
  & .MuiPieArc-root {
    stroke: none;
  }
`;

export const LegendWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
`;

export const LegendItem = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LabelGroup = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ColorDot = styled(Box)<{ bgcolor: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ bgcolor }) => bgcolor};
  margin-right: 10px;
  flex-shrink: 0;
`;

export const LabelText = styled(Typography)`
  color: #f8fafc;
  font-size: 0.875rem;
  font-weight: 500;
  flex-grow: 1;
`;

export const PercentageText = styled(Typography)`
  color: #94a3b8;
  font-size: 0.8125rem;
  font-family: monospace;
  margin-left: 8px;
`;

export const EmptyStateCircle = styled(Box)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px dashed rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;
