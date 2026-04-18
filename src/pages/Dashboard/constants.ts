import type { NavKey } from "@/components/sidebar/constant";

export type TimeFilter = "today" | "7days" | "2weeks" | "month";
export const TIME_FILTERS: { key: TimeFilter; labelKey: string }[] = [
  { key: "today", labelKey: "dashboard.timeFilter.today" },
  { key: "7days", labelKey: "dashboard.timeFilter.last7Days" },
  { key: "2weeks", labelKey: "dashboard.timeFilter.twoWeeks" },
  { key: "month", labelKey: "dashboard.timeFilter.month" },
];
export const DASHBOARD_DEFAULTS = {
  NAV: "dashboard" as NavKey,
  TIME: "7days" as TimeFilter,
} as const;
