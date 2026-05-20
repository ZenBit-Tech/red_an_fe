import { useTranslation } from "react-i18next";
import { useNav } from "@/common/hooks/useNav";
import * as S from "./styles";

export const Logo = () => {
  const { t } = useTranslation();
  const { handleClick } = useNav();

  return (
    <S.LogoWrapper to="/" onClick={(e) => handleClick(e, "/")}>
      <S.FullText>{t("hero.badge.title")}</S.FullText>
      <S.ShortText>CDS</S.ShortText>
    </S.LogoWrapper>
  );
};
