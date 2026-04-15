import { useTranslation } from "react-i18next";
import * as S from "./styles";

export const SectionHero = () => {
  const { t } = useTranslation();
  return (
    <S.SectionWrapper>
      <S.CustomContainer>
        <S.SectionTitle>{t("aboutUs.hero.title")}</S.SectionTitle>
        <S.SectionContentText>
          {t("aboutUs.hero.textContent")}
        </S.SectionContentText>
      </S.CustomContainer>
    </S.SectionWrapper>
  );
};
