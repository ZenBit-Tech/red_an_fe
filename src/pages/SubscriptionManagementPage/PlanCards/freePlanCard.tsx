import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import * as S from "../styles";

export const FreePlanCard = () => {
  const { t } = useTranslation("subscriptionManagement");

  const sliderValue = 1;

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
          {
            <svg>
              <use href={"/compliance/icons.svg#check-circle"} />
            </svg>
          }
        </S.IconWrapper>
        {t("plans.docsPerDay")}
      </S.FreePlanConditions>
      <S.FreePlanConditions>{t("plans.dailyProcLimit")}</S.FreePlanConditions>
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
    </S.FreePlanBox>
  );
};
