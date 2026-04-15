import { useTranslation } from "react-i18next";
import * as S from "./styles";

export const SectionLeadershipTeam = () => {
  const { t } = useTranslation("aboutUs");
  return (
    <S.SectionWrapper>
      <S.CustomContainer>
        <S.SectionTitle>{t("ourTeam.title")}</S.SectionTitle>
        <S.SectionDescription>
          {t("ourTeam.firstContentParagraph")}
        </S.SectionDescription>
        <S.TeamList>
          {/* Ітем 1 */}
          <S.TeamListItem>
            <S.IconWrapper>{/* <IconMission1 /> */}</S.IconWrapper>
            <S.ItemTitle>{t("ourTeam.itemOneTitle")}</S.ItemTitle>
            <S.ItemDescription>
              {t("ourTeam.itemOneDescription")}
            </S.ItemDescription>
          </S.TeamListItem>

          {/* Ітем 2 */}
          <S.TeamListItem>
            <S.IconWrapper>{/* <IconMission2 /> */}</S.IconWrapper>
            <S.ItemTitle>{t("ourTeam.itemTwoTitle")}</S.ItemTitle>
            <S.ItemDescription>
              {t("ourTeam.itemTwoDescription")}
            </S.ItemDescription>
          </S.TeamListItem>

          {/* Ітем 3 */}
          <S.TeamListItem>
            <S.IconWrapper>{/* <IconMission3 /> */}</S.IconWrapper>
            <S.ItemTitle>{t("ourTeam.itemThreeTitle")}</S.ItemTitle>
            <S.ItemDescription>
              {t("ourTeam.itemThreeDescription")}
            </S.ItemDescription>
          </S.TeamListItem>
        </S.TeamList>
        <S.TeamPromotionText>
          {t("ourTeam.secondContentParagraph")}
        </S.TeamPromotionText>
      </S.CustomContainer>
    </S.SectionWrapper>
  );
};
