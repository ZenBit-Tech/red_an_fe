import { useTranslation } from "react-i18next";
import { Container, Typography } from "@mui/material";
import { CARDS_DATA } from "@/constants";
import { IconWrapper } from "@/common/IconWrapper";
import {
  CapabilitiesSection,
  TitleSectionBlock,
  CardsList,
  CardItem,
} from "./styles";

export const Capabilities = () => {
  const { t } = useTranslation();

  return (
    <CapabilitiesSection id="solution">
      <Container>
        <TitleSectionBlock>
          <Typography
            variant="fontSize56"
            sx={{ mb: 2, fontSize: "2rem", fontWeight: 700 }}
          >
            {t("capabilities.title")}
          </Typography>
          <Typography variant="fontSize16" color="text.secondary">
            {t("capabilities.description")}
          </Typography>
        </TitleSectionBlock>

        <CardsList>
          {CARDS_DATA.map((card) => (
            <CardItem key={card.id}>
              <IconWrapper iconColor={card.color}>
                <svg>
                  <use href={`/capabilities/icons.svg${card.iconId}`} />
                </svg>
              </IconWrapper>
              <Typography variant="fontSize18Bold" sx={{ fontWeight: 500 }}>
                {t(`capabilities.${card.titleKey}`)}
              </Typography>
              <Typography variant="fontSize16" color="text.secondary">
                {t(`capabilities.${card.descKey}`)}
              </Typography>
            </CardItem>
          ))}
        </CardsList>
      </Container>
    </CapabilitiesSection>
  );
};
