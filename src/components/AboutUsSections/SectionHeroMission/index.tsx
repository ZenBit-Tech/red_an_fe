import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

export const SectionHeroMission = () => {
  const { t } = useTranslation("aboutUs");
  return (
    <S.SectionWrapper>
      <S.CustomContainer>
        <Box>
          <S.SectionTitleFirstString>
            {t("heroMission.titleFirstString")}{" "}
          </S.SectionTitleFirstString>
          <S.SectionTitleSecondString>
            {t("heroMission.titleSecondString")}
          </S.SectionTitleSecondString>

          <S.SectionContentText>
            {t("heroMission.firstContentParagraph")}
          </S.SectionContentText>
          <S.SectionContentText>
            {t("heroMission.secondContentParagraph")}
          </S.SectionContentText>
        </Box>

        <S.ItemsList>
          <S.MissionItem>
            <S.IconWrapper>
              {
                <svg>
                  <use href={"/aboutUsPage/icons.svg#icon-Icon-1"} />
                </svg>
              }
            </S.IconWrapper>
            <S.ItemTitle>100%</S.ItemTitle>
            <S.ItemDescription>
              {t("heroMission.itemOneDescription")}
            </S.ItemDescription>
          </S.MissionItem>

          <S.MissionItem>
            <S.IconWrapper>
              {
                <svg>
                  <use href={"/aboutUsPage/icons.svg#icon-Icon-2"} />
                </svg>
              }
            </S.IconWrapper>
            <S.ItemTitle>500+</S.ItemTitle>
            <S.ItemDescription>
              {t("heroMission.itemTwoDescription")}
            </S.ItemDescription>
          </S.MissionItem>

          <S.MissionItem>
            <S.IconWrapper>
              {
                <svg>
                  <use href={"/aboutUsPage/icons.svg#icon-Icon-3"} />
                </svg>
              }
            </S.IconWrapper>
            <S.ItemTitle>10M+</S.ItemTitle>
            <S.ItemDescription>
              {t("heroMission.itemThreeDescription")}
            </S.ItemDescription>
          </S.MissionItem>

          <S.MissionItem>
            <S.IconWrapper>
              {
                <svg>
                  <use href={"/aboutUsPage/icons.svg#icon-Icon-4"} />
                </svg>
              }
            </S.IconWrapper>
            <S.ItemTitle>99.9%</S.ItemTitle>
            <S.ItemDescription>
              {t("heroMission.itemFourDescription")}
            </S.ItemDescription>
          </S.MissionItem>
        </S.ItemsList>
      </S.CustomContainer>
    </S.SectionWrapper>
  );
};
