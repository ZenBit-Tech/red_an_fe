import { useTranslation } from "react-i18next";
import { LocalStyledChart } from "./styles";
import { type ProcessingHistoryItem } from "@/types/dashboard";
import * as S from "./styles";

interface ProcessingHistoryChartProps {
  data?: ProcessingHistoryItem[];
}

const ProcessingHistoryChart = ({ data = [] }: ProcessingHistoryChartProps) => {
  const { t } = useTranslation();

  const safeData = data
    .filter((item) => item.date && !isNaN(new Date(item.date).getTime()))
    .map((item) => ({
      ...item,
      parsedDate: new Date(item.date),
    }));

  return (
    <S.LineContainer>
      {safeData.length > 0 ? (
        <LocalStyledChart
          dataset={safeData}
          grid={{ horizontal: true, vertical: true }}
          slotProps={{
            legend: {
              position: { vertical: "bottom", horizontal: "center" },
            },
          }}
          xAxis={[
            {
              dataKey: "parsedDate",
              scaleType: "band",
              valueFormatter: (value: Date) =>
                value instanceof Date
                  ? value.toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                    })
                  : value,
            },
          ]}
          yAxis={[
            {
              id: "left",
            },
            {
              id: "right",
              position: "right",
            },
          ]}
          series={[
            {
              label: t("dashboard.stats.documents"),
              dataKey: "documents",
              yAxisId: "left",
              color: "#2563eb",
              curve: "linear",
            },
            {
              label: t("dashboard.stats.entities"),
              dataKey: "entities",
              yAxisId: "right",
              color: "#eff0ff",
            },
          ]}
          height={300}
        />
      ) : (
        <S.EmptyStatePlaceholder />
      )}
    </S.LineContainer>
  );
};

export default ProcessingHistoryChart;
