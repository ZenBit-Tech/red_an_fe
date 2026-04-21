import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import { HelpOutlineOutlined, LogoutOutlined } from "@mui/icons-material";
import { NAV_ITEMS, type NavKey } from "@/components/sidebar/constant";
import * as styles from "@/components/sidebar/styles";
import { useLogout } from "@/components/sidebar/hooks/useLogout";

interface SidebarProps {
  activeNav: NavKey;
  setActiveNav: (key: NavKey) => void;
}

const Sidebar = ({ activeNav, setActiveNav }: SidebarProps) => {
  const { t } = useTranslation();
  const { handleLogout, handleActionKeyDown } = useLogout();

  return (
    <Box sx={styles.sidebar}>
      <Box>
        <Box sx={styles.sidebarHeader}>
          <Box>
            <Typography sx={styles.topBarTitle}>
              {t("sidebar.header.title")}
            </Typography>
            <Typography sx={styles.topBarSubtitle}>
              {t("sidebar.header.subtitle")}
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.sidebarNav}>
          {NAV_ITEMS.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeNav === item.key;
            const handleNavSelect = () => setActiveNav(item.key);

            return (
              <Box
                key={item.key}
                sx={styles.navItem(isActive)}
                onClick={handleNavSelect}
                onKeyDown={(e) => handleActionKeyDown(e, handleNavSelect)}
                role="button"
                tabIndex={0}
                aria-current={isActive ? "page" : undefined}
              >
                <IconComponent sx={styles.navItemIcon(isActive)} />
                <Typography sx={styles.navItemText(isActive)}>
                  {t(item.labelKey)}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box sx={styles.sidebarBottom}>
        <Box sx={styles.navItem(false)} role="button" tabIndex={0}>
          <HelpOutlineOutlined sx={styles.navItemIcon(false, "18px")} />
          <Typography sx={styles.navItemText(false)}>
            {t("sidebar.bottom.support")}
          </Typography>
        </Box>
        <Box
          sx={styles.navItem(false)}
          onClick={handleLogout}
          onKeyDown={(e) => handleActionKeyDown(e, handleLogout)}
          role="button"
          tabIndex={0}
        >
          <LogoutOutlined sx={styles.navItemIcon(false, "18px")} />
          <Typography sx={styles.logoutButton(false)}>
            {t("sidebar.bottom.logout")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
