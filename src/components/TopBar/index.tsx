import { useTranslation } from "react-i18next";
import { Box, IconButton, Typography } from "@mui/material";
import {
  AccountCircleOutlined,
  NotificationsOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import * as styles from "@/components/TopBar/styles";

interface TopBarProps {
  userEmail: string;
}

export const TopBar = ({ userEmail }: TopBarProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.topBar}>
      <Box sx={styles.topBarCenter}>
        <Typography sx={styles.topBarCenterTitle}>
          {t("appShell.topBar.title")}
        </Typography>
        <Typography sx={styles.topBarCenterSubtitle}>
          {t("appShell.topBar.subtitle")}
        </Typography>
      </Box>
      <Box sx={styles.topBarActions}>
        <IconButton sx={styles.iconButton}>
          <NotificationsOutlined />
        </IconButton>
        <IconButton sx={styles.iconButton}>
          <SettingsOutlined />
        </IconButton>
        <Typography sx={styles.avatarEmail}>{userEmail}</Typography>
        <Box sx={styles.avatarButton}>
          <AccountCircleOutlined sx={styles.circleOutline} />
        </Box>
      </Box>
    </Box>
  );
};

export default TopBar;
