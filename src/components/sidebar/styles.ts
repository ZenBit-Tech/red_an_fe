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
