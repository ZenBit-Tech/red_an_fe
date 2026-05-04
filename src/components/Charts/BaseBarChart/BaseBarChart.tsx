import { type BarChartProps } from "@mui/x-charts/BarChart";
import * as S from "./styles";

interface BaseBarChartProps extends BarChartProps {
  showAxisLine?: boolean;
}

const BaseBarChart = ({ ...props }: BaseBarChartProps) => {
  return <S.StyledBarChart {...(props as Omit<BarChartProps, "theme">)} />;
};

export default BaseBarChart;
