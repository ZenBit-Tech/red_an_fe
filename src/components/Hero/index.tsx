import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { Container, Typography } from "@mui/material";
import { HERO_STATS_KEYS } from "@/constants";
import { IconWrapper } from "@/common/IconWrapper";
import {
  BadgeTextWrapper,
  BadgeWrapper,
  BoxArrowUpRight,
  Description,
  GetStartedButton,
  HeroContent,
  HeroSection,
  HeroTitle,
  StatItem,
  StatsList,
} from "./styles";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <BadgeWrapper>
            <IconWrapper>
              <svg>
                <use href={`/capabilities/icons.svg#pii`} />
              </svg>
            </IconWrapper>
            <BadgeTextWrapper>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {t("hero.badge.title")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("hero.badge.subtitle")}
              </Typography>
            </BadgeTextWrapper>
          </BadgeWrapper>

          <HeroTitle variant="h1">{t("hero.mainTitle")}</HeroTitle>
          <Description variant="body1">{t("hero.description")}</Description>

          <GetStartedButton variant="contained" disableElevation>
            {t("hero.cta.getStarted")}
            <BoxArrowUpRight>
              <ArrowUpRight />
            </BoxArrowUpRight>
          </GetStartedButton>

          <StatsList>
            {HERO_STATS_KEYS.map((statKey) => (
              <StatItem key={statKey}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 500, fontSize: "32px" }}
                >
                  {t(`hero.stats.${statKey}.value`)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t(`hero.stats.${statKey}.label`)}
                </Typography>
              </StatItem>
            ))}
          </StatsList>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;
