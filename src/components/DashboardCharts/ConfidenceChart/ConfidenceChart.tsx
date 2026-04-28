import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import * as S from "./styles";

interface ConfidenceScoreItem {
  range: string;
  count: number;
}

interface ConfidenceChartProps {
  data?: ConfidenceScoreItem[];
}

const ConfidenceChart = ({ data = [] }: ConfidenceChartProps) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <S.BarContainer>
      {data.length > 0 ? (
        <BarChart
          dataset={data}
          xAxis={[
            {
              scaleType: "band",
              dataKey: "range",
              label: t("dashboard.charts.confidenceRange"),
            },
          ]}
          series={[
            {
              dataKey: "count",
              label: t("dashboard.charts.entityCount"),
              color: theme.palette.primary.main,
            },
          ]}
          height={300}
          margin={{ left: 60, right: 20, top: 20, bottom: 50 }}
          slotProps={{ legend: { hidden: true } }}
          sx={S.barChartStyles(theme)}
        />
      ) : (
        <S.EmptyStatePlaceholder />
      )}
    </S.BarContainer>
  );
};

export default ConfidenceChart;
