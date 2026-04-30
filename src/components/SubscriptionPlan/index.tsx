import { useTranslation } from "react-i18next";
import { SUBSCRIPTION_PLANS } from "@/constants/subscriptionPlans";
import { useSubscription } from "@/common/hooks/useSubscription";
import { Container } from "@mui/material";
import PlanCard from "./PlanCard";
import GradeSecurity from "./GradeSecurity";
import * as S from "./styles";

const SubscriptionPlan = () => {
  const { t } = useTranslation();
  const { handleSelectPlan, isLoading, loadingPlanId } = useSubscription();

  return (
    <Container>
      <S.SubscriptionContainer id="subscription-plan">
        <S.PlanWrapper>
          <S.TitleBlock>
            <S.Title>{t("subscriptionPlan.title")}</S.Title>
            <S.Subtitle>{t("subscriptionPlan.subtitle")}</S.Subtitle>
          </S.TitleBlock>
          <S.PlansBlock>
            {SUBSCRIPTION_PLANS.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                isLoading={isLoading && loadingPlanId === plan.id}
                onSelect={() => handleSelectPlan(plan)}
              />
            ))}
          </S.PlansBlock>
        </S.PlanWrapper>
        <GradeSecurity />
      </S.SubscriptionContainer>
    </Container>
  );
};

export default SubscriptionPlan;
