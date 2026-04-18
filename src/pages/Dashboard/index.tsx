import { useTranslation } from "react-i18next";
import { Box, Typography, IconButton, Button } from "@mui/material";
import {
  FolderOpen,
  NotificationsOutlined,
  SettingsOutlined,
  DescriptionOutlined,
  CheckCircleOutlined,
  Fingerprint,
  InfoOutlined,
  HourglassEmpty,
  AccountCircleOutlined,
} from "@mui/icons-material";
import * as styles from "./styles";
import Sidebar from "@/components/sidebar/index";
import { TIME_FILTERS } from "./constants";
import { useDashboard } from "./hooks/useDashboard";

const DashboardPage = () => {
  const { t } = useTranslation();
  const {
    activeNav,
    setActiveNav,
    activeTime,
    setActiveTime,
    userEmail,
    handleLogout,
  } = useDashboard();

  const STAT_CARDS = [
    {
      label: t("dashboard.stats.totalDocuments"),
      value: "0",
      icon: <DescriptionOutlined sx={{ fontSize: 24 }} />,
    },
    {
      label: t("dashboard.stats.entitiesDetected"),
      value: "0s",
      icon: <CheckCircleOutlined sx={{ fontSize: 24 }} />,
    },
    {
      label: t("dashboard.stats.avgCompleteness"),
      value: "0%",
      icon: <Fingerprint sx={{ fontSize: 24 }} />,
    },
    {
      label: t("dashboard.stats.successRate"),
      value: "0%",
      icon: <FolderOpen sx={{ fontSize: 24 }} />,
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
                {t("dashboard.topBar.title")}
              </Typography>
              <Typography sx={styles.topBarCenterSubtitle}>
                {t("dashboard.topBar.subtitle")}
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
                <AccountCircleOutlined sx={styles.circleOutline} />
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
                      {t("dashboard.page.title")}
                    </Typography>
                    <Typography sx={styles.pageSubtitle}>
                      {t("dashboard.page.subtitle")}
                    </Typography>
                  </Box>
                  <Box sx={styles.infoBox}>
                    <Box sx={styles.infoBanner}>
                      <InfoOutlined
                        sx={{ fontSize: 20, color: styles.colors.accent }}
                      />
                      <Typography sx={styles.infoBannerText}>
                        {t("dashboard.page.infoBanner")}
                      </Typography>
                    </Box>
                    <Button variant="contained" sx={styles.startButton}>
                      {t("dashboard.page.startButton")}
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
                          {t("dashboard.stats.awaitingData")}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Box sx={styles.complianceCard}>
                  <Box sx={styles.chartHeader}>
                    <Typography sx={styles.chartTitle}>
                      {t("dashboard.charts.complianceFramework")}
                    </Typography>
                    <Typography sx={styles.chartSubtitle}>
                      {t("dashboard.charts.complianceSubtitle")}
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
                    {t("dashboard.charts.entityTypesDetected")}
                  </Typography>
                  <Typography sx={styles.chartSubtitle}>
                    {t("dashboard.charts.entitySubtitle")}
                  </Typography>
                </Box>
                <Box sx={styles.barSkeletonContainer}>
                  {[15, 25, 10, 30, 20, 45, 25, 30, 50, 40].map((h, i) => (
                    <Box key={i} sx={styles.barSkeletonCol}>
                      <Box sx={{ ...styles.barSkeleton, height: `${h}%` }} />
                      <Typography sx={styles.barSkeletonLabel}>
                        {t("dashboard.charts.noneLabel")}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box sx={styles.twoColGrid}>
                <Box sx={styles.halfWidthCard}>
                  <Box sx={styles.chartHeader}>
                    <Typography sx={styles.chartTitle}>
                      {t("dashboard.charts.processingHistory")}
                    </Typography>
                    <Typography sx={styles.chartSubtitle}>
                      {t("dashboard.charts.historySubtitle")}
                    </Typography>
                  </Box>
                  <Box sx={styles.barSkeletonContainer}>
                    {[10, 20, 30, 20, 25, 15, 35, 40, 20, 30].map((h, i) => (
                      <Box key={i} sx={styles.barSkeletonCol}>
                        <Box sx={{ ...styles.barSkeleton, height: `${h}%` }} />
                        <Typography sx={styles.barSkeletonLabel}>
                          {t("dashboard.charts.noneLabel")}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box sx={styles.halfWidthCard}>
                  <Box sx={styles.chartHeader}>
                    <Typography sx={styles.chartTitle}>
                      {t("dashboard.charts.confidenceScore")}
                    </Typography>
                    <Typography sx={styles.chartSubtitle}>
                      {t("dashboard.charts.confidenceSubtitle")}
                    </Typography>
                  </Box>
                  <Box sx={styles.barSkeletonContainer}>
                    {[15, 10, 25, 20, 20, 30, 10, 25, 40, 30].map((h, i) => (
                      <Box key={i} sx={styles.barSkeletonCol}>
                        <Box sx={{ ...styles.barSkeleton, height: `${h}%` }} />
                        <Typography sx={styles.barSkeletonLabel}>
                          {t("dashboard.charts.noneLabel")}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
              <Box sx={styles.fullWidthCard}>
                <Box sx={styles.chartHeader}>
                  <Typography sx={styles.chartTitle}>
                    {t("dashboard.charts.deIdentificationMethod")}
                  </Typography>
                  <Typography sx={styles.chartSubtitle}>
                    {t("dashboard.charts.methodSubtitle")}
                  </Typography>
                </Box>
                <Box sx={styles.barSkeletonContainer}>
                  {[30, 40, 20, 50, 35, 45, 25, 30, 40, 60].map((h, i) => (
                    <Box key={i} sx={styles.barSkeletonCol}>
                      <Box sx={{ ...styles.barSkeleton, height: `${h}%` }} />
                      <Typography sx={styles.barSkeletonLabel}>
                        {t("dashboard.charts.noneLabel")}
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
