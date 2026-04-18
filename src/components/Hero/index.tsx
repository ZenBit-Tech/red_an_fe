import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";
import { HeroTitlePlain } from "./styles";
import {
  BadgeText,
  ComplianceBadge,
  BadgeIconWrapper,
  Description,
  GetStartedButton,
  HeroContent,
  HeroSection,
  HeroTitle,
  HeroText,
  BadgesList,
  GradientText,
  HeroGlow,
} from "./styles";
import { BADGES } from "@/constants";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <HeroSection>
      <HeroGlow />
      <Container>
        <HeroContent>
          <HeroText>
            <BadgesList>
              {BADGES.map((badge) => (
                <ComplianceBadge key={badge.id}>
                  <BadgeIconWrapper>
                    <svg>
                      <use href={`/hero/icons.svg#${badge.iconId}`} />
                    </svg>
                  </BadgeIconWrapper>
                  <BadgeText>
                    {t(`hero.stats.${badge.id}.value`)}{" "}
                    {t(`hero.stats.${badge.id}.label`)}
                  </BadgeText>
                </ComplianceBadge>
              ))}
            </BadgesList>

            <HeroTitle>
              <HeroTitlePlain>{t("hero.mainTitleFirst")}</HeroTitlePlain>
              <GradientText>{t("hero.mainTitleSecond")}</GradientText>
              <HeroTitlePlain>{t("hero.mainTitleThird")}</HeroTitlePlain>
            </HeroTitle>
          </HeroText>

          <Description>{t("hero.description")}</Description>

          <GetStartedButton>{t("hero.cta.getStarted")}</GetStartedButton>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;
