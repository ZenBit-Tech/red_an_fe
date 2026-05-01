import { useTheme } from "@mui/material";
import * as S from "./styles";
import {
  type ComplianceFramework,
  type ComplianceFrameworkItem,
} from "@/types/dashboard";

interface ComplianceChartProps {
  data?: ComplianceFrameworkItem[];
}

const ComplianceChart = ({ data }: ComplianceChartProps) => {
  const theme = useTheme();

  const chartData =
    data?.map((item, index) => {
      const framework = item.framework as ComplianceFramework;

      return {
        id: index,
        value: item.count,
        label: framework,
        color: S.getFrameworkColor(theme, framework),
        framework: framework,
      };
    }) || [];
  const total = chartData.reduce((acc, curr) => acc + curr.value, 0);
  const formatLabel = (label: ComplianceFramework) => label.replace(/_/g, " ");

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
