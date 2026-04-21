import { useTranslation } from "react-i18next";
import * as S from "./styles";
import { TeamMemberImage } from "./teamImageComponent";
import { TEAM_CONFIG } from "./teamImageConfig";

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
          {TEAM_CONFIG.map((member) => (
            <S.TeamListItem key={member.prefix}>
              {/* Замість старого S.TeamImage вставляємо наш адаптивний компонент */}
              <TeamMemberImage
                name={t(`ourTeam.${member.titleKey}`)}
                prefix={member.prefix}
              />

              <S.ContentOverlay>
                <S.ItemTitle>{t(`ourTeam.${member.titleKey}`)}</S.ItemTitle>
                <S.ItemDescription>
                  {t(`ourTeam.${member.descKey}`)}
                </S.ItemDescription>
              </S.ContentOverlay>
            </S.TeamListItem>
          ))}
        </S.TeamList>
        <S.TeamPromotionTextBox>
          <S.TeamPromotionText>
            {t("ourTeam.secondContentParagraph")}
          </S.TeamPromotionText>
          <S.TeamPromotionText>
            {t("ourTeam.theardContentParagraph")}
          </S.TeamPromotionText>
        </S.TeamPromotionTextBox>
      </S.CustomContainer>
    </S.SectionWrapper>
  );
};
