import { useTranslation } from "react-i18next";
import { LogoWrapper } from "./styles";

export const Logo = () => {
  const { t } = useTranslation();

  return <LogoWrapper to="/">{t("hero.badge.title")}</LogoWrapper>;
};
