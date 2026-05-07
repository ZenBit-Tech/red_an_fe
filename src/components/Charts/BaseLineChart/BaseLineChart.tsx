import { type LineChartProps } from "@mui/x-charts/LineChart";
import * as S from "./styles";

const BaseLineChart = (props: LineChartProps) => {
  return <S.StyledLineChart {...(props as Omit<LineChartProps, "theme">)} />;
};

export default BaseLineChart;
