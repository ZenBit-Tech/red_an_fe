import { useTheme } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import * as S from "./styles";

interface DeIdMethodItem {
  method: string;
  value: number;
  [key: string]: string | number;
}

interface DeIdMethodsChartProps {
  data?: DeIdMethodItem[];
}

const DeIdMethodsChart = ({ data = [] }: DeIdMethodsChartProps) => {
  const theme = useTheme();

  return (
    <S.BarContainer>
      {data.length > 0 ? (
        <BarChart
          dataset={data}
          xAxis={[
            {
              scaleType: "band",
              dataKey: "method",
            },
          ]}
          series={[
            {
              dataKey: "value",

              color: theme.palette.primaryColors[400],
            },
          ]}
          height={300}
          margin={{ left: 50, right: 20, top: 20, bottom: 40 }}
          sx={S.barChartStyles(theme)}
        />
      ) : (
        <S.EmptyStatePlaceholder />
      )}
    </S.BarContainer>
  );
};

export default DeIdMethodsChart;
