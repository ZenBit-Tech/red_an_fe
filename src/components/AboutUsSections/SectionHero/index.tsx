import { useTranslation } from "react-i18next";
import * as S from "./styles";

export const SectionHero = () => {
  const { t } = useTranslation("aboutUs");
  return (
    <S.SectionWrapper>
      <S.CustomContainer>
        <S.SectionTitle>{t("hero.title")}</S.SectionTitle>
        <S.SectionContentText>{t("hero.textContent")}</S.SectionContentText>
      </S.CustomContainer>
    </S.SectionWrapper>
  );
};
