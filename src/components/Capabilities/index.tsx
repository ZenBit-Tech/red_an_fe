import { useTranslation } from "react-i18next";
import { Box, Container } from "@mui/material";
import { CARDS_DATA, FEATURES } from "@/constants";
import {
  CapabilitiesSection,
  ContentWrapper,
  LeftContent,
  LeftTextBlock,
  Title,
  Description,
  FeaturesList,
  FeatureItemBox,
  RightGrid,
  GridCard,
  IconWrapper,
  FeatureTextWrapper,
  FeatureTitle,
  CardTitle,
  DescriptionMain,
} from "./styles";

export const Capabilities = () => {
  const { t } = useTranslation();

  return (
    <CapabilitiesSection id="solution">
      <Container>
        <ContentWrapper>
          {/* Left Column */}
          <LeftContent>
            <LeftTextBlock>
              <Title>
                Protect Privacy Without Compromising{" "}
                <Box component="span" sx={{ color: "primaryColors.200" }}>
                  Value.
                </Box>
              </Title>

              <DescriptionMain>
                Our platform uses advanced NLP models specifically trained on
                clinical corpora to detect 100+ types of PHI and PII across
                unstructured medical notes and structured records.
              </DescriptionMain>
            </LeftTextBlock>

            <FeaturesList>
              {FEATURES.map((feature) => (
                <FeatureItemBox key={feature.id}>
                  <IconWrapper>
                    <svg>
                      <use href={`/capabilities/icons.svg${feature.iconId}`} />
                    </svg>
                  </IconWrapper>
                  <FeatureTextWrapper>
                    <FeatureTitle>
                      {t(
                        `capabilities.${feature.titleKey}`,
                        feature.defaultTitle,
                      )}
                    </FeatureTitle>
                    <Description>
                      {t(
                        `capabilities.${feature.descKey}`,
                        feature.defaultDesc,
                      )}
                    </Description>
                  </FeatureTextWrapper>
                </FeatureItemBox>
              ))}
            </FeaturesList>
          </LeftContent>

          {/* Right Column */}
          <RightGrid>
            {CARDS_DATA.map((card) => (
              <GridCard key={card.id}>
                <IconWrapper>
                  <svg>
                    <use href={`/capabilities/icons.svg${card.iconId}`} />
                  </svg>
                </IconWrapper>
                <CardTitle>
                  {t(`capabilities.${card.titleKey}`, card.defaultTitle)}
                </CardTitle>
                <Description>
                  {t(`capabilities.${card.descKey}`, card.defaultDesc)}
                </Description>
              </GridCard>
            ))}
          </RightGrid>
        </ContentWrapper>
      </Container>
    </CapabilitiesSection>
  );
};
