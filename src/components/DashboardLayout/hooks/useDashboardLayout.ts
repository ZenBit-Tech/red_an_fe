import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { APP_ROUTES, STORAGE_KEYS } from "@/constants/index";
import type { NavKey } from "@/components/sidebar/constant";

const NAV_KEY_TO_ROUTE: Record<NavKey, string> = {
  dashboard: APP_ROUTES.DASHBOARD,
  deidentify: APP_ROUTES.DEIDENTIFY,
  synthetic: APP_ROUTES.DASHBOARD,
  subscription: APP_ROUTES.DASHBOARD,
};

const ROUTE_TO_NAV_KEY: Record<string, NavKey> = {
  [APP_ROUTES.DASHBOARD]: "dashboard",
  [APP_ROUTES.DEIDENTIFY]: "deidentify",
};

const DEFAULT_NAV_KEY: NavKey = "dashboard";

const resolveUserEmail = (): string => {
  const savedUser = localStorage.getItem(STORAGE_KEYS.USER);

  if (!savedUser) {
    return "";
  }

  try {
    const parsedUser = JSON.parse(savedUser);

    return parsedUser.email || "";
  } catch {
    return savedUser;
  }
};

export const useDashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userEmail] = useState<string>(() => resolveUserEmail());

  useEffect(() => {
    const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

    if (!token) {
      navigate(APP_ROUTES.SIGN_IN);
    }
  }, [navigate]);

  const activeNav = useMemo<NavKey>(
    () => ROUTE_TO_NAV_KEY[location.pathname] ?? DEFAULT_NAV_KEY,
    [location.pathname],
  );

  const setActiveNav = (nextNav: NavKey): void => {
    const nextRoute = NAV_KEY_TO_ROUTE[nextNav];

    if (nextRoute && nextRoute !== location.pathname) {
      navigate(nextRoute);
    }
  };

  return { activeNav, setActiveNav, userEmail };
};
