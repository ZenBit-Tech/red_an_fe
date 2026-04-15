import theme from "@/common/theme/index";

export const font =
  (theme.typography.fontFamily as string) || "'Manrope', sans-serif";

export const colors = {
  pageBg: "#060E20",
  surfaceLow: "#131B2E",
  surfaceMid: "#222A3D",
  surfaceHigh: "#2D3548",
  borderSubtle: "rgba(67,70,82,0.15)",
  borderMid: "rgba(67,70,82,0.4)",
  accent: "#B0C6FF",
  textPrimary: "#FFFFFF",
  textSecondary: "#C3C6D4",
  textLabel: "#DAE2FD",
};

export const pageWrapper = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  bgcolor: "#0B1326",
  fontFamily: font,
};

export const bodyWrapper = {
  display: "flex",
  flex: 1,
  overflow: "hidden",
};

export const rightContent = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  overflowX: "hidden",
};

export const topBar = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  px: { xs: 4, md: "93px" },
  py: 3,
  bgcolor: "#0b1326",
  borderBottom: `1px solid rgba(67,70,82,0.25)`,
  flexShrink: 0,
};

export const topBarCenterTitle = {
  fontWeight: 500,
  color: "#b0c6ff",
  fontSize: "20px",
};

export const topBarCenterSubtitle = {
  color: "#c3c6d4",
  fontSize: "14px",
};

export const topBarActions = {
  display: "flex",
  alignItems: "center",
  gap: 2,
};

export const avatarEmail = {
  color: colors.textSecondary,
  fontSize: "0.78rem",
  fontFamily: font,
  whiteSpace: "nowrap",
};

export const iconButton = {
  color: colors.textSecondary,
  p: 1.5,
  borderRadius: "8px",
  "&:hover": {
    color: colors.textPrimary,
    bgcolor: "rgba(255,255,255,0.05)",
  },
};

