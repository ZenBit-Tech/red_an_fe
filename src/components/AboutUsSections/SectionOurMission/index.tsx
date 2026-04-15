import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

export const SectionOurMission = () => {
  const { t } = useTranslation();
  return (
    <S.SectionWrapper>
      <S.CustomContainer>
        <Box>
          <S.SectionTitle>{t("aboutUs.ourMission.title")}</S.SectionTitle>
          <S.SectionContentText>
            {t("aboutUs.ourMission.firstContentParagraph")}
          </S.SectionContentText>
          <S.SectionContentText>
            {t("aboutUs.ourMission.secondContentParagraph")}
          </S.SectionContentText>
        </Box>

        <S.ItemsList>
          {/* Ітем 1 */}
          <S.MissionItem>
            <S.IconWrapper>{/* <IconMission1 /> */}</S.IconWrapper>
            <S.ItemTitle>100%</S.ItemTitle>
            <S.ItemDescription>COMPLIANCE RATE</S.ItemDescription>
          </S.MissionItem>

          {/* Ітем 2 */}
          <S.MissionItem>
            <S.IconWrapper>{/* <IconMission2 /> */}</S.IconWrapper>
            <S.ItemTitle>500+</S.ItemTitle>
            <S.ItemDescription>HEALTHCARE CLIENTS</S.ItemDescription>
          </S.MissionItem>

          {/* Ітем 3 */}
          <S.MissionItem>
            <S.IconWrapper>{/* <IconMission3 /> */}</S.IconWrapper>
            <S.ItemTitle>10M+</S.ItemTitle>
            <S.ItemDescription>RECORDS PROCESSED</S.ItemDescription>
          </S.MissionItem>

          {/* Ітем 4 */}
          <S.MissionItem>
            <S.IconWrapper>{/* <IconMission4 /> */}</S.IconWrapper>
            <S.ItemTitle>99.9%</S.ItemTitle>
            <S.ItemDescription>ACCURACY</S.ItemDescription>
          </S.MissionItem>
        </S.ItemsList>
      </S.CustomContainer>
    </S.SectionWrapper>
  );
};
