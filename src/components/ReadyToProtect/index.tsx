import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";
import {
  ReadyToProtectSection,
  ContentWrapper,
  Title,
  Description,
  ButtonsGroup,
  PrimaryButton,
  SecondaryButton,
} from "./styles";

export const ReadyToProtect = () => {
  const { t } = useTranslation();

  return (
    <ReadyToProtectSection id="ready-to-protect">
      <Container>
        <ContentWrapper>
          <Title>
            {t("readyToProtect.title", "Ready to Protect Your Clinical Data?")}
          </Title>

          <Description>
            {t(
              "readyToProtect.description",
              "Start de-identifying and synthesizing healthcare data in minutes with our enterprise-grade platform. Join leading medical institutions.",
            )}
          </Description>

          <ButtonsGroup>
            <PrimaryButton>
              {t("readyToProtect.primaryCta", "Start Free Trial")}
            </PrimaryButton>

            <SecondaryButton>
              {t("readyToProtect.secondaryCta", "Contact Us")}
            </SecondaryButton>
          </ButtonsGroup>
        </ContentWrapper>
      </Container>
    </ReadyToProtectSection>
  );
};
