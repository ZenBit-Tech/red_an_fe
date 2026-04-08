import { useTranslation } from "react-i18next";
import { Logo } from "@/common/Logo";
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

export const FooterSection = () => {
  const { t } = useTranslation();
  return (
    <Footer>
      <Container>
        <FooterTop>
          <FooterHeader>
            <Logo />
            <DescriptionText variant="fontSize16" color="text.secondary">
              {t("footer.description")}
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
              <ColumnTitle variant="fontSize14Bold">
                {t("footer.columns.product")}
              </ColumnTitle>
              {FOOTER_PRODUCT_LINKS.map((link) => (
                <ApiButton key={link.id} onClick={() => null}>
                  {t(`footer.links.${link.key}`)}
                </ApiButton>
              ))}
            </ColumnList>
            <ColumnList>
              <ColumnTitle variant="fontSize14Bold">
                {t("footer.columns.resources")}
              </ColumnTitle>
              {FOOTER_RESOURCES_LINKS.map((link) => (
                <ExternalLink
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(`footer.links.${link.key}`)}
                </ExternalLink>
              ))}
            </ColumnList>
            <ColumnList>
              <ColumnTitle variant="fontSize14Bold">
                {t("footer.columns.company")}
              </ColumnTitle>
              {FOOTER_COMPANY_LINKS.map((link) => (
                <InternalLink key={link.id} to={link.path}>
                  {t(`footer.links.${link.key}`)}
                </InternalLink>
              ))}
            </ColumnList>
          </ColumnsWrapper>
        </FooterTop>

        <Typography variant="fontSize16" color="text.secondary" align="center">
          © {new Date().getFullYear()} Clinical Data Studio. All rights
          reserved.
        </Typography>
      </Container>
    </Footer>
  );
};
