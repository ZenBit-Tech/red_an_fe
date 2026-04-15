import { useTranslation } from "react-i18next";
import * as S from "./styles";

export const SectionOurValues = () => {
  const { t } = useTranslation("aboutUs");
  return (
    <S.SectionWrapper>
      <S.CustomContainer>
        <S.SectionTitle>Our Values</S.SectionTitle>

        <S.ValuesList>
          {/* Ітем 1 */}
          <S.ValuesListItem>
            <S.IconWrapper>{/* <IconMission1 /> */}</S.IconWrapper>
            <S.ItemTitle>{t("ourValues.itemOneTitle")}</S.ItemTitle>
            <S.ItemDescription>
              {t("ourValues.itemOneDescription")}
            </S.ItemDescription>
          </S.ValuesListItem>

          {/* Ітем 2 */}
          <S.ValuesListItem>
            <S.IconWrapper>{/* <IconMission2 /> */}</S.IconWrapper>
            <S.ItemTitle>{t("ourValues.itemTwoTitle")}</S.ItemTitle>
            <S.ItemDescription>
              {t("ourValues.itemTwoDescription")}
            </S.ItemDescription>
          </S.ValuesListItem>

          {/* Ітем 3 */}
          <S.ValuesListItem>
            <S.IconWrapper>{/* <IconMission3 /> */}</S.IconWrapper>
            <S.ItemTitle>{t("ourValues.itemThreeTitle")}</S.ItemTitle>
            <S.ItemDescription>
              {t("ourValues.itemThreeDescription")}
            </S.ItemDescription>
          </S.ValuesListItem>
        </S.ValuesList>
      </S.CustomContainer>
    </S.SectionWrapper>
  );
};
