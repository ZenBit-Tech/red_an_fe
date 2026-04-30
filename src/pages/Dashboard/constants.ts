export type TimeFilter = "today" | "last_7_days" | "last_14_days" | "month";

export const TIME_FILTERS: { key: TimeFilter; labelKey: string }[] = [
  { key: "today", labelKey: "dashboard.timeFilter.today" },
  { key: "last_7_days", labelKey: "dashboard.timeFilter.last7Days" },
  { key: "last_14_days", labelKey: "dashboard.timeFilter.twoWeeks" },
  { key: "month", labelKey: "dashboard.timeFilter.month" },
];

export const DASHBOARD_DEFAULTS = {
  TIME: "last_7_days" as TimeFilter,
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
