import { useTranslation } from "react-i18next";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { COMPANY_LINKS, SOCIAL_LINKS } from "@/constants/index";
import {
  FooterBrand,
  FooterContainer,
  FooterDescription,
  FooterLink,
  FooterSection,
  FooterSectionTitle,
  FooterWrapper,
  SocialIconButton,
  SocialLinks,
  FooterLogo,
  FooterSections,
} from "./styles";

const ICONS: Record<string, typeof TwitterIcon> = {
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  instagram: InstagramIcon,
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterBrand>
          <FooterLogo to="/">{t("hero.badge.title")}</FooterLogo>
          <FooterDescription>{t("footer.description")}</FooterDescription>
        </FooterBrand>
        <FooterSections>
          <FooterSection>
            <FooterSectionTitle>
              {t("footer.columns.company")}
            </FooterSectionTitle>
            {COMPANY_LINKS.map(({ label, to }) => (
              <FooterLink key={to} to={to}>
                {label}
              </FooterLink>
            ))}
          </FooterSection>
          <FooterSection>
            <FooterSectionTitle>
              {t("footer.columns.social")}
            </FooterSectionTitle>
            <SocialLinks>
              {SOCIAL_LINKS.map(({ id, href, label }) => {
                const Icon = ICONS[id];
                return (
                  <SocialIconButton
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon />
                  </SocialIconButton>
                );
              })}
            </SocialLinks>
          </FooterSection>
        </FooterSections>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
