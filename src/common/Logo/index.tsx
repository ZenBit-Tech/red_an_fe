import { useTranslation } from "react-i18next";
import { useNav } from "@/common/hooks/useNav";
import { LogoWrapper } from "./styles";

export const Logo = () => {
  const { t } = useTranslation();
  const { handleClick } = useNav();

  return (
    <LogoWrapper to="/" onClick={(e) => handleClick(e, "/")}>
      {t("hero.badge.title")}
    </LogoWrapper>
  );
};
