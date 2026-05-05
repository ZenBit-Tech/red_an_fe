import { useTheme } from "@mui/material";
import BaseBarChart from "@/components/Charts/BaseBarChart/BaseBarChart";
import * as S from "./styles";

interface DeIdMethodItem {
  method: string;
  value: number;
  [key: string]: string | number | undefined;
}

interface DeIdMethodsChartProps {
  data?: DeIdMethodItem[];
}

const DeIdMethodsChart = ({ data = [] }: DeIdMethodsChartProps) => {
  const theme = useTheme();

  return (
    <S.BarContainer>
      {data.length > 0 ? (
        <BaseBarChart
          dataset={data}
          xAxis={[
            {
              scaleType: "band",
              dataKey: "method",
              categoryGapRatio: 0.4,
            },
          ]}
          series={[
            {
              dataKey: "value",
              color: theme.palette.primaryColors[400],
            },
          ]}
          height={300}
          margin={{ left: 60, right: 20, top: 20, bottom: 60 }}
        />
      ) : (
        <S.EmptyStatePlaceholder />
      )}
    </S.BarContainer>
  );
};

export default DeIdMethodsChart;
