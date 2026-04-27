export type TimeFilter = "today" | "7days" | "2weeks" | "month";
export const TIME_FILTERS: { key: TimeFilter; labelKey: string }[] = [
  { key: "today", labelKey: "dashboard.timeFilter.today" },
  { key: "7days", labelKey: "dashboard.timeFilter.last7Days" },
  { key: "2weeks", labelKey: "dashboard.timeFilter.twoWeeks" },
  { key: "month", labelKey: "dashboard.timeFilter.month" },
];
export const DASHBOARD_DEFAULTS = {
  TIME: "7days" as TimeFilter,
} as const;
export const DEFAULT_STATS = {
  TOTAL_DOCUMENTS: "0",
  ENTITIES_DETECTED: "0s",
  AVG_COMPLETENESS: "0%",
  SUCCESS_RATE: "0%",
} as const;

export const MOCK_CHART_SKELETONS = {
  ENTITY_TYPES: [15, 25, 10, 30, 20, 45, 25, 30, 50, 40],
  PROCESSING_HISTORY: [10, 20, 30, 20, 25, 15, 35, 40, 20, 30],
  CONFIDENCE_SCORE: [15, 10, 25, 20, 20, 30, 10, 25, 40, 30],
  METHODS: [30, 40, 20, 50, 35, 45, 25, 30, 40, 60],
} as const;
