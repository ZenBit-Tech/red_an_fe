import { useTheme } from "@mui/material";
import * as S from "./styles";

interface ComplianceChartProps {
  data?: Array<{
    framework: S.ComplianceFramework;
    count: number;
    percentage: number;
  }>;
}

const ComplianceChart = ({ data }: ComplianceChartProps) => {
  const theme = useTheme();

  const chartData =
    data?.map((item, index) => ({
      id: index,
      value: item.count,
      label: item.framework,

      color: S.getFrameworkColor(theme, item.framework),
      framework: item.framework,
    })) || [];

  const total = chartData.reduce((acc, curr) => acc + curr.value, 0);
  const formatLabel = (label: string) => label.replace(/_/g, " ");

  return (
    <S.ChartContent>
      <S.PieContainer>
        {chartData.length > 0 ? (
          <S.StyledPieChart
            series={[
              {
                data: chartData,
                innerRadius: 0,
                outerRadius: 80,
                paddingAngle: 0,
                cornerRadius: 0,
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
              <S.ColorDot framework={item.framework} />
              <S.LabelText>{formatLabel(item.label)}</S.LabelText>
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
