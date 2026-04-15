import { theme } from "../../common/themes/theme";

export const font =
  (theme.typography.fontFamily as string) || "'Manrope', sans-serif";

export const sidebar = {
  boxSizing: "border-box",
  width: "256px",
  height: "794px",
  padding: "16px 24px",
  flexShrink: 0,
  bgcolor: "#060e20",
  borderRight: `1px solid rgba(67,70,82,0.25)`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const sidebarHeader = {
  pb: "24px",
  mb: "24px",
  borderBottom: `1px solid rgba(67,70,82,0.25)`,
};

export const topBarTitle = {
  fontWeight: 800,
  color: "#dae2fd",
  fontSize: "18px",
  fontFamily: font,
  lineHeight: "28px",
};

export const topBarSubtitle = {
  color: "rgba(195, 198, 212, 0.6)",
  fontSize: "12px",
  fontFamily: font,
};

export const sidebarNav = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

export const navItem = (active: boolean) => ({
  display: "flex",
  alignItems: "center",
  gap: 3,
  padding: "12px 16px",
  borderRadius: "10px",
  cursor: "pointer",
  bgcolor: active ? "#0d47a1" : "transparent",
  "&:hover": { bgcolor: active ? "#0d47a1" : "rgba(255,255,255,0.04)" },
});

export const navItemIcon = (active: boolean) => ({
  color: active ? "#b2c5ff" : "#c3c6d4",
});

export const navItemText = (active: boolean) => ({
  color: active ? "#b2c5ff" : "#C3C6D4",
  fontFamily: font,
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "150%",
});

export const sidebarBottom = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};
