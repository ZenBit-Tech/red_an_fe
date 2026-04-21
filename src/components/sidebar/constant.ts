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
    labelKey: "appShell.nav.dashboard",
    icon: GridViewOutlined,
  },
  {
    key: "deidentify",
    labelKey: "appShell.nav.deIdentify",
    icon: ArticleOutlined,
  },
  {
    key: "synthetic",
    labelKey: "appShell.nav.syntheticData",
    icon: InsertChartOutlined,
  },
  {
    key: "subscription",
    labelKey: "appShell.nav.subscription",
    icon: PaymentsOutlined,
  },
];
