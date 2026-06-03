import { useTranslation } from "react-i18next";
import { TRUST_METRICS } from "@/constants/subscriptionPlans";
import * as S from "./styles";

const GradeSecurity = () => {
  const { t } = useTranslation();
  return (
    <S.GradeSecurity>
      <S.GradeSecurityContext data-aos="zoom-in-up">
        <S.GradeSecurityTitle>
          {t("subscriptionPlan.gradeSecurity.title")}
        </S.GradeSecurityTitle>
        <S.Description>
          {t("subscriptionPlan.gradeSecurity.description")}
        </S.Description>
      </S.GradeSecurityContext>

      <S.MetricsBlock>
        <S.MetricsRow>
          {TRUST_METRICS.slice(0, 2).map((metric) => (
            <S.MetricCard key={metric.label}>
              <S.MetricValue>{metric.value}</S.MetricValue>
              <S.MetricLabel>{metric.label}</S.MetricLabel>
            </S.MetricCard>
          ))}
        </S.MetricsRow>
        <S.MetricsRow>
          {TRUST_METRICS.slice(2, 4).map((metric) => (
            <S.MetricCard key={metric.label}>
              <S.MetricValue>{metric.value}</S.MetricValue>
              <S.MetricLabel>{metric.label}</S.MetricLabel>
            </S.MetricCard>
          ))}
        </S.MetricsRow>
      </S.MetricsBlock>
    </S.GradeSecurity>
  );
};

export default GradeSecurity;
