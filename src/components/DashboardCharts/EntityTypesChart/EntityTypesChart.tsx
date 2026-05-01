import { BarChart } from "@mui/x-charts/BarChart";
import { type DeIdStatsChartItemDto } from "@/types/dashboard";
import * as S from "./styles";

interface EntityTypesChartProps {
  chartData?: DeIdStatsChartItemDto[];
}

const EntityTypesChart = ({ chartData = [] }: EntityTypesChartProps) => {
  return (
    <S.BarContainer>
      {chartData.length > 0 ? (
        <BarChart
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
          height={300}
          sx={{
            "& .MuiChartsLegend-root": { display: "none" },
          }}
        />
      ) : (
        <S.EmptyStatePlaceholder />
      )}
    </S.BarContainer>
  );
};

export default EntityTypesChart;
