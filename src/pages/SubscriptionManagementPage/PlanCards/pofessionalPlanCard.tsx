import { useTranslation } from "react-i18next";
import { useCreateCheckoutSessionMutation } from "@/common/api/billingApi";

import * as S from "../styles";

type ProfessionalPlanCardProps = {
  mode: "current" | "available";
};

export const ProfessionalPlanCard = ({ mode }: ProfessionalPlanCardProps) => {
  const { t } = useTranslation("subscriptionManagement");

  const [createCheckoutSession, { isLoading: isRedirecting }] =
    useCreateCheckoutSessionMutation();
  const handleUpgrade = async () => {
    try {
      const result = await createCheckoutSession({
        targetPlan: "PROFESSIONAL",
      }).unwrap();

      window.location.href = result.url;
    } catch (error) {
      console.error(error);
    }
  };
  const planConditions = [
    {
      id: "priority",
      icon: "/subscription/icons.svg#priority",
    },
    {
      id: "advanced",
      icon: "/subscription/icons.svg#icon-protect",
    },
    {
      id: "unlimited",
      icon: "/subscription/icons.svg#unlimited",
    },
    {
      id: "gift",
      icon: "/subscription/icons.svg#icon-gift",
    },
  ];

  const isCurrent = mode === "current";

  return (
    <S.ProfPlanBox isCurrent={isCurrent}>
      <S.ProfPlanState isCurrent={isCurrent}>
        {t(mode === "current" ? "plans.active" : "plans.recommended")}
      </S.ProfPlanState>
      <S.PlanName> {t("plans.professionalPlan")}</S.PlanName>
      <S.PlanPriseBox>
        <S.ProfPlanPrise>$5</S.ProfPlanPrise>
        <S.FreePlanPeriod>/{t("plans.month")}</S.FreePlanPeriod>
      </S.PlanPriseBox>
      <S.ProfPlanConditionsList>
        {planConditions.map((condition) => (
          <S.ConditionsItem key={condition.id}>
            <S.ConditionIconWrapper>
              <svg width="24" height="24">
                <use href={condition.icon} />
              </svg>
            </S.ConditionIconWrapper>

            <S.ConditionTextContent>
              <S.ConditionTitle>
                {t(`plans.conditions.${condition.id}.title`)}
              </S.ConditionTitle>
              <S.ConditionDescription>
                {t(`plans.conditions.${condition.id}.desc`)}
              </S.ConditionDescription>
            </S.ConditionTextContent>
          </S.ConditionsItem>
        ))}
      </S.ProfPlanConditionsList>
      {!isCurrent && (
        <S.UpgradeButton
          variant="contained"
          onClick={handleUpgrade}
          disabled={isRedirecting}
        >
          {isRedirecting ? t("plans.redirecting") : t("plans.upgradeButton")}
        </S.UpgradeButton>
      )}
    </S.ProfPlanBox>
  );
};
