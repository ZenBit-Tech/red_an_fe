import React from "react";
import {
  GridViewOutlined,
  ArticleOutlined,
  InsertChartOutlined,
  PaymentsOutlined,
} from "@mui/icons-material";
export type NavKey = "dashboard" | "deidentify" | "synthetic" | "subscription";

export interface NavItem {
  key: NavKey;
  labelKey: string;
  icon: React.ElementType;
}

export const NAV_ITEMS: NavItem[] = [
  {
    key: "dashboard",
    labelKey: "dashboard.nav.dashboard",
    icon: GridViewOutlined,
  },
  {
    key: "deidentify",
    labelKey: "dashboard.nav.deIdentify",
    icon: ArticleOutlined,
  },
  {
    key: "synthetic",
    labelKey: "dashboard.nav.syntheticData",
    icon: InsertChartOutlined,
  },
  {
    key: "subscription",
    labelKey: "dashboard.nav.subscription",
    icon: PaymentsOutlined,
  },
];
export const handleActionKeyDown = (
  event: React.KeyboardEvent<HTMLDivElement>,
  action: () => void,
) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    action();
  }
};
