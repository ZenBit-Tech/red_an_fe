import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";
import { COMPLIANCE_CARDS_DATA } from "@/constants";
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
  const { t } = useTranslation("compliance");

  return (
    <ComplianceSection id="compliance">
      <Container>
        <HeaderBlock>
          <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
            {t("title")}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: "20px" }}
          >
            {t("subtitle")}
          </Typography>
        </HeaderBlock>

        <CardsGrid>
          {COMPLIANCE_CARDS_DATA.map((card) => (
            <CardItem key={card.id}>
              <Badge badgeColor={card.color}>
                {t(`cards.${card.id}.badge`)}
              </Badge>
              <Typography variant="h5" sx={{ mb: 1, flexGrow: 1 }}>
                {t(`cards.${card.id}.title`)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t(`cards.${card.id}.entities`)}
              </Typography>
            </CardItem>
          ))}
        </CardsGrid>

        <BannerWrapper>
          <BannerIconWrapper>
            <Check strokeWidth={3} />
          </BannerIconWrapper>
          <BannerTextContent>
            <Typography variant="h4" sx={{ mb: 1 }}>
              {t("banner.title")}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t("banner.description")}
            </Typography>
          </BannerTextContent>
        </BannerWrapper>
      </Container>
    </ComplianceSection>
  );
};
