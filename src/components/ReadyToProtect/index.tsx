import { useTranslation } from "react-i18next";
import * as S from "./styles";

export const ReadyToProtect = () => {
  const { t } = useTranslation();

  return (
    <S.ReadyToProtectSection id="solution">
      <S.ContentWrapper>
        <S.Title>{t("readyToProtect.title")}</S.Title>

        <S.Description>{t("readyToProtect.description")}</S.Description>

        <S.ButtonsGroup>
          <S.PrimaryButton>
            {t("readyToProtect.primaryCta", "Start Free Trial")}
          </S.PrimaryButton>

          <S.SecondaryButton>
            {t("readyToProtect.secondaryCta", "Contact Us")}
          </S.SecondaryButton>
        </S.ButtonsGroup>
      </S.ContentWrapper>
    </S.ReadyToProtectSection>
  );
};
