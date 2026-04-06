import { Container, Typography } from "@mui/material";
import { HERO_STATS_KEYS } from "@/constants";
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
import { IconWrapper } from "@/common/IconWrapper";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("hero");

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
                {t("badge.title")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("badge.subtitle")}
              </Typography>
            </BadgeTextWrapper>
          </BadgeWrapper>

          <HeroTitle variant="h1">{t("mainTitle")}</HeroTitle>
          <Description variant="body1">{t("description")}</Description>

          <GetStartedButton variant="contained" disableElevation>
            {t("cta.getStarted")}
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
                  {t(`stats.${statKey}.value`)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t(`stats.${statKey}.label`)}
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
