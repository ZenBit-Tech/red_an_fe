import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { NavKey } from "@/components/sidebar/constant";
import { DASHBOARD_DEFAULTS, type TimeFilter } from "../constants";
import { STORAGE_KEYS, APP_ROUTES } from "@/constants/index";

export const useDashboard = () => {
  const navigate = useNavigate();

  const [activeNav, setActiveNav] = useState<NavKey>(DASHBOARD_DEFAULTS.NAV);
  const [activeTime, setActiveTime] = useState<TimeFilter>(
    DASHBOARD_DEFAULTS.TIME,
  );
  const [userEmail] = useState<string>(() => {
    const savedUser = localStorage.getItem(STORAGE_KEYS.USER);
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        return parsedUser.email || "";
      } catch {
        return savedUser;
      }
    }
    return "";
  });

  useEffect(() => {
    const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    if (!token) {
      navigate(APP_ROUTES.SIGN_IN);
    }
  }, [navigate]);

  return {
    activeNav,
    setActiveNav,
    activeTime,
    setActiveTime,
    userEmail,
  };
};
