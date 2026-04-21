import { useTranslation } from "react-i18next";
import { CARDS_DATA, FEATURES } from "@/constants";
import * as S from "./styles";

export const Capabilities = () => {
  const { t } = useTranslation();

  return (
    <S.CapabilitiesSection id="solution">
      <S.ContentWrapper>
        <S.LeftContent>
          <S.LeftTextBlock>
            <S.Title>
              {t("capabilities.title")}{" "}
              <S.TitleHighlight>
                {t("capabilities.titleValue")}.
              </S.TitleHighlight>
            </S.Title>

            <S.DescriptionMain>
              {t("capabilities.description")}
            </S.DescriptionMain>
          </S.LeftTextBlock>

          <S.FeaturesList>
            {FEATURES.map((feature) => (
              <S.FeatureItemBox key={feature.id}>
                <S.IconWrapper>
                  <svg>
                    <use href={`/capabilities/icons.svg${feature.iconId}`} />
                  </svg>
                </S.IconWrapper>
                <S.FeatureTextWrapper>
                  <S.FeatureTitle>
                    {t(
                      `capabilities.${feature.titleKey}`,
                      feature.defaultTitle,
                    )}
                  </S.FeatureTitle>
                  <S.Description>
                    {t(`capabilities.${feature.descKey}`, feature.defaultDesc)}
                  </S.Description>
                </S.FeatureTextWrapper>
              </S.FeatureItemBox>
            ))}
          </S.FeaturesList>
        </S.LeftContent>

        <S.RightGrid>
          {CARDS_DATA.map((card) => (
            <S.GridCard key={card.id}>
              <S.IconWrapper>
                <svg>
                  <use href={`/capabilities/icons.svg${card.iconId}`} />
                </svg>
              </S.IconWrapper>
              <S.CardTitle>
                {t(`capabilities.${card.titleKey}`, card.defaultTitle)}
              </S.CardTitle>
              <S.Description>
                {t(`capabilities.${card.descKey}`, card.defaultDesc)}
              </S.Description>
            </S.GridCard>
          ))}
        </S.RightGrid>
      </S.ContentWrapper>
    </S.CapabilitiesSection>
  );
};
