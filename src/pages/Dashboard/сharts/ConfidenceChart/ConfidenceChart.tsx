import { useTheme } from "@mui/material";
import * as S from "./styles";

interface ConfidenceScoreItem {
  bucket: string;
  value: number;
  [key: string]: string | number | undefined;
}

interface ConfidenceChartProps {
  data?: ConfidenceScoreItem[];
}

const ConfidenceChart = ({ data = [] }: ConfidenceChartProps) => {
  const theme = useTheme();

  return (
    <S.BarContainer>
      {data.length > 0 ? (
        <S.LocalStyledChart
          dataset={data}
          layout="horizontal"
          grid={{ vertical: true }}
          yAxis={[
            {
              scaleType: "band",
              dataKey: "bucket",
              tickLabelStyle: {
                fontSize: 12,
                fill: theme.palette.textColors[100],
              },
            },
          ]}
          xAxis={[{}]}
          series={[
            {
              dataKey: "value",
              color: theme.palette.primary.main,
            },
          ]}
          height={300}
          slotProps={{
            ...S.chartSlotsProps,
            tooltip: {
              ...S.chartSlotsProps?.tooltip,
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

export default ConfidenceChart;
