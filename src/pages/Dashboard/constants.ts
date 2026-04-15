export type TimeFilter = "today" | "7days" | "2weeks" | "month";
export const TIME_FILTERS: { key: TimeFilter; labelKey: string }[] = [
  { key: "today", labelKey: "dashboard.timeFilter.today" },
  { key: "7days", labelKey: "dashboard.timeFilter.last7Days" },
  { key: "2weeks", labelKey: "dashboard.timeFilter.twoWeeks" },
  { key: "month", labelKey: "dashboard.timeFilter.month" },
];
