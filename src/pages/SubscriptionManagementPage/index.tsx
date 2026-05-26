import { useTranslation } from "react-i18next";
import { Box, CircularProgress } from "@mui/material";
import { useGetSubscriptionQuery } from "@/common/api/billingApi";
import { PaymentHistoryTable } from "./PaymentHistoty";
import { ProfessionalPlanCard } from "./PlanCards/pofessionalPlanCard";
import { FreePlanCard } from "./PlanCards/freePlanCard";
import { InfoPlanCard } from "./PlanCards/infoAboutPlanCard";
import * as S from "./styles";

/* type ProfessionalPlanCardProps = {
  mode: "current" | "available";
}; */

export const SubscriptionManagementPage = () => {
  const { t } = useTranslation("subscriptionManagement");

  const { data: subscription, isLoading } = useGetSubscriptionQuery();
  console.log(subscription);

  const isPaid =
    subscription?.status === "active" || subscription?.status === "trialing";

  return (
    <S.PageWrapper>
      <S.PageHeader>
        <S.PageTitle data-aos="fade-left">{t("page.title")}</S.PageTitle>
        <S.ActivePlanLabel>
          {isLoading ? (
            <CircularProgress size={16} color="inherit" />
          ) : isPaid ? (
            `${t("plans.professionalPlan")}: ${t("plans.active")}`
          ) : (
            `${t("plans.freePlan")}: ${t("plans.active")}`
          )}
        </S.ActivePlanLabel>
      </S.PageHeader>
      <S.PageDescription>
        <Box>{t("page.descriptionFirstString")}</Box>
        {t("page.descriptionSecondString")}
      </S.PageDescription>

      <S.PlansWrapper>
        <S.CurrentPlanContainer>
          <S.FreePlanTitle>{t("plans.currentPlan")}</S.FreePlanTitle>
          {isPaid ? <ProfessionalPlanCard mode="current" /> : <FreePlanCard />}
        </S.CurrentPlanContainer>
        <S.ProfPlanContainer>
          <S.ProfPlanTitle>
            {t(isPaid ? "plans.informationAboutMyPlan" : "plans.availablePlan")}
          </S.ProfPlanTitle>
          {isPaid ? (
            <InfoPlanCard />
          ) : (
            <ProfessionalPlanCard mode="available" />
          )}
        </S.ProfPlanContainer>
      </S.PlansWrapper>
      <S.PaymentHistoryContainer>
        {isPaid ? (
          <>
            <S.PaymentHistoryTitle>
              {t("paymentHistory.title")}
            </S.PaymentHistoryTitle>
            <PaymentHistoryTable />
          </>
        ) : (
          <p>No payment history</p>
        )}
      </S.PaymentHistoryContainer>
    </S.PageWrapper>
  );
};
