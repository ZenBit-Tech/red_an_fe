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
    <ReadyToProtectSection id="solution">
      <Container>
        <ContentWrapper>
          <Title>{t("readyToProtect.title")}</Title>

          <Description>{t("readyToProtect.description")}</Description>

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
