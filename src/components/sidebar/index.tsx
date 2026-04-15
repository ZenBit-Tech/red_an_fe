import { Box, Typography } from "@mui/material";
import { HelpOutlineOutlined, LogoutOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { NAV_ITEMS, type NavKey } from "@/components/sidebar/constant";
import * as styles from "@/components/sidebar/styles";

interface SidebarProps {
  activeNav: NavKey;
  setActiveNav: (key: NavKey) => void;
  handleLogout: () => void;
}

const Sidebar = ({ activeNav, setActiveNav, handleLogout }: SidebarProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.sidebar}>
      <Box>
        <Box sx={styles.sidebarHeader}>
          <Box>
            <Typography sx={styles.topBarTitle}>
              Clinical Data Studio
            </Typography>
            <Typography sx={styles.topBarSubtitle}>
              De-ID & Synthesis
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.sidebarNav}>
          {NAV_ITEMS.map((item) => {
            const IconComponent = item.icon;
            return (
              <Box
                key={item.key}
                sx={styles.navItem(activeNav === item.key)}
                onClick={() => setActiveNav(item.key)}
              >
                <IconComponent
                  sx={{
                    fontSize: "24px",
                    ...styles.navItemIcon(activeNav === item.key),
                  }}
                />
                <Typography sx={styles.navItemText(activeNav === item.key)}>
                  {t(item.labelKey)}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box sx={styles.sidebarBottom}>
        <Box sx={styles.navItem(false)}>
          <HelpOutlineOutlined
            sx={{ fontSize: "18px", ...styles.navItemIcon(false) }}
          />
          <Typography sx={styles.navItemText(false)}>Support</Typography>
        </Box>
        <Box sx={styles.navItem(false)} onClick={handleLogout}>
          <LogoutOutlined
            sx={{ fontSize: "18px", ...styles.navItemIcon(false) }}
          />
          <Typography sx={styles.navItemText(false)}>Logout</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
