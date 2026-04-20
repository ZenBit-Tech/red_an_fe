import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

export const SectionOurMission = () => {
  const { t } = useTranslation("aboutUs");
  return (
    <S.SectionWrapper>
      <S.CustomContainer>
        <Box>
          <S.SectionTitle>{t("ourMission.title")}</S.SectionTitle>
          <S.SectionContentText>
            {t("ourMission.firstContentParagraph")}
          </S.SectionContentText>
          <S.SectionContentText>
            {t("ourMission.secondContentParagraph")}
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
              {t("ourMission.itemOneDescription")}
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
              {t("ourMission.itemTwoDescription")}
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
              {t("ourMission.itemThreeDescription")}
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
              {t("ourMission.itemFourDescription")}
            </S.ItemDescription>
          </S.MissionItem>
        </S.ItemsList>
      </S.CustomContainer>
    </S.SectionWrapper>
  );
};
