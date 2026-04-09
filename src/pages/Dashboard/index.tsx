import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; // Додано для навігації
import { Box, Typography, IconButton, Button } from "@mui/material";
import {
  DashboardOutlined,
  FindInPageOutlined,
  TableChartOutlined,
  CreditCardOutlined,
  HelpOutlineOutlined,
  LogoutOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  DescriptionOutlined,
  CheckCircleOutlined,
  AccessTimeOutlined,
  TrendingUpOutlined,
  BarChartOutlined,
  InfoOutlined,
  ShowChartOutlined,
  DonutLargeOutlined,
} from "@mui/icons-material";
import * as styles from "./styles";

type NavKey = "dashboard" | "deidentify" | "synthetic" | "subscription";

interface NavItem {
  key: NavKey;
  labelKey: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  {
    key: "dashboard",
    labelKey: "dashboard.nav.dashboard",
    icon: <DashboardOutlined sx={{ fontSize: 18 }} />,
  },
  {
    key: "deidentify",
    labelKey: "dashboard.nav.deIdentify",
    icon: <FindInPageOutlined sx={{ fontSize: 18 }} />,
  },
  {
    key: "synthetic",
    labelKey: "dashboard.nav.syntheticData",
    icon: <TableChartOutlined sx={{ fontSize: 18 }} />,
  },
  {
    key: "subscription",
    labelKey: "dashboard.nav.subscription",
    icon: <CreditCardOutlined sx={{ fontSize: 18 }} />,
  },
];

interface StatCard {
  labelKey: string;
  value: string;
  icon: React.ReactNode;
}

const STAT_CARDS: StatCard[] = [
  {
    labelKey: "dashboard.stats.totalDocuments",
    value: "0",
    icon: <DescriptionOutlined sx={{ fontSize: 16, color: "inherit" }} />,
  },
  {
    labelKey: "dashboard.stats.successRate",
    value: "0%",
    icon: <CheckCircleOutlined sx={{ fontSize: 16, color: "inherit" }} />,
  },
  {
    labelKey: "dashboard.stats.processingTime",
    value: "0s",
    icon: <AccessTimeOutlined sx={{ fontSize: 16, color: "inherit" }} />,
  },
  {
    labelKey: "dashboard.stats.avgCompleteness",
    value: "0%",
    icon: <TrendingUpOutlined sx={{ fontSize: 16, color: "inherit" }} />,
  },
];

const DashboardPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState<NavKey>("dashboard");
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const savedUser = localStorage.getItem("user");

    if (!token) {
      navigate("/signin");
      return;
    }
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUserEmail(parsedUser.email || "");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        setUserEmail(savedUser);
      }
    }
  }, [navigate]);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const userInitial = userEmail ? userEmail.charAt(0).toUpperCase() : "U";
  return (
    <Box sx={styles.pageWrapper}>
      <Box sx={styles.topBar}>
        <Box sx={styles.topBarBrand}>
          <Box>
            <Typography sx={styles.topBarTitle}>
              {t("dashboard.brand.name") || "Clinical Data Studio"}
            </Typography>
            <Typography sx={styles.topBarSubtitle}>
              {t("dashboard.brand.tagline") || "De-ID & Synthesis"}
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.topBarCenter}>
          <Typography sx={styles.topBarCenterTitle}>
            {t("dashboard.topBar.title")}
          </Typography>
          <Typography sx={styles.topBarCenterSubtitle}>
            {t("dashboard.topBar.subtitle")}
          </Typography>
        </Box>
        <Box sx={styles.topBarActions}>
          <IconButton sx={styles.iconButton} disableRipple>
            <NotificationsOutlined sx={{ fontSize: 20 }} />
          </IconButton>
          <IconButton sx={styles.iconButton} disableRipple>
            <SettingsOutlined sx={{ fontSize: 20 }} />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, ml: 2 }}>
            <Typography sx={styles.avatarEmail}>{userEmail}</Typography>
            <Box sx={styles.avatarButton}>
              <Typography sx={styles.avatarInitial}>{userInitial}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.bodyWrapper}>
        <Box sx={styles.sidebar}>
          <Box sx={styles.sidebarNav}>
            {NAV_ITEMS.map((item) => {
              const active = activeNav === item.key;
              return (
                <Box
                  key={item.key}
                  sx={styles.navItem(active)}
                  onClick={() => setActiveNav(item.key)}
                >
                  <Box sx={styles.navItemIcon(active)}>{item.icon}</Box>
                  <Typography sx={styles.navItemText(active)}>
                    {t(item.labelKey)}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          <Box sx={styles.sidebarBottom}>
            <Box sx={styles.navItem(false)}>
              <Box sx={styles.navItemIcon(false)}>
                <HelpOutlineOutlined sx={{ fontSize: 18 }} />
              </Box>
              <Typography sx={styles.navItemText(false)}>
                {t("dashboard.nav.support") || "Support"}
              </Typography>
            </Box>
            <Box sx={styles.navItem(false)} onClick={handleLogout}>
              <Box sx={styles.navItemIcon(false)}>
                <LogoutOutlined sx={{ fontSize: 18 }} />
              </Box>
              <Typography sx={styles.navItemText(false)}>
                {t("dashboard.nav.logout") || "Logout"}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={styles.trialBanner}>
            <Box sx={styles.trialBannerLeft}>
              <Box sx={styles.trialBadge}>
                <Typography sx={styles.trialBadgeText}>
                  {t("dashboard.trial.badge") || "TRIAL"}
                </Typography>
              </Box>
              <Typography sx={styles.trialBannerText}>
                {t("dashboard.trial.message") ||
                  "You are currently on a trial plan."}
              </Typography>
            </Box>
            <Button variant="contained" sx={styles.trialUpgradeButton}>
              {t("dashboard.trial.upgradeButton") || "Upgrade"}
            </Button>
          </Box>
          <Box sx={styles.mainContent}>
            {/* Page header */}
            <Box sx={styles.pageHeaderWrapper}>
              <Box sx={styles.pageHeaderLeft}>
                <Typography sx={styles.pageTitle}>
                  {t("dashboard.page.title") || "Dashboard"}
                </Typography>
                <Typography sx={styles.pageSubtitle}>
                  {t("dashboard.page.subtitle") || "Track your metrics"}
                </Typography>
              </Box>
              <Box sx={styles.pageHeaderRight}>
                <Box sx={styles.infoBanner}>
                  <InfoOutlined sx={{ fontSize: 16, color: "#B0C6FF" }} />
                  <Typography sx={styles.infoBannerText}>
                    {t("dashboard.page.infoBanner") ||
                      "System running smoothly"}
                  </Typography>
                </Box>
                <Box sx={styles.lastDaysPill}>
                  <Typography sx={styles.lastDaysText}>
                    {t("dashboard.page.lastDays") || "Last 7 days"}
                  </Typography>
                </Box>
                <Button variant="contained" sx={styles.startButton}>
                  {t("dashboard.page.startButton") || "Start"}
                </Button>
              </Box>
            </Box>
            <Box sx={styles.statsGrid}>
              {STAT_CARDS.map((card) => (
                <Box key={card.labelKey} sx={styles.statCard}>
                  <Box sx={styles.statCardHeader}>
                    <Typography sx={styles.statLabel}>
                      {t(card.labelKey)}
                    </Typography>
                    <Box sx={styles.statIconBox}>{card.icon}</Box>
                  </Box>
                  <Typography sx={styles.statValue}>{card.value}</Typography>
                </Box>
              ))}
            </Box>
            <Box sx={styles.emptyStateCard}>
              <DescriptionOutlined
                sx={{ fontSize: 40, color: "rgba(195, 198, 212, 0.2)" }}
              />
              <Typography sx={styles.emptyStateTitle}>
                {t("dashboard.emptyState.title") || "No data yet"}
              </Typography>
              <Typography sx={styles.emptyStateSubtitle}>
                {t("dashboard.emptyState.subtitle") ||
                  "Process your first document to see stats."}
              </Typography>
              <Button variant="contained" sx={styles.emptyStateButton}>
                {t("dashboard.emptyState.button") || "Process Document"}
              </Button>
            </Box>
            <Box sx={styles.chartSection}>
              <Box sx={styles.chartSectionHeader}>
                <Box sx={styles.chartIconBox}>
                  <BarChartOutlined sx={{ fontSize: 18, color: "#C3C6D4" }} />
                </Box>
                <Typography sx={styles.chartSectionTitle}>
                  {t("dashboard.charts.processingStatus") ||
                    "Processing Status"}
                </Typography>
              </Box>
              <Box sx={styles.chartCard}>
                <BarChartOutlined
                  sx={{ fontSize: 28, color: "rgba(195, 198, 212, 0.15)" }}
                />
                <Typography sx={styles.chartPlaceholderText}>
                  {t("dashboard.charts.placeholder") ||
                    "Chart data will appear here"}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ ...styles.twoColGrid, mb: 4 }}>
              <Box sx={styles.chartSection}>
                <Box sx={styles.chartSectionHeader}>
                  <Box sx={styles.chartIconBox}>
                    <ShowChartOutlined
                      sx={{ fontSize: 18, color: "#C3C6D4" }}
                    />
                  </Box>
                  <Typography sx={styles.chartSectionTitle}>
                    {t("dashboard.charts.dataDistribution") ||
                      "Data Distribution"}
                  </Typography>
                </Box>
                <Box sx={styles.chartCard}>
                  <BarChartOutlined
                    sx={{ fontSize: 28, color: "rgba(195, 198, 212, 0.15)" }}
                  />
                  <Typography sx={styles.chartPlaceholderText}>
                    {t("dashboard.charts.placeholder") ||
                      "Data will appear here"}
                  </Typography>
                </Box>
              </Box>
              <Box sx={styles.chartSection}>
                <Box sx={styles.chartSectionHeader}>
                  <Box sx={styles.chartIconBox}>
                    <DonutLargeOutlined
                      sx={{ fontSize: 18, color: "#C3C6D4" }}
                    />
                  </Box>
                  <Typography sx={styles.chartSectionTitle}>
                    {t("dashboard.charts.complianceFramework") || "Compliance"}
                  </Typography>
                </Box>
                <Box sx={styles.chartCard}>
                  <BarChartOutlined
                    sx={{ fontSize: 28, color: "rgba(195, 198, 212, 0.15)" }}
                  />
                  <Typography sx={styles.chartPlaceholderText}>
                    {t("dashboard.charts.placeholder") ||
                      "Data will appear here"}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
