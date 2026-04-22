import { alpha } from "@mui/material/styles";
import { theme } from "@/common/theme/theme";

export const sidebar = {
  boxSizing: "border-box",
  width: theme.spacing(77.5),
  height: theme.spacing(232),
  padding: theme.spacing(6),
  paddingLeft: theme.spacing(10),
  flexShrink: 0,
  bgcolor: theme.palette.secondaryColors[900],
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
  borderRadius: theme.spacing(2.5),
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
  lineHeight: 1.5,
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
  mt: theme.spacing(2),
  ml: theme.spacing(4),
  pl: 0,
};

export const deidentifySubmenuItem = {
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
  position: "relative",
  py: theme.spacing(2.5),
};

export const deidentifySubmenuIconWrap = {
  position: "relative",
  width: theme.spacing(6),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

export const deidentifySubmenuConnector = (isVisible: boolean) => ({
  position: "absolute",
  left: "50%",
  top: `calc(50% + ${theme.spacing(3)})`,
  transform: "translateX(-50%)",
  width: "2px",
  height: theme.spacing(8),
  backgroundColor: alpha(theme.palette.strokeColors[400], 0.6),
  display: isVisible ? "block" : "none",
});

export const deidentifySubmenuStepDot = (
  isActive: boolean,
  isCompleted: boolean,
) => ({
  width: theme.spacing(5.5),
  height: theme.spacing(5.5),
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  backgroundColor: isCompleted
    ? theme.palette.primaryColors[700]
    : theme.palette.secondaryColors[900],
  border: isCompleted
    ? `2px solid ${theme.palette.primaryColors[700]}`
    : isActive
      ? `2px solid ${theme.palette.primaryColors[200]}`
      : `2px solid ${alpha(theme.palette.strokeColors[400], 0.7)}`,
  transition: "background-color 200ms ease, border-color 200ms ease",
  color: theme.palette.primaryColors[50],
  "&::after": {
    content: '""',
    width: isActive && !isCompleted ? theme.spacing(2) : 0,
    height: isActive && !isCompleted ? theme.spacing(2) : 0,
    borderRadius: "50%",
    backgroundColor: theme.palette.primaryColors[200],
    transition: "width 200ms ease, height 200ms ease",
  },
});

export const deidentifySubmenuLabel = (isActive: boolean) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: isActive
    ? theme.typography.fontWeight700
    : theme.typography.fontWeight500,
  fontSize: theme.typography.fontSize14,
  lineHeight: 1.4,
  color: isActive
    ? theme.palette.primaryColors[200]
    : alpha(theme.palette.textColors[200], 0.6),
  transition: "color 200ms ease",
});

export const mainNavIcon = (isActive: boolean) => ({
  ...navItemIcon(isActive),
  fontSize: theme.typography.fontSize24,
});
export const CheckIcon = {
  fontSize: theme.typography.fontSize14,
  color: theme.palette.primaryColors[50],
};
