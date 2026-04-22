import { theme } from "@/common/theme/theme";

export const sidebar = {
  boxSizing: "border-box",
  width: theme.spacing(77.5),
  height: theme.spacing(232),
  padding: theme.spacing(6),
  paddingLeft: theme.spacing(10),
  flexShrink: 0,
  bgcolor: "#060e20",
  borderRight: `1px solid ${theme.palette.strokeColors[150]}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const sidebarHeader = {
  pb: theme.spacing(6),
  mb: theme.spacing(6),
  borderBottom: `1px solid ${theme.palette.strokeColors[150]}`,
};

export const topBarTitle = {
  color: theme.palette.primaryColors[50],
  fontSize: theme.typography.fontSize18,
  fontFamily: theme.typography.fontFamily,
};

export const topBarSubtitle = {
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize12,
  fontFamily: theme.typography.fontFamily,
  opacity: 0.6,
};

export const sidebarNav = {
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
};

export const navItem = (active: boolean) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
  padding: theme.spacing(3, 4),
  borderRadius: "10px",
  cursor: "pointer",
  bgcolor: active ? theme.palette.primaryColors[700] : "transparent",
  "&:hover": {
    bgcolor: active
      ? theme.palette.primaryColors[700]
      : theme.palette.strokeColors[120],
  },
});

export const navItemIcon = (isActive: boolean, fontSize?: number | string) => ({
  fontSize: fontSize || theme.typography.fontSize24,
  color: isActive
    ? theme.palette.primaryColors[200]
    : theme.palette.neutralColors[300],
});

export const navItemText = (active: boolean) => ({
  color: active ? theme.palette.textColors[400] : theme.palette.textColors[200],
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight500,
  fontSize: theme.typography.fontSize16,
  lineHeight: "150%",
});

export const sidebarBottom = {
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
};
export const logoutButton = (active: boolean) => ({
  ...navItemText(active),
  color: theme.palette.textColors[400],
});
export const deidentifySubmenu = {
  display: "flex",
  flexDirection: "column",
  marginTop: "8px",
  marginLeft: "16px",
  paddingLeft: "0px",
};

export const deidentifySubmenuItem = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  position: "relative",
  paddingBlock: "10px",
};

export const deidentifySubmenuIconWrap = {
  position: "relative",
  width: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

export const deidentifySubmenuConnector = (isVisible: boolean) => ({
  position: "absolute",
  left: "50%",
  top: "calc(50% + 12px)",
  transform: "translateX(-50%)",
  width: "2px",
  height: "32px",
  backgroundColor: "rgba(67, 70, 82, 0.6)",
  display: isVisible ? "block" : "none",
});

export const deidentifySubmenuStepDot = (
  isActive: boolean,
  isCompleted: boolean,
) => ({
  width: "22px",
  height: "22px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  backgroundColor: isCompleted ? "#b0c6ff" : "#0c1224",
  border: isCompleted
    ? "2px solid #b0c6ff"
    : isActive
      ? "2px solid #b0c6ff"
      : "2px solid rgba(67, 70, 82, 0.7)",
  transition: "background-color 200ms ease, border-color 200ms ease",
  color: "#0c1224",
  "&::after": {
    content: '""',
    width: isActive && !isCompleted ? "8px" : "0px",
    height: isActive && !isCompleted ? "8px" : "0px",
    borderRadius: "50%",
    backgroundColor: "#b0c6ff",
    transition: "width 200ms ease, height 200ms ease",
  },
});

export const deidentifySubmenuLabel = (isActive: boolean) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: isActive ? 700 : 500,
  fontSize: "14px",
  lineHeight: "20px",
  color: isActive ? "#b0c6ff" : "rgba(195, 198, 212, 0.6)",
  transition: "color 200ms ease",
});
export const mainNavIcon = (isActive: boolean) => ({
  ...navItemIcon(isActive),
  fontSize: "24px",
});
