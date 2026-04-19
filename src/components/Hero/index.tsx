import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";
import { HeroTitlePlain } from "./styles";
import * as S from "./styles";

import { BADGES } from "@/constants";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <S.HeroSection>
      <S.HeroGlow />
      <Container sx={{ paddingBottom: 0 }}>
        <S.HeroContent>
          <S.HeroText>
            <S.BadgesList>
              {BADGES.map((badge) => (
                <S.ComplianceBadge key={badge.id}>
                  <S.BadgeIconWrapper>
                    <svg>
                      <use href={`/hero/icons.svg#${badge.iconId}`} />
                    </svg>
                  </S.BadgeIconWrapper>
                  <S.BadgeText>
                    {t(`hero.stats.${badge.id}.value`)}{" "}
                    {t(`hero.stats.${badge.id}.label`)}
                  </S.BadgeText>
                </S.ComplianceBadge>
              ))}
            </S.BadgesList>

            <S.HeroTitle>
              <HeroTitlePlain>{t("hero.mainTitleFirst")}</HeroTitlePlain>
              <S.GradientText>{t("hero.mainTitleSecond")}</S.GradientText>
              <HeroTitlePlain>{t("hero.mainTitleThird")}</HeroTitlePlain>
            </S.HeroTitle>
          </S.HeroText>

          <S.Description>{t("hero.description")}</S.Description>

          <S.GetStartedButton>{t("hero.cta.getStarted")}</S.GetStartedButton>
        </S.HeroContent>
      </Container>
    </S.HeroSection>
  );
};

export default Hero;
