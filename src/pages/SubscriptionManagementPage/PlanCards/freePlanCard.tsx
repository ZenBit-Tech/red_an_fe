import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { useGetBillingStatusQuery } from "@/common/api/billingApi";
import * as S from "../styles";

export const FreePlanCard = () => {
  const { t } = useTranslation("subscriptionManagement");

  const { data: billingStatus } = useGetBillingStatusQuery();

  const usedToday = billingStatus?.usedToday ?? 0;

  const dailyLimit = billingStatus?.dailyLimit ?? 2;

  const sliderValue = usedToday;

  return (
    <S.FreePlanBox>
      <S.FreePlanState>{t("plans.active")}</S.FreePlanState>
      <S.PlanName>{t("plans.freePlan")}</S.PlanName>
      <S.PlanPriseBox>
        <S.FreePlanPrise>$0</S.FreePlanPrise>
        <S.FreePlanPeriod>/{t("plans.month")}</S.FreePlanPeriod>
      </S.PlanPriseBox>

      <S.FreePlanConditions>
        <S.IconWrapper>
          <svg>
            <use href={"/compliance/icons.svg#check-circle"} />
          </svg>
        </S.IconWrapper>

        {t("plans.docsPerDay")}
      </S.FreePlanConditions>
      <S.FreePlanConditions>{t("plans.dailyProcLimit")}</S.FreePlanConditions>

      <S.CustomSliderBox>
        <S.SliderIndicatorString>
          <Typography>{t("plans.usedToday")}</Typography>

          <Typography>
            {usedToday}/{dailyLimit}
          </Typography>
        </S.SliderIndicatorString>

        <S.CustomSlider
          value={sliderValue}
          valueLabelDisplay="auto"
          min={0}
          max={dailyLimit}
          step={1}
        />
      </S.CustomSliderBox>
    </S.FreePlanBox>
  );
};
