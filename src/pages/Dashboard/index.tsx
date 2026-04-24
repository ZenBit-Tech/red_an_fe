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
import {
  BackgroundGlow,
  BarSkeletonCol,
  BarSkeletonContainer,
  BarSkeletonDynamic,
  BarSkeletonLabel,
  ChartHeader,
  ChartSubtitle,
  ChartTitle,
  ComplianceCard,
  ContentContainer,
  DonutSkeleton,
  FullWidthCard,
  HalfWidthCard,
  HeaderActionsColumn,
  InfoBanner,
  InfoBannerText,
  InfoBox,
  PageHeaderRow1,
  PageHeaderWrapper,
  PageScrollContainer,
  PageSubtitle,
  PageTitle,
  SkeletonCenter,
  StartButton,
  StatCard,
  StatCardHeader,
  StatCardsColumn,
  StatFooter,
  StatFooterText,
  StatIconBox,
  StatLabel,
  StatValue,
  TimeFilterGroup,
  TimeFilterPill,
  TimeFilterText,
  TopSectionGrid,
  TwoColGrid,
} from "@/pages/Dashboard/styles";

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
    <PageScrollContainer>
      <ContentContainer>
        <PageHeaderWrapper>
          <BackgroundGlow />
          <PageHeaderRow1>
            <div>
              <PageTitle>{t("dashboard.page.title")}</PageTitle>
              <PageSubtitle>{t("dashboard.page.subtitle")}</PageSubtitle>
            </div>
            <HeaderActionsColumn>
              <InfoBox>
                <InfoBanner>
                  <InfoOutlined />
                  <InfoBannerText>
                    {t("dashboard.page.infoBanner")}
                  </InfoBannerText>
                </InfoBanner>
                <StartButton
                  variant="contained"
                  disableRipple
                  disableElevation
                  onClick={handleStartDeidentify}
                >
                  {t("dashboard.page.startButton")}
                </StartButton>
              </InfoBox>
              <TimeFilterGroup>
                {TIME_FILTERS.map((tf) => (
                  <TimeFilterPill
                    key={tf.key}
                    active={activeTime === tf.key}
                    onClick={() => setActiveTime(tf.key)}
                  >
                    <TimeFilterText active={activeTime === tf.key}>
                      {t(tf.labelKey)}
                    </TimeFilterText>
                  </TimeFilterPill>
                ))}
              </TimeFilterGroup>
            </HeaderActionsColumn>
          </PageHeaderRow1>
        </PageHeaderWrapper>

        <TopSectionGrid>
          <StatCardsColumn>
            {STAT_CARDS.map((card) => (
              <StatCard key={card.label}>
                <StatCardHeader>
                  <StatLabel>{card.label}</StatLabel>
                  <StatIconBox>{card.icon}</StatIconBox>
                </StatCardHeader>
                <StatValue>{card.value}</StatValue>
                <StatFooter>
                  <HourglassEmpty />
                  <StatFooterText>
                    {t("dashboard.stats.awaitingData")}
                  </StatFooterText>
                </StatFooter>
              </StatCard>
            ))}
          </StatCardsColumn>
          <ComplianceCard>
            <ChartHeader>
              <ChartTitle>
                {t("dashboard.charts.complianceFramework")}
              </ChartTitle>
              <ChartSubtitle>
                {t("dashboard.charts.complianceSubtitle")}
              </ChartSubtitle>
            </ChartHeader>
            <SkeletonCenter>
              <DonutSkeleton />
            </SkeletonCenter>
          </ComplianceCard>
        </TopSectionGrid>

        <FullWidthCard>
          <ChartHeader>
            <ChartTitle>{t("dashboard.charts.entityTypesDetected")}</ChartTitle>
            <ChartSubtitle>
              {t("dashboard.charts.entitySubtitle")}
            </ChartSubtitle>
          </ChartHeader>
          <BarSkeletonContainer>
            {MOCK_CHART_SKELETONS.ENTITY_TYPES.map((h, i) => (
              <BarSkeletonCol key={i}>
                <BarSkeletonDynamic heightPercent={h} />
                <BarSkeletonLabel>
                  {t("dashboard.charts.noneLabel")}
                </BarSkeletonLabel>
              </BarSkeletonCol>
            ))}
          </BarSkeletonContainer>
        </FullWidthCard>

        <TwoColGrid>
          <HalfWidthCard>
            <ChartHeader>
              <ChartTitle>{t("dashboard.charts.processingHistory")}</ChartTitle>
              <ChartSubtitle>
                {t("dashboard.charts.historySubtitle")}
              </ChartSubtitle>
            </ChartHeader>
            <BarSkeletonContainer>
              {MOCK_CHART_SKELETONS.ENTITY_TYPES.map((h, i) => (
                <BarSkeletonCol key={i}>
                  <BarSkeletonDynamic heightPercent={h} />
                  <BarSkeletonLabel>
                    {t("dashboard.charts.noneLabel")}
                  </BarSkeletonLabel>
                </BarSkeletonCol>
              ))}
            </BarSkeletonContainer>
          </HalfWidthCard>
          <HalfWidthCard>
            <ChartHeader>
              <ChartTitle>{t("dashboard.charts.confidenceScore")}</ChartTitle>
              <ChartSubtitle>
                {t("dashboard.charts.confidenceSubtitle")}
              </ChartSubtitle>
            </ChartHeader>
            <BarSkeletonContainer>
              {MOCK_CHART_SKELETONS.ENTITY_TYPES.map((h, i) => (
                <BarSkeletonCol key={i}>
                  <BarSkeletonDynamic heightPercent={h} />
                  <BarSkeletonLabel>
                    {t("dashboard.charts.noneLabel")}
                  </BarSkeletonLabel>
                </BarSkeletonCol>
              ))}
            </BarSkeletonContainer>
          </HalfWidthCard>
        </TwoColGrid>

        <FullWidthCard>
          <ChartHeader>
            <ChartTitle>
              {t("dashboard.charts.deIdentificationMethod")}
            </ChartTitle>
            <ChartSubtitle>
              {t("dashboard.charts.methodSubtitle")}
            </ChartSubtitle>
          </ChartHeader>
          <BarSkeletonContainer>
            {MOCK_CHART_SKELETONS.ENTITY_TYPES.map((h, i) => (
              <BarSkeletonCol key={i}>
                <BarSkeletonDynamic heightPercent={h} />
                <BarSkeletonLabel>
                  {t("dashboard.charts.noneLabel")}
                </BarSkeletonLabel>
              </BarSkeletonCol>
            ))}
          </BarSkeletonContainer>
        </FullWidthCard>
      </ContentContainer>
    </PageScrollContainer>
  );
};

export { DashboardPage };
export default DashboardPage;
