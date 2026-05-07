import { type BarChartProps } from "@mui/x-charts/BarChart";
import * as S from "./styles";

export interface BaseBarChartProps extends BarChartProps {
  showAxisLine?: boolean;
  className?: string;
}

const BaseBarChart = ({ className, ...props }: BaseBarChartProps) => {
  return (
    <S.StyledBarChart
      className={className}
      {...(props as Omit<BarChartProps, "theme">)}
    />
  );
};

export default BaseBarChart;
