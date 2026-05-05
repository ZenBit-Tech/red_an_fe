import { useTheme } from "@mui/material/styles";

import { type DeIdStatsChartItemDto } from "@/types/dashboard";
import * as S from "./styles";

interface EntityTypesChartProps {
  chartData?: DeIdStatsChartItemDto[];
}

const EntityTypesChart = ({ chartData = [] }: EntityTypesChartProps) => {
  const theme = useTheme();

  const gradientStart = theme.palette.primaryColors?.[200];
  const gradientEnd = theme.palette.primaryColors?.[700];

  const BAR_WIDTH = 44;
  const GAP = 16;

  const chartWidth = chartData.length * (BAR_WIDTH + GAP);

  return (
    <S.BarContainer>
      {chartData.length > 0 ? (
        <S.LocalStyledChart
          dataset={chartData}
          grid={{ horizontal: true, vertical: true }}
          width={chartWidth}
          margin={{ bottom: 80 }}
          xAxis={[
            {
              scaleType: "band",
              dataKey: "label",
              tickLabelInterval: () => true,
              tickLabelStyle: {
                transform: "translate(0, 16px) rotate(-45deg)",
                textAnchor: "end",
              },
            },
          ]}
          series={[
            {
              dataKey: "value",
              type: "bar",
              valueFormatter: (v) => `${v}`,
            },
          ]}
          slotProps={{
            ...S.chartSlotsProps,
            tooltip: {
              // Тут ми можемо змінити те, як відображається кожен рядок
              slotProps: {
                root: {
                  // Можна додати додаткові CSS класи або стилі
                },
              },
            },
          }}
          disableAxisListener
        >
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={gradientStart} />
              <stop offset="100%" stopColor={gradientEnd} />
            </linearGradient>

            <linearGradient id="hoverGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="28.37%" stopColor="#3778dd" />
              <stop offset="100%" stopColor="#002d6f" />
            </linearGradient>
          </defs>
        </S.LocalStyledChart>
      ) : (
        <S.EmptyStatePlaceholder />
      )}
    </S.BarContainer>
  );
};

export default EntityTypesChart;
