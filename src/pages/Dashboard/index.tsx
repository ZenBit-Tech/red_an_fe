import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { InfoOutlined } from "@mui/icons-material";
import { APP_ROUTES } from "@/constants";
import { TIME_FILTERS } from "@/pages/Dashboard/constants";
import { useDashboard } from "@/pages/Dashboard/hooks/useDashboard";
import * as S from "@/pages/Dashboard/styles";
import { useGetDashboardStatsQuery } from "@/store/dashboardApiSlice";
import StatCards from "@/components/DashboardStatCards/index";
import ComplianceChart from "@/pages/Dashboard/сharts/ComplianceChart/ComplianceChart";
import EntityTypesChart from "@/pages/Dashboard/сharts/EntityTypesChart/EntityTypesChart";
import ProcessingHistoryChart from "@/pages/Dashboard/сharts/ProcessingHistoryChart/ProcessingHistoryChart";
import ConfidenceChart from "@/pages/Dashboard/сharts/ConfidenceChart/ConfidenceChart";
import DeIdMethodsChart from "@/pages/Dashboard/сharts/DeIdMethodsChart/DeIdMethodsChart";

const DashboardPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { activeTime, setActiveTime } = useDashboard();

  const handleStartDeidentify = (): void => {
    navigate(APP_ROUTES.DEIDENTIFY);
  };

  const { data, isLoading } = useGetDashboardStatsQuery(
    {
      period: activeTime,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    {
      refetchOnMountOrArgChange: true,
    },
  );

  if (isLoading) {
    return <S.InfoBox>Loading...</S.InfoBox>;
  }

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
            <StatCards summary={data?.summary} />
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
            <ComplianceChart data={data?.charts?.complianceFrameworkUsage} />
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
          <EntityTypesChart chartData={data?.charts?.entityTypesDetected} />
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
            <ProcessingHistoryChart data={data?.charts?.processingHistory} />
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
            <ConfidenceChart data={data?.charts?.confidenceScoreDistribution} />
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
          <DeIdMethodsChart data={data?.charts?.deIdentificationMethodUsage} />
        </S.FullWidthCard>
      </S.ContentContainer>
    </S.PageScrollContainer>
  );
};

export { DashboardPage };
export default DashboardPage;
