import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import {
  DescriptionOutlined,
  CheckCircleOutlined,
  Fingerprint,
  FolderOpen,
  HourglassEmpty,
} from "@mui/icons-material";
import * as styles from "@/pages/Dashboard/styles";
import { type DashboardSummary } from "@/types/dashboard";

interface StatCardsProps {
  summary?: DashboardSummary;
}

const StatCards = ({ summary }: StatCardsProps) => {
  const { t } = useTranslation();

  const cards = [
    {
      label: t("dashboard.stats.totalDocuments"),
      value: summary?.totalDocuments || 0,
      icon: <DescriptionOutlined sx={styles.statIcon} />,
    },
    {
      label: t("dashboard.stats.entitiesDetected"),
      value: summary?.entitiesDetected || 0,
      icon: <CheckCircleOutlined sx={styles.statIcon} />,
    },
    {
      label: t("dashboard.stats.avgCompleteness"),
      value: summary?.avgEntitiesPerDoc,
      icon: <Fingerprint sx={styles.statIcon} />,
    },
    {
      label: t("dashboard.stats.successRate"),
      value: `${summary?.successRate}%`,
      icon: <FolderOpen sx={styles.statIcon} />,
    },
  ];

  return (
    <Box sx={styles.statCardsColumn}>
      {cards.map((card) => (
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
  );
};

export default StatCards;
