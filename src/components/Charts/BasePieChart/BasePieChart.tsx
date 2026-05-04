import { type PieChartProps } from "@mui/x-charts/PieChart";
import * as S from "./styles";

const BasePieChart = (props: PieChartProps) => {
  return <S.StyledPieChart {...(props as Omit<PieChartProps, "theme">)} />;
};

export default BasePieChart;
