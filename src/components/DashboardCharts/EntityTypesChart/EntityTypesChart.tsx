import { useTheme } from "@mui/material/styles";
import { type DeIdStatsChartItemDto } from "@/types/dashboard";
import * as S from "./styles";

interface EntityTypesChartProps {
  chartData?: DeIdStatsChartItemDto[];
}

const EntityTypesChart = ({ chartData = [] }: EntityTypesChartProps) => {
  const theme = useTheme();

  const gradientStart = theme.palette.primaryColors?.[200];
  const gradientEnd = theme.palette.primaryColors?.[700];

  return (
    <S.BarContainer>
      {chartData.length > 0 ? (
        <S.StyledBarChart
          dataset={chartData}
          xAxis={[
            {
              scaleType: "band",
              dataKey: "label",
              categoryGapRatio: 0.4,
            },
          ]}
          series={[
            {
              dataKey: "value",
              color: "url(#barGradient)",
            },
          ]}
          slots={{
            legend: () => null,
          }}
          margin={{ top: 20, right: 20, bottom: 100, left: 60 }}
          width={500}
          height={400}
          grid={{ horizontal: true }}
        >
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={gradientStart} />
              <stop offset="100%" stopColor={gradientEnd} />
            </linearGradient>
          </defs>
        </S.StyledBarChart>
      ) : (
        <S.EmptyStatePlaceholder />
      )}
    </S.BarContainer>
  );
};

export default EntityTypesChart;
