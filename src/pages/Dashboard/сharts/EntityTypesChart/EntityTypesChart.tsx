import { useTheme } from "@mui/material/styles";
import BaseBarChart from "@/components/Charts/BaseBarChart/BaseBarChart";
import { type DeIdStatsChartItemDto } from "@/types/dashboard";
import * as S from "./styles";

interface EntityTypesChartProps {
  chartData?: DeIdStatsChartItemDto[];
}

const EntityTypesChart = ({ chartData = [] }: EntityTypesChartProps) => {
  const theme = useTheme();

  const gradientStart = theme.palette.primaryColors?.[200] || "#000";
  const gradientEnd = theme.palette.primaryColors?.[700] || "#000";

  return (
    <S.BarContainer>
      {chartData.length > 0 ? (
        <BaseBarChart
          dataset={chartData}
          xAxis={[
            {
              scaleType: "band",
              dataKey: "label",
            },
          ]}
          series={[
            {
              dataKey: "value",
            },
          ]}
          width={500}
          height={400}
          grid={{ horizontal: true }}
        >
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={gradientStart} />
              <stop offset="100%" stopColor={gradientEnd} />
            </linearGradient>
          </defs>
        </BaseBarChart>
      ) : (
        <S.EmptyStatePlaceholder />
      )}
    </S.BarContainer>
  );
};

export default EntityTypesChart;