export const avatarButton = {
  width: 36,
  height: 36,
  borderRadius: "10px",
  bgcolor: "#0d47a1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

export const mainContent = {
  flex: 1,
  overflow: "auto",
  px: { xs: 4, md: "93px" },
  py: "48px",
};

export const contentContainer = {
  maxWidth: "1007px",
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
};

export const pageHeaderWrapper = {
  position: "relative",
  mb: "150px",
};

export const backgroundGlow = {
  position: "absolute",
  top: "-100px",
  left: "-50px",
  width: "700px",
  height: "300px",
  background: "rgba(176, 198, 255, 0.12)",
  filter: "blur(100px)",
  borderRadius: "50%",
  pointerEvents: "none",
  zIndex: 0,
};

export const pageHeaderRow1 = {
  position: "relative",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  mb: 3,
};

export const pageHeaderRow2 = {
  position: "relative",
  zIndex: 1,
  display: "flex",
  justifyContent: "flex-end",
};

export const pageTitle = {
  color: "#dae2fd",
  fontWeight: 700,
  fontSize: "32px",
};

export const pageSubtitle = {
  color: "#c3c6d4",
  fontSize: "12px",
};

export const startButton = {
  bgcolor: "#b0c6ff",
  color: "#0b1326",
  fontWeight: 700,
  px: "16px",
  py: "12px",
  borderRadius: "8px",
  textTransform: "none",
  "&:hover": {
    bgcolor: "#FFF",
  },
};

export const timeFilterGroup = {
  display: "flex",
  gap: 2,
};

export const timeFilterPill = (active: boolean) => ({
  px: "13px",
  py: "10px",
  borderRadius: "8px",
  cursor: "pointer",
  bgcolor: "#222a3d",
  border: active
    ? `1px solid rgba(176,198,255,0.3)`
    : `1px solid rgba(67,70,82,0.4)`,
});

export const timeFilterText = (active: boolean) => ({
  color: active ? colors.textPrimary : colors.textSecondary,
  fontSize: "14px",
  fontWeight: active ? 500 : 400,
});

export const infoBanner = {
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  gap: 1,
  background:
    "linear-gradient(135deg, rgba(176, 198, 255, 0.2) 0%, rgba(164, 189, 248, 0.2) 7.14%, rgba(153, 180, 242, 0.2) 14.29%, rgba(141, 171, 235, 0.2) 21.43%, rgba(130, 161, 228, 0.2) 28.57%, rgba(119, 152, 222, 0.2) 35.71%, rgba(108, 143, 215, 0.2) 42.86%, rgba(96, 134, 208, 0.2) 50%, rgba(85, 125, 202, 0.2) 57.14%, rgba(74, 116, 195, 0.2) 64.29%, rgba(63, 107, 188, 0.2) 71.43%, rgba(52, 98, 181, 0.2) 78.57%, rgba(40, 89, 175, 0.2) 85.71%, rgba(28, 80, 168, 0.2) 92.86%, rgba(13, 71, 161, 0.2) 100%)",
  borderRadius: "8px",
  padding: "8px 12px",
  width: "328px",
  height: "42px",
};

export const infoBannerText = {
  color: "#b0c6ff",
  fontSize: "13px",
  fontFamily: font,
};

export const topSectionGrid = {
  display: "flex",
  gap: "24px",
  mb: "24px",
};

export const statCardsColumn = {
  display: "grid",
  gridTemplateColumns: "233px 233px",
  gap: "24px",
};

export const statCard = {
  boxSizing: "border-box",
  width: "233px",
  height: "172px",
  padding: "24px",
  borderRadius: "8px",
  bgcolor: colors.surfaceMid,
  border: `1px solid rgba(67,70,82,0.35)`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "12px",
};

export const statCardHeader = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const statLabel = {
  color: colors.textLabel,
  fontSize: "12px",
  fontWeight: 500,
  textTransform: "uppercase",
};

export const statIconBox = {
  boxSizing: "border-box",
  width: "42px",
  height: "48px",
  padding: "0px 8px",
  borderRadius: "14px",
  background:
    "linear-gradient(135deg, rgba(176, 198, 255, 0.2) 0%, rgba(164, 189, 248, 0.2) 7.14%, rgba(153, 180, 242, 0.2) 14.29%, rgba(141, 171, 235, 0.2) 21.43%, rgba(130, 161, 228, 0.2) 28.57%, rgba(119, 152, 222, 0.2) 35.71%, rgba(108, 143, 215, 0.2) 42.86%, rgba(96, 134, 208, 0.2) 50%, rgba(85, 125, 202, 0.2) 57.14%, rgba(74, 116, 195, 0.2) 64.29%, rgba(63, 107, 188, 0.2) 71.43%, rgba(52, 98, 181, 0.2) 78.57%, rgba(40, 89, 175, 0.2) 85.71%, rgba(28, 80, 168, 0.2) 92.86%, rgba(13, 71, 161, 0.2) 100%)",
  border: "0.80px solid rgba(176, 198, 255, 0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#b0c6ff",
};

export const statValue = {
  color: "#FFF",
  fontSize: "32px",
  fontWeight: 500,
};

export const statFooter = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  color: colors.textSecondary,
};

export const statFooterText = {
  fontSize: "12px",
  fontFamily: font,
};

export const chartCardBase = {
  boxSizing: "border-box",
  background: "#131b2e",
  border: "1px solid rgba(176, 198, 255, 0.05)",
  boxShadow: "0 18px 26px 0 rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
};

export const complianceCard = {
  ...chartCardBase,
  width: "493px",
  height: "368px",
};

export const fullWidthCard = {
  ...chartCardBase,
  width: "1007px",
  height: "478px",
  mb: "24px",
};

export const halfWidthCard = {
  ...chartCardBase,
  width: "488px",
  height: "448px",
};

export const twoColGrid = {
  display: "flex",
  gap: "31px",
  mb: "24px",
};

export const chartHeader = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
};

export const chartTitle = {
  color: "#FFF",
  fontSize: "18px",
  fontWeight: 600,
  fontFamily: font,
};

export const chartSubtitle = {
  color: colors.textSecondary,
  fontSize: "12px",
  fontFamily: font,
};

export const skeletonCenter = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mt: 2,
};

export const donutSkeleton = {
  width: "180px",
  height: "180px",
  borderRadius: "50%",
  border: "35px solid rgba(255, 255, 255, 0.03)",
};

export const barSkeletonContainer = {
  flex: 1,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  mt: 4,
  px: 2,
};

export const barSkeletonCol = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  width: "8%",
  height: "100%",
  justifyContent: "flex-end",
};

export const barSkeleton = {
  width: "100%",
  bgcolor: "rgba(255, 255, 255, 0.03)",
  borderRadius: "4px",
};

export const barSkeletonLabel = {
  color: "rgba(255, 255, 255, 0.2)",
  fontSize: "10px",
  fontFamily: font,
};

export const topBarCenter = {
  flex: 1,
};
