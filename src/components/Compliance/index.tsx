import { useTranslation } from "react-i18next";
import { COMPLIANCE_CARDS } from "@/constants/complianceConstants";
import * as S from "./styles";

export const Compliance = () => {
  const { t } = useTranslation();

  return (
    <section id="compliance">
      <S.ContentWrapper>
        <S.TitleBlock>
          <S.SectionTitle>{t("compliance.title")}</S.SectionTitle>
          <S.TitleDivider />
        </S.TitleBlock>

        <S.CardsGrid>
          {COMPLIANCE_CARDS.map((card) => (
            <S.ComplianceCard key={card.id}>
              <S.CardHeader>
                <S.CardTitle>
                  {t(`compliance.${card.titleKey}`, card.defaultTitle)}
                </S.CardTitle>
                <S.CardRegion>
                  {t(`compliance.${card.regionKey}`, card.defaultRegion)}
                </S.CardRegion>
              </S.CardHeader>

              <S.CardDivider />

              <S.CardRows>
                {card.rows.map((row) => (
                  <S.CardRow key={row.id}>
                    <S.RowLabel>
                      {t(`compliance.${row.labelKey}`, row.defaultLabel)}
                    </S.RowLabel>
                    <S.RowValue>
                      {t(`compliance.${row.valueKey}`, row.defaultValue)}
                    </S.RowValue>
                  </S.CardRow>
                ))}
              </S.CardRows>

              <S.CardDivider />

              <S.CardFooter>
                <S.FooterIconWrapper>
                  <svg>
                    <use href="/compliance/icons.svg#check-circle" />
                  </svg>
                </S.FooterIconWrapper>
                <S.FooterText>
                  {t(`compliance.${card.footerKey}`, card.defaultFooter)}
                </S.FooterText>
              </S.CardFooter>
            </S.ComplianceCard>
          ))}
        </S.CardsGrid>
        <S.CustomProfilesBanner>
          <S.BannerTextBlock>
            <S.BannerTitle>{t("compliance.banner.title")}</S.BannerTitle>
            <S.BannerDescription>
              {t("compliance.banner.description")}
            </S.BannerDescription>
          </S.BannerTextBlock>
          <S.BannerTexture aria-hidden />
        </S.CustomProfilesBanner>
      </S.ContentWrapper>
    </section>
  );
};
