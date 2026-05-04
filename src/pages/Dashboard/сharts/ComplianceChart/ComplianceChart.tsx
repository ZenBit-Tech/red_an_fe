import { useTheme } from "@mui/material";
import BasePieChart from "@/components/Charts/BasePieChart/BasePieChart";
import { getFrameworkColor } from "./utils";
import {
  type ComplianceFrameworkItem,
  type ComplianceFramework,
} from "@/types/dashboard";
import * as S from "./styles";

interface ComplianceChartProps {
  data?: Array<ComplianceFrameworkItem>;
}

const ComplianceChart = ({ data = [] }: ComplianceChartProps) => {
  const theme = useTheme();

  const chartData = data.map((item, index) => {
    const framework = item.framework as ComplianceFramework;
    return {
      id: index,
      value: item.count,
      label: framework.replace(/_/g, " "),
      color: getFrameworkColor(theme, framework),
    };
  });

  const total = chartData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <S.ChartContent>
      <S.PieContainer>
        {chartData.length > 0 ? (
          <BasePieChart
            series={[
              {
                data: chartData,
                innerRadius: 0,
                outerRadius: 80,
              },
            ]}
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
                {total > 0 ? Math.round((item.value / total) * 100) : 0}%
              </S.PercentageText>
            </S.LabelGroup>
          </S.LegendItem>
        ))}
      </S.LegendWrapper>
    </S.ChartContent>
  );
};

export default ComplianceChart;
