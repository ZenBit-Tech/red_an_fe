import { useTranslation } from "react-i18next";
import * as S from "./styles";

export const SectionOurValues = () => {
  const { t } = useTranslation("aboutUs");
  return (
    <S.SectionWrapper>
      <S.CustomContainer>
        <S.SectionTitle>Our Values</S.SectionTitle>

        <S.ValuesList>
          <S.ValuesListItem>
            <S.IconWrapper>
              {
                <svg>
                  <use href={"/aboutUsPage/icons.svg#icon-Icon-5"} />
                </svg>
              }
            </S.IconWrapper>
            <S.ItemTitle>{t("ourValues.itemOneTitle")}</S.ItemTitle>
            <S.ItemDescription>
              {t("ourValues.itemOneDescription")}
            </S.ItemDescription>
          </S.ValuesListItem>

          <S.ValuesListItem>
            <S.IconWrapper>
              {
                <svg>
                  <use href={"/aboutUsPage/icons.svg#icon-Icon-6"} />
                </svg>
              }
            </S.IconWrapper>
            <S.ItemTitle>{t("ourValues.itemTwoTitle")}</S.ItemTitle>
            <S.ItemDescription>
              {t("ourValues.itemTwoDescription")}
            </S.ItemDescription>
          </S.ValuesListItem>

          <S.ValuesListItem>
            <S.IconWrapper>
              {
                <svg>
                  <use href={"/aboutUsPage/icons.svg#icon-Icon-7"} />
                </svg>
              }
            </S.IconWrapper>
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
