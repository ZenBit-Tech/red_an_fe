import { Box, IconButton, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

export const SidebarContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isCollapsed",
})<{ isCollapsed: boolean }>(({ theme, isCollapsed }) => ({
  boxSizing: "border-box",
  width: isCollapsed ? theme.spacing(21.25) : theme.spacing(77.5),
  height: "100%",
  paddingTop: theme.spacing(6),
  paddingRight: theme.spacing(4),
  paddingBottom: theme.spacing(6),
  paddingLeft: isCollapsed ? theme.spacing(4) : theme.spacing(10),
  flexShrink: 0,
  backgroundColor: theme.palette.secondaryColors[900],
  borderRight: `${theme.spacing(0.25)} solid ${theme.palette.strokeColors[150]}`,
  display: "flex",
  flexDirection: "column",
  transition: "width 0.25s ease, padding 0.25s ease",
  overflowX: "hidden",
  overflowY: "auto",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": { display: "none" },
  [theme.breakpoints.down("lg")]: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 200,
  },
}));

export const SidebarHeader = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isCollapsed",
})<{ isCollapsed?: boolean }>(({ theme, isCollapsed }) => ({
  paddingBottom: theme.spacing(6),
  marginBottom: theme.spacing(6),
  display: "flex",
  alignItems: "center",
  justifyContent: isCollapsed ? "center" : "space-between",
  [theme.breakpoints.down("lg")]: {
    paddingBottom: theme.spacing(13.5),
    marginBottom: theme.spacing(13.5),
  },
}));

export const CollapseToggleButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.textColors[200],
  padding: theme.spacing(1),
  flexShrink: 0,
  "&:hover": {
    color: theme.palette.textColors[400],
    backgroundColor: "transparent",
  },
}));

export const TopBarTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[50],
  fontSize: theme.typography.fontSize18,
  fontFamily: theme.typography.fontFamily,
}));

export const TopBarSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize12,
  fontFamily: theme.typography.fontFamily,
  opacity: 0.6,
}));

export const SidebarNav = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
}));

export const NavItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "isCollapsed",
})<{ active: boolean; isCollapsed?: boolean }>(
  ({ theme, active, isCollapsed }) => ({
    display: "flex",
    alignItems: "center",
    gap: isCollapsed ? 0 : theme.spacing(3),
    justifyContent: isCollapsed ? "center" : undefined,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: isCollapsed ? theme.spacing(2) : theme.spacing(4),
    paddingRight: isCollapsed ? theme.spacing(2) : theme.spacing(4),
    borderRadius: theme.spacing(2.5),
    cursor: "pointer",
    backgroundColor: active ? theme.palette.primaryColors[700] : "transparent",
    "&:hover": {
      backgroundColor: active
        ? theme.palette.primaryColors[700]
        : theme.palette.strokeColors[120],
    },
  }),
);

export const NavIconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "small",
})<{ active: boolean; small?: boolean }>(({ theme, active, small }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    fontSize: small ? theme.spacing(4.5) : theme.typography.fontSize24,
    color: active
      ? theme.palette.primaryColors[200]
      : theme.palette.neutralColors[300],
  },
}));

export const NavItemText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ theme, active }) => ({
  color: active ? theme.palette.textColors[400] : theme.palette.textColors[200],
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight500,
  fontSize: theme.typography.fontSize16,
  whiteSpace: "nowrap",
}));

export const SidebarBottom = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  marginTop: "auto",
  paddingTop: theme.spacing(6),
}));

export const LogoutButtonText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[400],
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight500,
  fontSize: theme.typography.fontSize16,
  whiteSpace: "nowrap",
}));

export const DeidentifySubmenu = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isCollapsed",
})<{ isCollapsed?: boolean }>(({ theme, isCollapsed }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: theme.spacing(2),
  marginLeft: isCollapsed ? 0 : theme.spacing(4),
  paddingLeft: 0,
  alignItems: isCollapsed ? "center" : undefined,
}));

export const DeidentifySubmenuItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
  position: "relative",
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
}));

export const DeidentifySubmenuIconWrap = styled(Box)(({ theme }) => ({
  position: "relative",
  width: theme.spacing(6),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}));

export const DeidentifySubmenuConnector = styled(Box, {
  shouldForwardProp: (prop) => prop !== "visible",
})<{ visible: boolean }>(({ theme, visible }) => ({
  position: "absolute",
  left: "50%",
  top: `calc(50% + ${theme.spacing(3)})`,
  transform: "translateX(-50%)",
  width: theme.spacing(0.5),
  height: theme.spacing(8),
  backgroundColor: alpha(theme.palette.strokeColors[400], 0.6),
  display: visible ? "block" : "none",
}));

export const DeidentifySubmenuStepDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "completed",
})<{ active: boolean; completed: boolean }>(({ theme, active, completed }) => ({
  width: theme.spacing(5.5),
  height: theme.spacing(5.5),
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  backgroundColor: completed
    ? theme.palette.primaryColors[700]
    : theme.palette.secondaryColors[900],
  border: completed
    ? `${theme.spacing(0.5)} solid ${theme.palette.primaryColors[700]}`
    : active
      ? `${theme.spacing(0.5)} solid ${theme.palette.primaryColors[200]}`
      : `${theme.spacing(0.5)} solid ${alpha(theme.palette.strokeColors[400], 0.7)}`,
  transition: "background-color 200ms ease, border-color 200ms ease",
  color: theme.palette.primaryColors[50],
  "&::after": {
    content: '""',
    width: active && !completed ? theme.spacing(2) : 0,
    height: active && !completed ? theme.spacing(2) : 0,
    borderRadius: "50%",
    backgroundColor: theme.palette.primaryColors[200],
    transition: "width 200ms ease, height 200ms ease",
  },
  "& svg": {
    fontSize: theme.typography.fontSize14,
    color: theme.palette.primaryColors[50],
  },
}));

export const DeidentifySubmenuLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ theme, active }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: active
    ? theme.typography.fontWeight700
    : theme.typography.fontWeight500,
  fontSize: theme.typography.fontSize14,
  color: active
    ? theme.palette.primaryColors[200]
    : alpha(theme.palette.textColors[200], 0.6),
  transition: "color 200ms ease",
  whiteSpace: "nowrap",
}));
