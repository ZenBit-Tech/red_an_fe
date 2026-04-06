import { Container, Typography } from "@mui/material";

import {
  FOOTER_COMPANY_LINKS,
  FOOTER_PRODUCT_LINKS,
  FOOTER_RESOURCES_LINKS,
  FOOTER_SOCIAL_LINKS,
} from "@/constants";

import {
  Footer,
  DescriptionText,
  SocialWrapper,
  SocialIcon,
  FooterHeader,
  ColumnsWrapper,
  ColumnList,
  ColumnTitle,
  ExternalLink,
  ApiButton,
  InternalLink,
  FooterTop,
} from "./styles";
import { useTranslation } from "react-i18next";
import { Logo } from "@/common/Logo";

export const FooterSection = () => {
  const { t } = useTranslation("footer");
  return (
    <Footer>
      <Container>
        <FooterTop>
          <FooterHeader>
            <Logo />
            <DescriptionText variant="body1" color="text.secondary">
              {t("description")}
            </DescriptionText>
            <SocialWrapper>
              {FOOTER_SOCIAL_LINKS.map((social) => (
                <SocialIcon
                  key={social.id}
                  href={`https://${social.id}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.id}
                >
                  <svg>
                    <use href={`/social/icons.svg${social.iconId}`} />
                  </svg>
                </SocialIcon>
              ))}
            </SocialWrapper>
          </FooterHeader>
          <ColumnsWrapper>
            <ColumnList>
              <ColumnTitle variant="h6">{t("columns.product")}</ColumnTitle>
              {FOOTER_PRODUCT_LINKS.map((link) => (
                <ApiButton key={link.id} onClick={() => null}>
                  {t(`links.${link.key}`)}
                </ApiButton>
              ))}
            </ColumnList>
            <ColumnList>
              <ColumnTitle variant="h6">{t("columns.resources")}</ColumnTitle>
              {FOOTER_RESOURCES_LINKS.map((link) => (
                <ExternalLink
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(`links.${link.key}`)}
                </ExternalLink>
              ))}
            </ColumnList>
            <ColumnList>
              <ColumnTitle variant="h6">{t("columns.company")}</ColumnTitle>
              {FOOTER_COMPANY_LINKS.map((link) => (
                <InternalLink key={link.id} to={link.path}>
                  {t(`links.${link.key}`)}
                </InternalLink>
              ))}
            </ColumnList>
          </ColumnsWrapper>
        </FooterTop>

        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Clinical Data Studio. All rights
          reserved.
        </Typography>
      </Container>
    </Footer>
  );
};
