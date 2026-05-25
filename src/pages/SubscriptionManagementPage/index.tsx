import { useTranslation } from "react-i18next";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useGetSubscriptionQuery } from "@/common/api/billingApi";
import { PaymentHistoryTable } from "./PaymentHistoty";
import * as S from "./styles";

export const SubscriptionManagementPage = () => {
  const { t } = useTranslation("subscriptionManagement");

  const { data: subscription, isLoading } = useGetSubscriptionQuery();

  const sliderValue = 1;

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
          <S.CurrentPlanTitle>{t("plans.currentPlan")}</S.CurrentPlanTitle>
          <S.CurrentPlanBox>
            <S.CurrentPlanState>{t("plans.active")}</S.CurrentPlanState>
            <S.PlanName>{t("plans.freePlan")}</S.PlanName>
            <S.PlanPriseBox>
              <S.CurrentPlanPrise>$0</S.CurrentPlanPrise>
              <S.CurrentPlanPeriod>/{t("plans.month")}</S.CurrentPlanPeriod>
            </S.PlanPriseBox>
            <S.CurrrentPlanConditions>
              <S.IconWrapper>
                {
                  <svg>
                    <use href={"/compliance/icons.svg#check-circle"} />
                  </svg>
                }
              </S.IconWrapper>
              {t("plans.docsPerDay")}
            </S.CurrrentPlanConditions>
            <S.CurrrentPlanConditions>
              {t("plans.dailyProcLimit")}
            </S.CurrrentPlanConditions>
            <S.CustomSliderBox>
              <S.SliderIndicatorString>
                <Typography>{t("plans.usedToday")}</Typography>
                <Typography>{t("plans.docCount")}</Typography>
              </S.SliderIndicatorString>
              <S.CustomSlider
                value={sliderValue}
                valueLabelDisplay="auto"
                min={0}
                max={2}
                step={1}
              />
            </S.CustomSliderBox>
          </S.CurrentPlanBox>
        </S.CurrentPlanContainer>
        <S.AvialablePlanContainer>
          <S.AvialablePlanTitle>
            {t("plans.avialablePlan")}
          </S.AvialablePlanTitle>
          <S.AvialablePlanBox>
            <S.AvialablePlanState>
              {t("plans.recommended")}
            </S.AvialablePlanState>
            <S.PlanName> {t("plans.professionalPlan")}</S.PlanName>
            <S.PlanPriseBox>
              <S.AvialablePlanPrise>$5</S.AvialablePlanPrise>
              <S.CurrentPlanPeriod>/{t("plans.month")}</S.CurrentPlanPeriod>
            </S.PlanPriseBox>
            <S.AvialablePlanConditionsList>
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
            </S.AvialablePlanConditionsList>
            <S.UpgradeButton variant="contained" type="submit">
              {t("plans.upgradeButton")}
            </S.UpgradeButton>
          </S.AvialablePlanBox>
        </S.AvialablePlanContainer>
      </S.PlansWrapper>
      <S.PaymentHistoryContainer>
        <S.PaymentHistoryTitle>
          {t("paymentHistory.title")}
        </S.PaymentHistoryTitle>
        <PaymentHistoryTable />
      </S.PaymentHistoryContainer>
    </S.PageWrapper>
  );
};
