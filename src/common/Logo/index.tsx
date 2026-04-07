import { useTranslation } from "react-i18next";
import { IconWrapper } from "@/common/IconWrapper";
import { LogoWrapper, LogoText } from "./styles";

export const Logo = () => {
  const { t } = useTranslation();

  return (
    <LogoWrapper to="/">
      <IconWrapper>
        <svg>
          <use href="/capabilities/icons.svg#pii" />
        </svg>
      </IconWrapper>
      <LogoText>{t("hero.badge.title")}</LogoText>
    </LogoWrapper>
  );
};
