import { useTranslation } from "react-i18next";
import {
  Check as CheckIcon,
  HelpOutlineOutlined,
  LogoutOutlined,
} from "@mui/icons-material";

import { useAppSelector } from "@/common/hooks/hooks";
import {
  DEIDENTIFY_SUBMENU_STEPS,
  NAV_ITEMS,
  type SidebarProps,
} from "@/components/sidebar/constant";
import { useLogout } from "@/components/sidebar/hooks/useLogout";
import {
  DeidentifySubmenu,
  DeidentifySubmenuConnector,
  DeidentifySubmenuIconWrap,
  DeidentifySubmenuItem,
  DeidentifySubmenuLabel,
  DeidentifySubmenuStepDot,
  LogoutButtonText,
  NavIconWrapper,
  NavItem,
  NavItemText,
  SidebarBottom,
  SidebarContainer,
  SidebarHeader,
  SidebarNav,
  TopBarSubtitle,
  TopBarTitle,
} from "@/components/sidebar/styles";

const Sidebar = ({ activeNav, setActiveNav }: SidebarProps) => {
  const { t } = useTranslation();
  const { handleLogout, handleActionKeyDown } = useLogout();
  const activeDeidentifyStep = useAppSelector(
    (state) => state.deidentifyStep.activeStep,
  );

  return (
    <SidebarContainer>
      <div>
        <SidebarHeader>
          <div>
            <TopBarTitle>{t("sidebar.header.title")}</TopBarTitle>
            <TopBarSubtitle>{t("sidebar.header.subtitle")}</TopBarSubtitle>
          </div>
        </SidebarHeader>
        <SidebarNav>
          {NAV_ITEMS.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeNav === item.key;
            const handleNavSelect = () => setActiveNav(item.key);
            const showDeidentifySubmenu = item.key === "deidentify" && isActive;

            return (
              <div key={item.key}>
                <NavItem
                  active={isActive}
                  onClick={handleNavSelect}
                  onKeyDown={(e) => handleActionKeyDown(e, handleNavSelect)}
                  role="button"
                  tabIndex={0}
                  aria-current={isActive ? "page" : undefined}
                >
                  <NavIconWrapper active={isActive}>
                    <IconComponent />
                  </NavIconWrapper>
                  <NavItemText active={isActive}>
                    {t(item.labelKey)}
                  </NavItemText>
                </NavItem>
                {showDeidentifySubmenu && (
                  <DeidentifySubmenu>
                    {DEIDENTIFY_SUBMENU_STEPS.map((step, index) => {
                      const isStepActive =
                        step.stepIndex === activeDeidentifyStep;
                      const isStepCompleted =
                        step.stepIndex < activeDeidentifyStep;
                      const isLast =
                        index === DEIDENTIFY_SUBMENU_STEPS.length - 1;

                      return (
                        <DeidentifySubmenuItem key={step.labelKey}>
                          <DeidentifySubmenuIconWrap>
                            <DeidentifySubmenuStepDot
                              active={isStepActive}
                              completed={isStepCompleted}
                            >
                              {isStepCompleted && <CheckIcon />}
                            </DeidentifySubmenuStepDot>
                            <DeidentifySubmenuConnector visible={!isLast} />
                          </DeidentifySubmenuIconWrap>
                          <DeidentifySubmenuLabel
                            active={isStepActive || isStepCompleted}
                          >
                            {t(step.labelKey)}
                          </DeidentifySubmenuLabel>
                        </DeidentifySubmenuItem>
                      );
                    })}
                  </DeidentifySubmenu>
                )}
              </div>
            );
          })}
        </SidebarNav>
      </div>
      <SidebarBottom>
        <NavItem active={false} role="button" tabIndex={0}>
          <NavIconWrapper active={false} small>
            <HelpOutlineOutlined />
          </NavIconWrapper>
          <NavItemText active={false}>
            {t("sidebar.bottom.support")}
          </NavItemText>
        </NavItem>
        <NavItem
          active={false}
          onClick={handleLogout}
          onKeyDown={(e) => handleActionKeyDown(e, handleLogout)}
          role="button"
          tabIndex={0}
        >
          <NavIconWrapper active={false} small>
            <LogoutOutlined />
          </NavIconWrapper>
          <LogoutButtonText>{t("sidebar.bottom.logout")}</LogoutButtonText>
        </NavItem>
      </SidebarBottom>
    </SidebarContainer>
  );
};

export default Sidebar;
