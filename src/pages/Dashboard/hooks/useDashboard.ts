import { useState } from "react";
import {
  DASHBOARD_DEFAULTS,
  type TimeFilter,
} from "@/pages/Dashboard/constants";

export const useDashboard = () => {
  const [activeTime, setActiveTime] = useState<TimeFilter>(
    DASHBOARD_DEFAULTS.TIME,
  );

  return {
    activeTime,
    setActiveTime,
  };
};
