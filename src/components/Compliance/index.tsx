import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";
import { COMPLIANCE_CARDS_DATA } from "@/constants";
import { Container, Typography } from "@mui/material";

import {
  ComplianceSection,
  HeaderBlock,
  CardsGrid,
  CardItem,
  Badge,
  BannerWrapper,
  BannerIconWrapper,
  BannerTextContent,
} from "./styles";

export const Compliance = () => {
  const { t } = useTranslation();

  return (
    <ComplianceSection id="compliance">
      <Container>
        <HeaderBlock>
          <Typography variant="fontSize56" sx={{ mb: 2, fontWeight: 700 }}>
            {t("compliance.title")}
          </Typography>
          <Typography
            variant="fontSize16"
            color="text.secondary"
            sx={{ fontSize: "20px" }}
          >
            {t("compliance.subtitle")}
          </Typography>
        </HeaderBlock>

        <CardsGrid>
          {COMPLIANCE_CARDS_DATA.map((card) => (
            <CardItem key={card.id}>
              <Badge badgeColor={card.color}>
                {t(`compliance.cards.${card.id}.badge`)}
              </Badge>
              <Typography
                variant="fontSize16Semibold"
                sx={{ mb: 1, flexGrow: 1 }}
              >
                {t(`compliance.cards.${card.id}.title`)}
              </Typography>
              <Typography variant="fontSize16" color="text.secondary">
                {t(`compliance.cards.${card.id}.entities`)}
              </Typography>
            </CardItem>
          ))}
        </CardsGrid>

        <BannerWrapper>
          <BannerIconWrapper>
            <Check strokeWidth={3} />
          </BannerIconWrapper>
          <BannerTextContent>
            <Typography variant="fontSize18Bold" sx={{ mb: 1 }}>
              {t("compliance.banner.title")}
            </Typography>
            <Typography variant="fontSize16" color="text.secondary">
              {t("compliance.banner.description")}
            </Typography>
          </BannerTextContent>
        </BannerWrapper>
      </Container>
    </ComplianceSection>
  );
};
