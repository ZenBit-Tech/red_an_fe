import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Box, Typography, IconButton, Button } from "@mui/material";
import {
  TableChartOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  DescriptionOutlined,
  CheckCircleOutlined,
  TrendingUpOutlined,
  InfoOutlined,
  HourglassEmpty,
  AccountCircleOutlined,
} from "@mui/icons-material";
import * as styles from "./styles";
import Sidebar from "@/components/sidebar/index";
import { TIME_FILTERS, type TimeFilter } from "./constants";
import type { NavKey } from "@/components/sidebar/constant";

const DashboardPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState<NavKey>("dashboard");
  const [activeTime, setActiveTime] = useState<TimeFilter>("7days");

  const [userEmail] = useState<string>(() => {
    const savedUser = localStorage.getItem("user");
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
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/signin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const STAT_CARDS = [
    {
      label: t("dashboard.stats.totalDocuments", "TOTAL DOCUMENTS"),
      value: "0",
      icon: <DescriptionOutlined sx={{ fontSize: 24 }} />,
    },
    {
      label: t("dashboard.stats.entitiesDetected", "ENTITIES DETECTED"),
      value: "0s",
      icon: <CheckCircleOutlined sx={{ fontSize: 24 }} />,
    },
    {
      label: t("dashboard.stats.avgCompleteness", "AVG. ENTITIES/DOC"),
      value: "0%",
      icon: <TrendingUpOutlined sx={{ fontSize: 24 }} />,
    },
    {
      label: t("dashboard.stats.successRate", "SUCCESS RATE"),
      value: "0%",
      icon: <TableChartOutlined sx={{ fontSize: 24 }} />,
    },
  ];

  return (
    <Box sx={styles.pageWrapper}>
      <Box sx={styles.bodyWrapper}>
        <Sidebar
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          handleLogout={handleLogout}
        />
        <Box sx={styles.rightContent}>
          <Box sx={styles.topBar}>
            <Box sx={styles.topBarCenter}>
              <Typography sx={styles.topBarCenterTitle}>
                {t(
                  "dashboard.topBar.title",
                  "Clinical Data De-Identification & Synthetic Data Studio",
                )}
              </Typography>
              <Typography sx={styles.topBarCenterSubtitle}>
                {t(
                  "dashboard.topBar.subtitle",
                  "Enterprise-grade PII detection and anonymization",
                )}
              </Typography>
            </Box>
            <Box sx={styles.topBarActions}>
              <IconButton sx={styles.iconButton}>
                <NotificationsOutlined />
              </IconButton>
              <IconButton sx={styles.iconButton}>
                <SettingsOutlined />
              </IconButton>
              <Typography sx={styles.avatarEmail}>{userEmail}</Typography>
              <Box sx={styles.avatarButton}>
                <AccountCircleOutlined
                  sx={{ fontSize: 20, color: "#b0c6ff" }}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={styles.mainContent}>
            <Box sx={styles.contentContainer}>
              <Box sx={styles.pageHeaderWrapper}>
                <Box sx={styles.backgroundGlow} />
                <Box sx={styles.pageHeaderRow1}>
                  <Box>
                    <Typography sx={styles.pageTitle}>
                      {t("dashboard.page.title", "Dashboard")}
                    </Typography>
                    <Typography sx={styles.pageSubtitle}>
                      {t(
                        "dashboard.page.subtitle",
                        "Monitor your de-identification metrics",
                      )}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      flexWrap: "wrap",
                    }}
                  >
                    <Box sx={styles.infoBanner}>
                      <InfoOutlined
                        sx={{ fontSize: 20, color: styles.colors.accent }}
                      />
                      <Typography sx={styles.infoBannerText}>
                        {t(
                          "dashboard.page.infoBanner",
                          "2 documents available for de-identification",
                        )}
                      </Typography>
                    </Box>
                    <Button variant="contained" sx={styles.startButton}>
                      {t(
                        "dashboard.page.startButton",
                        "Start De-Identification",
                      )}
                    </Button>
                  </Box>
                </Box>
                <Box sx={styles.pageHeaderRow2}>
                  <Box sx={styles.timeFilterGroup}>
                    {TIME_FILTERS.map((tf) => (
                      <Box
                        key={tf.key}
                        sx={styles.timeFilterPill(activeTime === tf.key)}
                        onClick={() => setActiveTime(tf.key)}
                      >
                        <Typography
                          sx={styles.timeFilterText(activeTime === tf.key)}
                        >
                          {t(tf.labelKey)}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
              <Box sx={styles.topSectionGrid}>
                <Box sx={styles.statCardsColumn}>
                  {STAT_CARDS.map((card) => (
                    <Box key={card.label} sx={styles.statCard}>
                      <Box sx={styles.statCardHeader}>
                        <Typography sx={styles.statLabel}>
                          {card.label}
                        </Typography>
                        <Box sx={styles.statIconBox}>{card.icon}</Box>
                      </Box>
                      <Typography sx={styles.statValue}>
                        {card.value}
                      </Typography>
                      <Box sx={styles.statFooter}>
                        <HourglassEmpty sx={{ fontSize: 14 }} />
                        <Typography sx={styles.statFooterText}>
                          {t(
                            "dashboard.stats.awaitingData",
                            "Awaiting data stream...",
                          )}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Box sx={styles.complianceCard}>
                  <Box sx={styles.chartHeader}>
                    <Typography sx={styles.chartTitle}>
                      {t(
                        "dashboard.charts.complianceFramework",
                        "Compliance Framework Usage",
                      )}
                    </Typography>
                    <Typography sx={styles.chartSubtitle}>
                      {t(
                        "dashboard.charts.complianceSubtitle",
                        "Distribution of frameworks applied",
                      )}
                    </Typography>
                  </Box>
                  <Box sx={styles.skeletonCenter}>
                    <Box sx={styles.donutSkeleton} />
                  </Box>
                </Box>
              </Box>
              <Box sx={styles.fullWidthCard}>
                <Box sx={styles.chartHeader}>
                  <Typography sx={styles.chartTitle}>
                    {t(
                      "dashboard.charts.entityTypesDetected",
                      "Entity Types Detected",
                    )}
                  </Typography>
                  <Typography sx={styles.chartSubtitle}>
                    {t(
                      "dashboard.charts.entitySubtitle",
                      "Distribution of frameworks applied",
                    )}
                  </Typography>
                </Box>
                <Box sx={styles.barSkeletonContainer}>
                  {[15, 25, 10, 30, 20, 45, 25, 30, 50, 40].map((h, i) => (
                    <Box key={i} sx={styles.barSkeletonCol}>
                      <Box sx={{ ...styles.barSkeleton, height: `${h}%` }} />
                      <Typography sx={styles.barSkeletonLabel}>
                        {t("dashboard.charts.noneLabel", "none")}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box sx={styles.twoColGrid}>
                <Box sx={styles.halfWidthCard}>
                  <Box sx={styles.chartHeader}>
                    <Typography sx={styles.chartTitle}>
                      {t(
                        "dashboard.charts.processingHistory",
                        "Processing History (Last 7 Days)",
                      )}
                    </Typography>
                    <Typography sx={styles.chartSubtitle}>
                      {t(
                        "dashboard.charts.historySubtitle",
                        "Document and entity processing trends",
                      )}
                    </Typography>
                  </Box>
                  <Box sx={styles.barSkeletonContainer}>
                    {[10, 20, 30, 20, 25, 15, 35, 40, 20, 30].map((h, i) => (
                      <Box key={i} sx={styles.barSkeletonCol}>
                        <Box sx={{ ...styles.barSkeleton, height: `${h}%` }} />
                        <Typography sx={styles.barSkeletonLabel}>
                          {t("dashboard.charts.noneLabel", "none")}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box sx={styles.halfWidthCard}>
                  <Box sx={styles.chartHeader}>
                    <Typography sx={styles.chartTitle}>
                      {t(
                        "dashboard.charts.confidenceScore",
                        "Confidence Score Distribution",
                      )}
                    </Typography>
                    <Typography sx={styles.chartSubtitle}>
                      {t(
                        "dashboard.charts.confidenceSubtitle",
                        "Definition confidence level",
                      )}
                    </Typography>
                  </Box>
                  <Box sx={styles.barSkeletonContainer}>
                    {[15, 10, 25, 20, 20, 30, 10, 25, 40, 30].map((h, i) => (
                      <Box key={i} sx={styles.barSkeletonCol}>
                        <Box sx={{ ...styles.barSkeleton, height: `${h}%` }} />
                        <Typography sx={styles.barSkeletonLabel}>
                          {t("dashboard.charts.noneLabel", "none")}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
              <Box sx={styles.fullWidthCard}>
                <Box sx={styles.chartHeader}>
                  <Typography sx={styles.chartTitle}>
                    {t(
                      "dashboard.charts.deIdentificationMethod",
                      "De-Identification Method Usage",
                    )}
                  </Typography>
                  <Typography sx={styles.chartSubtitle}>
                    {t(
                      "dashboard.charts.methodSubtitle",
                      "Distribution of frameworks applied",
                    )}
                  </Typography>
                </Box>
                <Box sx={styles.barSkeletonContainer}>
                  {[30, 40, 20, 50, 35, 45, 25, 30, 40, 60].map((h, i) => (
                    <Box key={i} sx={styles.barSkeletonCol}>
                      <Box sx={{ ...styles.barSkeleton, height: `${h}%` }} />
                      <Typography sx={styles.barSkeletonLabel}>
                        {t("dashboard.charts.noneLabel", "none")}
                      </Typography>
                    </Box>
                  ))}
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
