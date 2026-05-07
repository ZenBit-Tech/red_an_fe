import { useTheme } from "@mui/material";
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
        <S.LocalStyledChart
          dataset={data}
          grid={{ horizontal: true, vertical: true }}
          xAxis={[
            {
              scaleType: "band",
              dataKey: "method",
              categoryGapRatio: 0.4,
              tickLabelStyle: {
                fill: theme.palette.textColors[100],
                fontSize: 12,
              },
            },
          ]}
          series={[
            {
              dataKey: "value",

              color: theme.palette.primaryColors[400],
            },
          ]}
          height={340}
          slotProps={{
            ...S.chartSlotsProps,
            tooltip: {
              disablePortal: true,
            },
          }}
        />
      ) : (
        <S.EmptyStatePlaceholder />
      )}
    </S.BarContainer>
  );
};

export default DeIdMethodsChart;
