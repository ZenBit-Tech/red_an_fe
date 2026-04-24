import { useTranslation } from "react-i18next";
import {
  AccountCircleOutlined,
  NotificationsOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

import type { TopBarProps } from "./constants";
import {
  AvatarButton,
  AvatarEmail,
  StyledIconButton,
  TopBarActions,
  TopBarCenter,
  TopBarCenterSubtitle,
  TopBarCenterTitle,
  TopBarContainer,
} from "@/components/TopBar/styles";

export const TopBar = ({ userEmail }: TopBarProps) => {
  const { t } = useTranslation();

  return (
    <TopBarContainer>
      <TopBarCenter>
        <TopBarCenterTitle>{t("appShell.topBar.title")}</TopBarCenterTitle>
        <TopBarCenterSubtitle>
          {t("appShell.topBar.subtitle")}
        </TopBarCenterSubtitle>
      </TopBarCenter>
      <TopBarActions>
        <StyledIconButton>
          <NotificationsOutlined />
        </StyledIconButton>
        <StyledIconButton>
          <SettingsOutlined />
        </StyledIconButton>
        <AvatarEmail>{userEmail}</AvatarEmail>
        <AvatarButton>
          <AccountCircleOutlined />
        </AvatarButton>
      </TopBarActions>
    </TopBarContainer>
  );
};

export default TopBar;
