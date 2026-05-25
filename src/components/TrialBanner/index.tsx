import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { APP_ROUTES } from "@/constants";
import * as S from "@/components/TrialBanner/styles";

interface TrialBannerProps {
  onDismiss: () => void;
}

export const TrialBanner: React.FC<TrialBannerProps> = ({ onDismiss }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <S.BannerWrapper>
      <S.BannerLeft>
        <S.FreePlanBadge>
          <S.BadgeText>{t("trialBanner.badge")}</S.BadgeText>
        </S.FreePlanBadge>
        <S.BannerText>{t("trialBanner.message")}</S.BannerText>
      </S.BannerLeft>
      <S.BannerActions>
        <S.UpgradeButton onClick={() => navigate(APP_ROUTES.SUBSCRIPTION_PLAN)}>
          {t("trialBanner.upgradeButton")}
        </S.UpgradeButton>
        <S.CloseButton size="small" onClick={onDismiss}>
          <CloseIcon fontSize="small" />
        </S.CloseButton>
      </S.BannerActions>
    </S.BannerWrapper>
  );
};

export default TrialBanner;
