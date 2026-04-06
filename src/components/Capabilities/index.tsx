import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  CapabilitiesSection,
  TitleSectionBlock,
  CardsList,
  CardItem,
} from "./styles";

import { CARDS_DATA } from "@/constants";
import { IconWrapper } from "@/common/IconWrapper";

export const Capabilities = () => {
  const { t } = useTranslation("capabilities");

  return (
    <CapabilitiesSection id="solution">
      <Container>
        <TitleSectionBlock>
          <Typography
            variant="h2"
            sx={{ mb: 2, fontSize: "2rem", fontWeight: 700 }}
          >
            {t("title")}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t("description")}
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
              <Typography variant="h4">{t(card.titleKey)}</Typography>
              <Typography variant="body1" color="text.secondary">
                {t(card.descKey)}
              </Typography>
            </CardItem>
          ))}
        </CardsList>
      </Container>
    </CapabilitiesSection>
  );
};
