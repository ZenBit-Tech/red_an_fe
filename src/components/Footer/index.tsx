import { useTranslation } from "react-i18next";
import { ICONS } from "@/constants/index";
import { COMPANY_LINKS, SOCIAL_LINKS } from "@/constants/index";
import { useNav } from "@/common/hooks/useNav";
import * as S from "./styles";

const Footer = () => {
  const { t } = useTranslation();
  const { handleClick } = useNav();
  const handleLogoClick = (e: React.MouseEvent) => {
    handleClick(e, "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.FooterBrand>
          <S.FooterLogo to="/" onClick={handleLogoClick}>
            {t("hero.badge.title")}
          </S.FooterLogo>
          <S.FooterDescription>{t("footer.description")}</S.FooterDescription>
        </S.FooterBrand>
        <S.FooterSections>
          <S.FooterSection>
            <S.FooterSectionTitle>
              {t("footer.columns.company")}
            </S.FooterSectionTitle>
            {COMPANY_LINKS.map(({ label, to }) => (
              <S.FooterLink
                key={to}
                to={to}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {label}
              </S.FooterLink>
            ))}
          </S.FooterSection>
          <S.FooterSection>
            <S.FooterSectionTitle>
              {t("footer.columns.social")}
            </S.FooterSectionTitle>
            <S.SocialLinks>
              {SOCIAL_LINKS.map(({ id, href, label }) => {
                const Icon = ICONS[id];
                return (
                  <S.SocialIconButton
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon />
                  </S.SocialIconButton>
                );
              })}
            </S.SocialLinks>
          </S.FooterSection>
        </S.FooterSections>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
