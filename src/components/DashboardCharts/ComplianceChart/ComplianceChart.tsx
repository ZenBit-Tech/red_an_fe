import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

import * as S from "./styles";

interface ComplianceChartProps {
  data?: Array<{
    framework: string;
    count: number;
    percentage: number;
  }>;
}

const ComplianceChart = ({ data }: ComplianceChartProps) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const chartData =
    data?.map((item, index) => ({
      id: index,
      value: item.count,
      label: item.framework,
      // Кольори беремо з теми за ключем фреймворку
      color:
        theme.palette.compliance.frameworkChip[
          item.framework as keyof typeof theme.palette.compliance.frameworkChip
        ] || theme.palette.neutralColors[500],
    })) || [];

  const total = chartData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <S.ChartWrapper>
      <S.ChartHeader>
        <S.ChartTitle>{t("dashboard.charts.complianceFramework")}</S.ChartTitle>
        <S.ChartSubtitle>
          {t("dashboard.charts.complianceSubtitle")}
        </S.ChartSubtitle>
      </S.ChartHeader>

      <S.ChartContent>
        <S.PieContainer>
          {chartData.length > 0 ? (
            <PieChart
              series={[
                {
                  data: chartData,
                  innerRadius: 0,
                  outerRadius: 80,
                  paddingAngle: 0,
                  cornerRadius: 0,
                },
              ]}
              sx={{
                "& .MuiChartsLegend-root": { display: "none" },
              }}
              width={180}
              height={180}
            />
          ) : (
            <S.EmptyStateCircle />
          )}
        </S.PieContainer>

        <S.LegendWrapper>
          {chartData.map((item) => (
            <S.LegendItem key={item.id}>
              <S.LabelGroup>
                <S.ColorDot bgcolor={item.color} />
                <S.LabelText>{item.label}</S.LabelText>
                <S.PercentageText>
                  {total > 0 ? ((item.value / total) * 100).toFixed(1) : 0}%
                </S.PercentageText>
              </S.LabelGroup>
            </S.LegendItem>
          ))}
        </S.LegendWrapper>
      </S.ChartContent>
    </S.ChartWrapper>
  );
};

export default ComplianceChart;
