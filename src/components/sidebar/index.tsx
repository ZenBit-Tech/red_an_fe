import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import {
  HelpOutlineOutlined,
  LogoutOutlined,
  Check as CheckIcon,
} from "@mui/icons-material";
import { NAV_ITEMS, type NavKey } from "@/components/sidebar/constant";
import * as styles from "@/components/sidebar/styles";
import { useLogout } from "@/components/sidebar/hooks/useLogout";
import { useAppSelector } from "@/common/hooks/hooks";

interface SidebarProps {
  activeNav: NavKey;
  setActiveNav: (key: NavKey) => void;
}
const DEIDENTIFY_SUBMENU_STEPS = [
  { stepIndex: 0, labelKey: "dashboard.deidentifySubmenu.framework" },
  { stepIndex: 1, labelKey: "dashboard.deidentifySubmenu.inputData" },
  { stepIndex: 2, labelKey: "dashboard.deidentifySubmenu.settings" },
  { stepIndex: 3, labelKey: "dashboard.deidentifySubmenu.findings" },
] as const;
const Sidebar = ({ activeNav, setActiveNav }: SidebarProps) => {
  const { t } = useTranslation();
  const { handleLogout, handleActionKeyDown } = useLogout();
  const activeDeidentifyStep = useAppSelector(
    (state) => state.deidentifyStep.activeStep,
  );
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

            const showDeidentifySubmenu = item.key === "deidentify" && isActive;

            return (
              <Box key={item.key}>
                <Box
                  sx={styles.navItem(isActive)}
                  onClick={handleNavSelect}
                  onKeyDown={(e) => handleActionKeyDown(e, handleNavSelect)}
                  role="button"
                  tabIndex={0}
                  aria-current={isActive ? "page" : undefined}
                >
                  <IconComponent sx={styles.mainNavIcon(isActive)} />
                  <Typography sx={styles.navItemText(isActive)}>
                    {t(item.labelKey)}
                  </Typography>
                </Box>
                {showDeidentifySubmenu && (
                  <Box sx={styles.deidentifySubmenu}>
                    {DEIDENTIFY_SUBMENU_STEPS.map((step, index) => {
                      const isStepActive =
                        step.stepIndex === activeDeidentifyStep;
                      const isStepCompleted =
                        step.stepIndex < activeDeidentifyStep;
                      const isLast =
                        index === DEIDENTIFY_SUBMENU_STEPS.length - 1;

                      return (
                        <Box
                          key={step.labelKey}
                          sx={styles.deidentifySubmenuItem}
                        >
                          <Box sx={styles.deidentifySubmenuIconWrap}>
                            <Box
                              sx={styles.deidentifySubmenuStepDot(
                                isStepActive,
                                isStepCompleted,
                              )}
                            >
                              {isStepCompleted && (
                                <CheckIcon
                                  sx={{ fontSize: 14, color: "#0c1224" }}
                                />
                              )}
                            </Box>
                            <Box
                              sx={styles.deidentifySubmenuConnector(!isLast)}
                            />
                          </Box>
                          <Typography
                            sx={styles.deidentifySubmenuLabel(
                              isStepActive || isStepCompleted,
                            )}
                          >
                            {t(step.labelKey)}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>
                )}
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
