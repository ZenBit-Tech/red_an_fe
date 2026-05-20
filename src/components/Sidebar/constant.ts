import React from "react";
import {
  GridViewOutlined,
  ArticleOutlined,
  PaymentsOutlined,
} from "@mui/icons-material";
export type NavKey = "dashboard" | "deidentify" | "subscription";

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
    key: "subscription",
    labelKey: "appShell.nav.subscription",
    icon: PaymentsOutlined,
  },
];
export interface SidebarProps {
  activeNav: NavKey;
  setActiveNav: (key: NavKey) => void;
}
export const DEIDENTIFY_SUBMENU_STEPS = [
  { stepIndex: 0, labelKey: "dashboard.deidentifySubmenu.framework" },
  { stepIndex: 1, labelKey: "dashboard.deidentifySubmenu.inputData" },
  { stepIndex: 2, labelKey: "dashboard.deidentifySubmenu.settings" },
  { stepIndex: 3, labelKey: "dashboard.deidentifySubmenu.findings" },
  {
    stepIndex: 4,
    labelKey: "dashboard.deidentifySubmenu.syntheticDataGenerator",
  },
] as const;
