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
          <S.TeamListItem>
            <S.TeamImage
              src="https://placeholder.apptor.studio/400/450/product1.png"
              alt="Team Member"
            />
            <S.ContentOverlay>
              <S.ItemTitle>{t("ourTeam.itemOneTitle")}</S.ItemTitle>
              <S.ItemDescription>
                {t("ourTeam.itemOneDescription")}
              </S.ItemDescription>
            </S.ContentOverlay>
          </S.TeamListItem>

          <S.TeamListItem>
            <S.TeamImage
              src="https://placeholder.apptor.studio/200/200/product2.png"
              alt="Team Member"
            />
            <S.ContentOverlay>
              <S.ItemTitle>{t("ourTeam.itemTwoTitle")}</S.ItemTitle>
              <S.ItemDescription>
                {t("ourTeam.itemTwoDescription")}
              </S.ItemDescription>{" "}
            </S.ContentOverlay>
          </S.TeamListItem>

          <S.TeamListItem>
            <S.TeamImage
              src="https://placeholder.apptor.studio/200/200/product3.png"
              alt="Team Member"
            />{" "}
            <S.ContentOverlay>
              <S.ItemTitle>{t("ourTeam.itemThreeTitle")}</S.ItemTitle>
              <S.ItemDescription>
                {t("ourTeam.itemThreeDescription")}
              </S.ItemDescription>{" "}
            </S.ContentOverlay>
          </S.TeamListItem>
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
