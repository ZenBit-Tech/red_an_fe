import { useTranslation } from "react-i18next";
import { BarChart } from "@mui/x-charts/BarChart";
import { type DeIdStatsChartItemDto } from "@/types/dashboard";
import * as S from "./styles";

interface EntityTypesChartProps {
  chartData?: DeIdStatsChartItemDto[];
}

const EntityTypesChart = ({ chartData = [] }: EntityTypesChartProps) => {
  const { t } = useTranslation();

  return (
    <S.ChartWrapper>
      <S.ChartHeader>
        <S.ChartTitle>{t("dashboard.charts.entityTypes")}</S.ChartTitle>
        <S.ChartSubtitle>
          {t("dashboard.charts.entitySubtitle")}
        </S.ChartSubtitle>
      </S.ChartHeader>

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
    </S.ChartWrapper>
  );
};

export default EntityTypesChart;
