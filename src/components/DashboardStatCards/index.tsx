import { useTranslation } from "react-i18next";
import {
  DescriptionOutlined,
  CheckCircleOutlined,
  Fingerprint,
  FolderOpen,
} from "@mui/icons-material";
import * as S from "@/pages/Dashboard/styles";
import { type DashboardSummary } from "@/types/dashboard";

interface StatCardsProps {
  summary?: DashboardSummary;
}

const StatCards = ({ summary }: StatCardsProps) => {
  const { t } = useTranslation();

  const cards = [
    {
      label: t("dashboard.stats.totalDocuments"),
      value: summary?.totalDocuments ?? 0,
      icon: <DescriptionOutlined />,
    },
    {
      label: t("dashboard.stats.entitiesDetected"),
      value: summary?.entitiesDetected ?? 0,
      icon: <CheckCircleOutlined />,
    },
    {
      label: t("dashboard.stats.avgCompleteness"),
      value: summary?.avgEntitiesPerDoc ?? 0,
      icon: <Fingerprint />,
    },
    {
      label: t("dashboard.stats.successRate"),
      value: `${summary?.successRate ?? 0}%`,
      icon: <FolderOpen />,
    },
  ];

  return (
    <S.StatCardsColumn>
      {cards.map((card) => (
        <S.StatCard key={card.label}>
          <S.StatCardHeader>
            <S.StatLabel>{card.label}</S.StatLabel>
            <S.StatIconBox>{card.icon}</S.StatIconBox>
          </S.StatCardHeader>
          <S.StatValue>{card.value}</S.StatValue>
        </S.StatCard>
      ))}
    </S.StatCardsColumn>
  );
};

export default StatCards;
