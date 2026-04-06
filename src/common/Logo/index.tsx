import { IconWrapper } from "@/common/IconWrapper";
import { LogoWrapper, LogoText } from "./styles";
import { useTranslation } from "react-i18next";

export const Logo = () => {
  const { t } = useTranslation("hero");

  return (
    <LogoWrapper to="/">
      <IconWrapper>
        <svg>
          <use href="/capabilities/icons.svg#pii" />
        </svg>
      </IconWrapper>
      <LogoText>{t("badge.title")}</LogoText>
    </LogoWrapper>
  );
};
