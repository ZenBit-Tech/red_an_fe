import { Trans, useTranslation } from "react-i18next";
import { Container } from "@mui/material";
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
} from "./styles";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <HeroText>
            <BadgesList>
              <ComplianceBadge>
                <BadgeIconWrapper>
                  <svg>
                    <use href="/hero/icons.svg#hippa-compliant" />
                  </svg>
                </BadgeIconWrapper>
                <BadgeText>
                  {t("hero.stats.hipaa.value")} {t("hero.stats.hipaa.label")}
                </BadgeText>
              </ComplianceBadge>
              <ComplianceBadge>
                <BadgeIconWrapper>
                  <svg>
                    <use href="/hero/icons.svg#gdpr-certified" />
                  </svg>
                </BadgeIconWrapper>
                <BadgeText>
                  {t("hero.stats.gdpr.value")} {t("hero.stats.gdpr.label")}
                </BadgeText>
              </ComplianceBadge>
              <ComplianceBadge>
                <BadgeIconWrapper>
                  <svg>
                    <use href="/hero/icons.svg#accuracy" />
                  </svg>
                </BadgeIconWrapper>
                <BadgeText>
                  {t("hero.stats.accuracy.value")}{" "}
                  {t("hero.stats.accuracy.label")}
                </BadgeText>
              </ComplianceBadge>
            </BadgesList>

            <HeroTitle>
              <Trans
                i18nKey="hero.mainTitle"
                components={{
                  br: <br />,
                  gradient: <GradientText />,
                }}
              />
            </HeroTitle>

            <Description>{t("hero.description")}</Description>

            <GetStartedButton>{t("hero.cta.getStarted")}</GetStartedButton>
          </HeroText>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;
