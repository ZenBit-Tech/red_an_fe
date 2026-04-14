import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Logo } from "@/common/Logo";
import { COMPANY_LINKS, SOCIAL_LINKS } from "@/constants/index";
import {
  FooterBrand,
  FooterContainer,
  FooterDescription,
  FooterLink,
  FooterSection,
  FooterSectionTitle,
  SocialIconButton,
  SocialLinks,
} from "./styles";

const ICONS: Record<string, typeof TwitterIcon> = {
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  instagram: InstagramIcon,
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBrand>
        <Logo />
        <FooterDescription>
          Enterprise-grade clinical data anonymization and synthetic data
          generation.
        </FooterDescription>
      </FooterBrand>

      <FooterSection>
        <FooterSectionTitle>Company</FooterSectionTitle>
        {COMPANY_LINKS.map(({ label, to }) => (
          <FooterLink key={to} to={to}>
            {label}
          </FooterLink>
        ))}
      </FooterSection>

      <FooterSection>
        <FooterSectionTitle>Follow Us</FooterSectionTitle>
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
    </FooterContainer>
  );
};

export default Footer;
