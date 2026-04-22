import { useTranslation } from "react-i18next";
import { Box, Typography, Button } from "@mui/material";
import {
  FolderOpen,
  DescriptionOutlined,
  CheckCircleOutlined,
  Fingerprint,
  InfoOutlined,
  HourglassEmpty,
} from "@mui/icons-material";
import * as styles from "@/pages/Dashboard/styles";
import {
  DEFAULT_STATS,
  MOCK_CHART_SKELETONS,
  TIME_FILTERS,
} from "@/pages/Dashboard/constants";
import { useDashboard } from "@/pages/Dashboard/hooks/useDashboard";

const DashboardPage = () => {
  const { t } = useTranslation();
  const { activeTime, setActiveTime } = useDashboard();

  const STAT_CARDS = [
    {
      label: t("dashboard.stats.totalDocuments"),
      value: DEFAULT_STATS.TOTAL_DOCUMENTS,
      icon: <DescriptionOutlined sx={styles.statIcon} />,
    },
    {
      label: t("dashboard.stats.entitiesDetected"),
      value: DEFAULT_STATS.ENTITIES_DETECTED,
      icon: <CheckCircleOutlined sx={styles.statIcon} />,
    },
    {
      label: t("dashboard.stats.avgCompleteness"),
      value: DEFAULT_STATS.AVG_COMPLETENESS,
      icon: <Fingerprint sx={styles.statIcon} />,
    },
    {
      label: t("dashboard.stats.successRate"),
      value: DEFAULT_STATS.SUCCESS_RATE,
      icon: <FolderOpen sx={styles.statIcon} />,
    },
  ];

  return (
    <Box sx={styles.pageScroll}>
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
            <Box sx={styles.headerActionsColumn}>
              <Box sx={styles.infoBox}>
                <Box sx={styles.infoBanner}>
                  <InfoOutlined sx={styles.infoIcon} />
                  <Typography sx={styles.infoBannerText}>
                    {t("dashboard.page.infoBanner")}
                  </Typography>
                </Box>
                <Button variant="contained" sx={styles.startButton}>
                  {t("dashboard.page.startButton")}
                </Button>
              </Box>
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
        </Box>
        <Box sx={styles.topSectionGrid}>
          <Box sx={styles.statCardsColumn}>
            {STAT_CARDS.map((card) => (
              <Box key={card.label} sx={styles.statCard}>
                <Box sx={styles.statCardHeader}>
                  <Typography sx={styles.statLabel}>{card.label}</Typography>
                  <Box sx={styles.statIconBox}>{card.icon}</Box>
                </Box>
                <Typography sx={styles.statValue}>{card.value}</Typography>
                <Box sx={styles.statFooter}>
                  <HourglassEmpty sx={styles.statFooterIcon} />
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
            {MOCK_CHART_SKELETONS.ENTITY_TYPES.map((h, i) => (
              <Box key={i} sx={styles.barSkeletonCol}>
                <Box sx={styles.barSkeletonDynamic(h)} />
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
              {MOCK_CHART_SKELETONS.ENTITY_TYPES.map((h, i) => (
                <Box key={i} sx={styles.barSkeletonCol}>
                  <Box sx={styles.barSkeletonDynamic(h)} />
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
              {MOCK_CHART_SKELETONS.ENTITY_TYPES.map((h, i) => (
                <Box key={i} sx={styles.barSkeletonCol}>
                  <Box sx={styles.barSkeletonDynamic(h)} />
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
            {MOCK_CHART_SKELETONS.ENTITY_TYPES.map((h, i) => (
              <Box key={i} sx={styles.barSkeletonCol}>
                <Box sx={styles.barSkeletonDynamic(h)} />
                <Typography sx={styles.barSkeletonLabel}>
                  {t("dashboard.charts.noneLabel")}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { DashboardPage };
export default DashboardPage;
