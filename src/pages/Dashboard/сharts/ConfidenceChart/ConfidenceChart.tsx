import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";
import BaseBarChart from "@/components/Charts/BaseBarChart/BaseBarChart";
import * as S from "./styles";

interface ConfidenceScoreItem {
  bucket: string;
  value: number;
  [key: string]: string | number | undefined;
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
        <BaseBarChart
          dataset={data}
          xAxis={[
            {
              scaleType: "band",
              dataKey: "bucket",
              label: t("dashboard.charts.confidenceRange"),
            },
          ]}
          series={[
            {
              dataKey: "value",
              label: t("dashboard.charts.entityCount"),
              color: theme.palette.primary.main,
            },
          ]}
          height={300}
          margin={{ left: 60, right: 20, top: 20, bottom: 60 }}
          slotProps={{
            legend: {
              position: { vertical: "bottom", horizontal: "center" },
            },
          }}
        />
      ) : (
        <S.EmptyStatePlaceholder />
      )}
    </S.BarContainer>
  );
};

export default ConfidenceChart;
