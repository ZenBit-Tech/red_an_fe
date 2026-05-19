import { useTranslation } from "react-i18next";
import { AccountCircleOutlined } from "@mui/icons-material";
import type { TopBarProps } from "./constants";
import * as S from "@/components/TopBar/styles";

export const TopBar = ({ userEmail }: TopBarProps) => {
  const { t } = useTranslation();

  return (
    <S.TopBarContainer>
      <S.TopBarCenter>
        <S.TopBarCenterTitle>{t("appShell.topBar.title")}</S.TopBarCenterTitle>
        <S.TopBarCenterSubtitle>
          {t("appShell.topBar.subtitle")}
        </S.TopBarCenterSubtitle>
      </S.TopBarCenter>
      <S.TopBarActions>
        <S.AvatarEmail>{userEmail}</S.AvatarEmail>
        <S.AvatarButton>
          <AccountCircleOutlined />
        </S.AvatarButton>
      </S.TopBarActions>
    </S.TopBarContainer>
  );
};

export default TopBar;
