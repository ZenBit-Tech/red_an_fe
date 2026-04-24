import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  CheckCircleOutlined,
  DescriptionOutlined,
  Fingerprint,
  FolderOpen,
  HourglassEmpty,
  InfoOutlined,
} from "@mui/icons-material";
import { APP_ROUTES } from "@/constants";
import {
  DEFAULT_STATS,
  MOCK_CHART_SKELETONS,
  TIME_FILTERS,
} from "@/pages/Dashboard/constants";
import { useDashboard } from "@/pages/Dashboard/hooks/useDashboard";
import * as S from "@/pages/Dashboard/styles";

const DashboardPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { activeTime, setActiveTime } = useDashboard();

  const handleStartDeidentify = (): void => {
    navigate(APP_ROUTES.DEIDENTIFY);
  };

  const STAT_CARDS = [
    {
      label: t("dashboard.stats.totalDocuments"),
      value: DEFAULT_STATS.TOTAL_DOCUMENTS,
      icon: <DescriptionOutlined />,
    },
    {
      label: t("dashboard.stats.entitiesDetected"),
      value: DEFAULT_STATS.ENTITIES_DETECTED,
      icon: <CheckCircleOutlined />,
    },
    {
      label: t("dashboard.stats.avgCompleteness"),
      value: DEFAULT_STATS.AVG_COMPLETENESS,
      icon: <Fingerprint />,
    },
    {
      label: t("dashboard.stats.successRate"),
      value: DEFAULT_STATS.SUCCESS_RATE,
      icon: <FolderOpen />,
    },
  ];

  return (
    <S.PageScrollContainer>
      <S.ContentContainer>
        <S.PageHeaderWrapper>
          <S.BackgroundGlow />
          <S.PageHeaderRow1>
            <div>
              <S.PageTitle>{t("dashboard.page.title")}</S.PageTitle>
              <S.PageSubtitle>{t("dashboard.page.subtitle")}</S.PageSubtitle>
            </div>
            <S.HeaderActionsColumn>
              <S.InfoBox>
                <S.InfoBanner>
                  <InfoOutlined />
                  <S.InfoBannerText>
                    {t("dashboard.page.infoBanner")}
                  </S.InfoBannerText>
                </S.InfoBanner>
                <S.StartButton
                  variant="contained"
                  disableRipple
                  disableElevation
                  onClick={handleStartDeidentify}
                >
                  {t("dashboard.page.startButton")}
                </S.StartButton>
              </S.InfoBox>
              <S.TimeFilterGroup>
                {TIME_FILTERS.map((tf) => (
                  <S.TimeFilterPill
                    key={tf.key}
                    active={activeTime === tf.key}
                    onClick={() => setActiveTime(tf.key)}
                  >
                    <S.TimeFilterText active={activeTime === tf.key}>
                      {t(tf.labelKey)}
                    </S.TimeFilterText>
                  </S.TimeFilterPill>
                ))}
              </S.TimeFilterGroup>
            </S.HeaderActionsColumn>
          </S.PageHeaderRow1>
        </S.PageHeaderWrapper>

        <S.TopSectionGrid>
          <S.StatCardsColumn>
            {STAT_CARDS.map((card) => (
              <S.StatCard key={card.label}>
                <S.StatCardHeader>
                  <S.StatLabel>{card.label}</S.StatLabel>
                  <S.StatIconBox>{card.icon}</S.StatIconBox>
                </S.StatCardHeader>
                <S.StatValue>{card.value}</S.StatValue>
                <S.StatFooter>
                  <HourglassEmpty />
                  <S.StatFooterText>
                    {t("dashboard.stats.awaitingData")}
                  </S.StatFooterText>
                </S.StatFooter>
              </S.StatCard>
            ))}
          </S.StatCardsColumn>
          <S.ComplianceCard>
            <S.ChartHeader>
              <S.ChartTitle>
                {t("dashboard.charts.complianceFramework")}
              </S.ChartTitle>
              <S.ChartSubtitle>
                {t("dashboard.charts.complianceSubtitle")}
              </S.ChartSubtitle>
            </S.ChartHeader>
            <S.SkeletonCenter>
              <S.DonutSkeleton />
            </S.SkeletonCenter>
          </S.ComplianceCard>
        </S.TopSectionGrid>

        <S.FullWidthCard>
          <S.ChartHeader>
            <S.ChartTitle>
              {t("dashboard.charts.entityTypesDetected")}
            </S.ChartTitle>
            <S.ChartSubtitle>
              {t("dashboard.charts.entitySubtitle")}
            </S.ChartSubtitle>
          </S.ChartHeader>
          <S.BarSkeletonContainer>
            {MOCK_CHART_SKELETONS.ENTITY_TYPES.map((h, i) => (
              <S.BarSkeletonCol key={i}>
                <S.BarSkeletonDynamic heightPercent={h} />
                <S.BarSkeletonLabel>
                  {t("dashboard.charts.noneLabel")}
                </S.BarSkeletonLabel>
              </S.BarSkeletonCol>
            ))}
          </S.BarSkeletonContainer>
        </S.FullWidthCard>

        <S.TwoColGrid>
          <S.HalfWidthCard>
            <S.ChartHeader>
              <S.ChartTitle>
                {t("dashboard.charts.processingHistory")}
              </S.ChartTitle>
              <S.ChartSubtitle>
                {t("dashboard.charts.historySubtitle")}
              </S.ChartSubtitle>
            </S.ChartHeader>
            <S.BarSkeletonContainer>
              {MOCK_CHART_SKELETONS.ENTITY_TYPES.map((h, i) => (
                <S.BarSkeletonCol key={i}>
                  <S.BarSkeletonDynamic heightPercent={h} />
                  <S.BarSkeletonLabel>
                    {t("dashboard.charts.noneLabel")}
                  </S.BarSkeletonLabel>
                </S.BarSkeletonCol>
              ))}
            </S.BarSkeletonContainer>
          </S.HalfWidthCard>
          <S.HalfWidthCard>
            <S.ChartHeader>
              <S.ChartTitle>
                {t("dashboard.charts.confidenceScore")}
              </S.ChartTitle>
              <S.ChartSubtitle>
                {t("dashboard.charts.confidenceSubtitle")}
              </S.ChartSubtitle>
            </S.ChartHeader>
            <S.BarSkeletonContainer>
              {MOCK_CHART_SKELETONS.ENTITY_TYPES.map((h, i) => (
                <S.BarSkeletonCol key={i}>
                  <S.BarSkeletonDynamic heightPercent={h} />
                  <S.BarSkeletonLabel>
                    {t("dashboard.charts.noneLabel")}
                  </S.BarSkeletonLabel>
                </S.BarSkeletonCol>
              ))}
            </S.BarSkeletonContainer>
          </S.HalfWidthCard>
        </S.TwoColGrid>

        <S.FullWidthCard>
          <S.ChartHeader>
            <S.ChartTitle>
              {t("dashboard.charts.deIdentificationMethod")}
            </S.ChartTitle>
            <S.ChartSubtitle>
              {t("dashboard.charts.methodSubtitle")}
            </S.ChartSubtitle>
          </S.ChartHeader>
          <S.BarSkeletonContainer>
            {MOCK_CHART_SKELETONS.ENTITY_TYPES.map((h, i) => (
              <S.BarSkeletonCol key={i}>
                <S.BarSkeletonDynamic heightPercent={h} />
                <S.BarSkeletonLabel>
                  {t("dashboard.charts.noneLabel")}
                </S.BarSkeletonLabel>
              </S.BarSkeletonCol>
            ))}
          </S.BarSkeletonContainer>
        </S.FullWidthCard>
      </S.ContentContainer>
    </S.PageScrollContainer>
  );
};

export { DashboardPage };
export default DashboardPage;
