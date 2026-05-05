import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";
import BaseLineChart from "@/components/Charts/BaseLineChart/BaseLineChart";
import { type ProcessingHistoryItem } from "@/types/dashboard";
import * as S from "./styles";

interface ProcessingHistoryChartProps {
  data?: ProcessingHistoryItem[];
}

const ProcessingHistoryChart = ({ data = [] }: ProcessingHistoryChartProps) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const safeData = data
    .filter((item) => item.date && !isNaN(new Date(item.date).getTime()))
    .map((item) => ({
      ...item,
      parsedDate: new Date(item.date),
    }));

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  };

  return (
    <S.LineContainer>
      {safeData.length > 0 ? (
        <BaseLineChart
          dataset={safeData}
          xAxis={[
            {
              dataKey: "parsedDate",
              scaleType: "time",
              valueFormatter: (value) => formatDate(value),
            },
          ]}
          series={[
            {
              dataKey: "documents",
              label: t("dashboard.stats.documents"),
              color: theme.palette.primaryColors[500],
              curve: "linear",
              showMark: true,
              disableHighlight: true,
            },
            {
              dataKey: "entities",
              label: t("dashboard.stats.entities"),
              color: theme.palette.secondaryColors[50],

              disableHighlight: true,
            },
          ]}
          height={300}
          slotProps={{
            tooltip: { trigger: "axis" },
            legend: {
              position: { vertical: "bottom", horizontal: "center" },
            },
          }}
        />
      ) : (
        <S.EmptyStatePlaceholder />
      )}
    </S.LineContainer>
  );
};

export default ProcessingHistoryChart;
