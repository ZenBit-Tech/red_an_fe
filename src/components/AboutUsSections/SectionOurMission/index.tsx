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
          {/* Ітем 1 */}
          <S.MissionItem>
            <S.IconWrapper>{/* <IconMission1 /> */}</S.IconWrapper>
            <S.ItemTitle>100%</S.ItemTitle>
            <S.ItemDescription>
              {t("ourMission.itemOneDescription")}
            </S.ItemDescription>
          </S.MissionItem>

          <S.MissionItem>
            <S.IconWrapper>{/* <IconMission2 /> */}</S.IconWrapper>
            <S.ItemTitle>500+</S.ItemTitle>
            <S.ItemDescription>
              {t("ourMission.itemTwoDescription")}
            </S.ItemDescription>
          </S.MissionItem>

          <S.MissionItem>
            <S.IconWrapper>{/* <IconMission3 /> */}</S.IconWrapper>
            <S.ItemTitle>10M+</S.ItemTitle>
            <S.ItemDescription>
              {t("ourMission.itemThreeDescription")}
            </S.ItemDescription>
          </S.MissionItem>

          <S.MissionItem>
            <S.IconWrapper>{/* <IconMission4 /> */}</S.IconWrapper>
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
