import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Check as CheckIcon,
  HelpOutlineOutlined,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  LogoutOutlined,
} from "@mui/icons-material";
import { useMediaQuery, useTheme } from "@mui/material";

import { useAppSelector } from "@/common/hooks/hooks";
import {
  DEIDENTIFY_SUBMENU_STEPS,
  NAV_ITEMS,
  type SidebarProps,
} from "@/components/Sidebar/constant";
import { useLogout } from "@/components/Sidebar/hooks/useLogout";
import * as S from "@/components/Sidebar/styles";

const Sidebar = ({ activeNav, setActiveNav, onSupportClick }: SidebarProps) => {
  const { t } = useTranslation();
  const { handleLogout, handleActionKeyDown } = useLogout();
  const activeDeidentifyStep = useAppSelector(
    (state) => state.deidentifyStep.activeStep,
  );

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const [isCollapsed, setIsCollapsed] = useState(true);
  const effectiveCollapsed = isTablet && isCollapsed;

  return (
    <S.SidebarContainer isCollapsed={effectiveCollapsed}>
      <div>
        <S.SidebarHeader isCollapsed={effectiveCollapsed}>
          {!effectiveCollapsed && (
            <div>
              <S.TopBarTitle>{t("sidebar.header.title")}</S.TopBarTitle>
              <S.TopBarSubtitle>
                {t("sidebar.header.subtitle")}
              </S.TopBarSubtitle>
            </div>
          )}
          {isTablet && (
            <S.CollapseToggleButton onClick={() => setIsCollapsed((v) => !v)}>
              {effectiveCollapsed ? (
                <KeyboardDoubleArrowRight />
              ) : (
                <KeyboardDoubleArrowLeft />
              )}
            </S.CollapseToggleButton>
          )}
        </S.SidebarHeader>
        <S.SidebarNav>
          {NAV_ITEMS.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeNav === item.key;
            const handleNavSelect = () => setActiveNav(item.key);
            const showDeidentifySubmenu = item.key === "deidentify" && isActive;

            return (
              <div key={item.key}>
                <S.NavItem
                  active={isActive}
                  isCollapsed={effectiveCollapsed}
                  onClick={handleNavSelect}
                  onKeyDown={(e) => handleActionKeyDown(e, handleNavSelect)}
                  role="button"
                  tabIndex={0}
                  aria-current={isActive ? "page" : undefined}
                >
                  <S.NavIconWrapper active={isActive}>
                    <IconComponent />
                  </S.NavIconWrapper>
                  {!effectiveCollapsed && (
                    <S.NavItemText active={isActive}>
                      {t(item.labelKey)}
                    </S.NavItemText>
                  )}
                </S.NavItem>
                {showDeidentifySubmenu && (
                  <S.DeidentifySubmenu isCollapsed={effectiveCollapsed}>
                    {DEIDENTIFY_SUBMENU_STEPS.map((step, index) => {
                      const isStepActive =
                        step.stepIndex === activeDeidentifyStep;
                      const isStepCompleted =
                        step.stepIndex < activeDeidentifyStep;
                      const isLast =
                        index === DEIDENTIFY_SUBMENU_STEPS.length - 1;

                      return (
                        <S.DeidentifySubmenuItem key={step.labelKey}>
                          <S.DeidentifySubmenuIconWrap>
                            <S.DeidentifySubmenuStepDot
                              active={isStepActive}
                              completed={isStepCompleted}
                            >
                              {isStepCompleted && <CheckIcon />}
                            </S.DeidentifySubmenuStepDot>
                            <S.DeidentifySubmenuConnector visible={!isLast} />
                          </S.DeidentifySubmenuIconWrap>
                          {!effectiveCollapsed && (
                            <S.DeidentifySubmenuLabel
                              active={isStepActive || isStepCompleted}
                            >
                              {t(step.labelKey)}
                            </S.DeidentifySubmenuLabel>
                          )}
                        </S.DeidentifySubmenuItem>
                      );
                    })}
                  </S.DeidentifySubmenu>
                )}
              </div>
            );
          })}
        </S.SidebarNav>
      </div>
      <S.SidebarBottom>
        <S.NavItem
          active={false}
          isCollapsed={effectiveCollapsed}
          onClick={onSupportClick}
          onKeyDown={(e) => handleActionKeyDown(e, onSupportClick)}
          role="button"
          tabIndex={0}
        >
          <S.NavIconWrapper active={false} small>
            <HelpOutlineOutlined />
          </S.NavIconWrapper>
          {!effectiveCollapsed && (
            <S.NavItemText active={false}>
              {t("sidebar.bottom.support")}
            </S.NavItemText>
          )}
        </S.NavItem>
        <S.NavItem
          active={false}
          isCollapsed={effectiveCollapsed}
          onClick={handleLogout}
          onKeyDown={(e) => handleActionKeyDown(e, handleLogout)}
          role="button"
          tabIndex={0}
        >
          <S.LogoutIconWrapper>
            <LogoutOutlined />
          </S.LogoutIconWrapper>
          {!effectiveCollapsed && (
            <S.LogoutButtonText>
              {t("sidebar.bottom.logout")}
            </S.LogoutButtonText>
          )}
        </S.NavItem>
      </S.SidebarBottom>
    </S.SidebarContainer>
  );
};

export default Sidebar;
