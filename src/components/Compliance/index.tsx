import { useTranslation } from "react-i18next";
import { Box, Container } from "@mui/material";
import { COMPLIANCE_CARDS } from "@/constants/complianceConstants";
import {
  ComplianceSection,
  ContentWrapper,
  TitleBlock,
  SectionTitle,
  TitleDivider,
  CardsGrid,
  ComplianceCard,
  CardHeader,
  CardTitle,
  CardRegion,
  CardDivider,
  CardRows,
  CardRow,
  RowLabel,
  RowValue,
  CardFooter,
  FooterIconWrapper,
  FooterText,
  CustomProfilesBanner,
  BannerTextBlock,
  BannerTitle,
  BannerDescription,
  BannerTexture,
} from "./styles";

export const Compliance = () => {
  const { t } = useTranslation();

  return (
    <ComplianceSection id="compliance">
      <Container>
        <ContentWrapper>
          <TitleBlock>
            <SectionTitle>
              {t("compliance.titlePrefix", "Built for")}{" "}
              <Box component="span" sx={{ color: "primaryColors.200" }}>
                {t("compliance.titleAccent", "Compliance")}
              </Box>
            </SectionTitle>
            <TitleDivider />
          </TitleBlock>

          <CardsGrid>
            {COMPLIANCE_CARDS.map((card) => (
              <ComplianceCard key={card.id}>
                <CardHeader>
                  <CardTitle>
                    {t(`compliance.${card.titleKey}`, card.defaultTitle)}
                  </CardTitle>
                  <CardRegion>
                    {t(`compliance.${card.regionKey}`, card.defaultRegion)}
                  </CardRegion>
                </CardHeader>

                <CardDivider />

                <CardRows>
                  {card.rows.map((row) => (
                    <CardRow key={row.id}>
                      <RowLabel>
                        {t(`compliance.${row.labelKey}`, row.defaultLabel)}
                      </RowLabel>
                      <RowValue>
                        {t(`compliance.${row.valueKey}`, row.defaultValue)}
                      </RowValue>
                    </CardRow>
                  ))}
                </CardRows>

                <CardDivider />

                <CardFooter>
                  <FooterIconWrapper>
                    <svg>
                      <use href="/compliance/icons.svg#check-circle" />
                    </svg>
                  </FooterIconWrapper>
                  <FooterText>
                    {t(`compliance.${card.footerKey}`, card.defaultFooter)}
                  </FooterText>
                </CardFooter>
              </ComplianceCard>
            ))}
          </CardsGrid>
          <CustomProfilesBanner>
            <BannerTextBlock>
              <BannerTitle>{t("compliance.banner.title")}</BannerTitle>
              <BannerDescription>
                {t("compliance.banner.description")}
              </BannerDescription>
            </BannerTextBlock>
            <BannerTexture aria-hidden />
          </CustomProfilesBanner>
        </ContentWrapper>
      </Container>
    </ComplianceSection>
  );
};
