import { theme } from "../../common/themes/theme";

export const font =
  (theme.typography.fontFamily as string) || "'Inter', sans-serif";

// ── Палітра з дизайну ────────────────────────────────────────────────────────
const colors = {
  bgApp: "#060E20", // Найтемніший синій (фон додатку)
  bgCard: "#131B2E", // Темно-синій (сайдбар, топбар, картки)
  primary: "#B0C6FF", // Світло-синій (акценти, кнопки)
  border: "#222A3D", // Лінії, бордери
  textMain: "#FFFFFF", // Основний білий текст
  textSec: "#DAE2FD", // Світлий синьо-сірий текст
  textMuted: "#C3C6D4", // Сірий текст та іконки
};

// ── Layout ────────────────────────────────────────────────────────────────────

export const pageWrapper = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  bgcolor: colors.bgApp, // Оновлено
  fontFamily: font,
};

// ── Top bar ───────────────────────────────────────────────────────────────────

export const topBar = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  px: { xs: 4, md: 6 },
  py: 3,
  bgcolor: colors.bgCard, // Оновлено
  borderBottom: `1px solid ${colors.border}`, // Оновлено
  flexShrink: 0,
};

export const topBarBrand = {
  display: "flex",
  alignItems: "center",
  gap: 3,
  minWidth: 0,
};

export const topBarTitle = {
  fontWeight: 700,
  color: colors.textMain,
  fontSize: "0.95rem",
  fontFamily: font,
  lineHeight: 1.2,
  whiteSpace: "nowrap",
};

export const topBarSubtitle = {
  color: colors.textMuted,
  fontSize: "0.72rem",
  fontFamily: font,
  whiteSpace: "nowrap",
};

export const topBarCenter = {
  flex: 1,
  mx: 4,
  display: { xs: "none", md: "block" },
};

export const topBarCenterTitle = {
  color: colors.textMain,
  fontWeight: 600,
  fontSize: "0.85rem",
  fontFamily: font,
  lineHeight: 1.2,
};

export const topBarCenterSubtitle = {
  color: colors.textMuted,
  fontSize: "0.72rem",
  fontFamily: font,
};

export const topBarActions = {
  display: "flex",
  alignItems: "center",
  gap: 3,
  flexShrink: 0,
};

export const iconButton = {
  color: colors.textMuted,
  p: 1,
  "&:hover": { color: colors.textMain, bgcolor: colors.border },
  borderRadius: "8px",
};

// Аватарка з новим primary кольором
export const avatarButton = {
  width: 36,
  height: 36,
  borderRadius: "50%",
  bgcolor: colors.primary, 
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  flexShrink: 0,
};

export const avatarInitial = {
  color: colors.bgApp, // Темна буква на світлому фоні
  fontSize: "0.85rem",
  fontWeight: 700,
  fontFamily: font,
};

export const avatarEmail = {
  color: colors.textSec,
  fontSize: "0.85rem",
  fontFamily: font,
  whiteSpace: "nowrap",
};

// ── Body ──────────────────────────────────────────────────────────────────────

export const bodyWrapper = {
  display: "flex",
  flex: 1,
  overflow: "hidden",
};

// ── Sidebar ───────────────────────────────────────────────────────────────────

export const sidebar = {
  width: 250, // Трохи ширше для довгих назв
  flexShrink: 0,
  bgcolor: colors.bgCard,
  borderRight: `1px solid ${colors.border}`,
  display: { xs: "none", md: "flex" },
  flexDirection: "column",
  justifyContent: "space-between",
  py: 4,
};

export const sidebarNav = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  px: 3,
};

export const navItem = (active: boolean) => ({
  display: "flex",
  alignItems: "center",
  gap: 3,
  px: 3,
  py: 2.5,
  borderRadius: "10px",
  cursor: "pointer",
  bgcolor: active ? "rgba(176, 198, 255, 0.15)" : "transparent", // Напівпрозорий B0C6FF
  transition: "all 0.15s",
  "&:hover": {
    bgcolor: active ? "rgba(176, 198, 255, 0.2)" : colors.border,
  },
});

export const navItemText = (active: boolean) => ({
  color: active ? colors.primary : colors.textMuted,
  fontSize: "0.85rem",
  fontWeight: active ? 600 : 400,
  fontFamily: font,
  lineHeight: 1,
});

export const navItemIcon = (active: boolean) => ({
  color: active ? colors.primary : colors.textMuted,
  fontSize: 18,
  display: "flex",
  alignItems: "center",
});

export const sidebarBottom = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  px: 3,
};

// ── Trial banner ──────────────────────────────────────────────────────────────

export const trialBanner = {
  mx: { xs: 4, md: 6 },
  mt: 4,
  mb: 2,
  p: 4,
  bgcolor: colors.bgCard,
  border: `1px solid ${colors.border}`,
  borderRadius: "12px",
  display: "flex",
  alignItems: { xs: "flex-start", sm: "center" },
  justifyContent: "space-between",
  flexDirection: { xs: "column", sm: "row" },
  gap: 4,
};

export const trialBannerLeft = {
  display: "flex",
  alignItems: "center",
  gap: 3,
};

export const trialBadge = {
  bgcolor: "rgba(176, 198, 255, 0.1)",
  border: `1px solid ${colors.primary}`,
  borderRadius: "6px",
  px: 2,
  py: 0.5,
  flexShrink: 0,
};

export const trialBadgeText = {
  color: colors.primary,
  fontSize: "0.65rem",
  fontWeight: 700,
  fontFamily: font,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
};

export const trialBannerText = {
  color: colors.textSec,
  fontSize: "0.85rem",
  fontFamily: font,
  lineHeight: 1.5,
};

export const trialUpgradeButton = {
  bgcolor: "transparent",
  color: colors.primary,
  border: `1px solid ${colors.primary}`,
  fontFamily: font,
  fontWeight: 600,
  fontSize: "0.78rem",
  textTransform: "none",
  borderRadius: "8px",
  px: 4,
  py: 1.5,
  whiteSpace: "nowrap",
  boxShadow: "none",
  flexShrink: 0,
  "&:hover": {
    bgcolor: "rgba(176, 198, 255, 0.1)",
    boxShadow: "none",
  },
};

// ── Main content ──────────────────────────────────────────────────────────────

export const mainContent = {
  flex: 1,
  overflow: "auto",
  px: { xs: 4, md: 6 },
  py: { xs: 4, md: 6 },
};

// ── Page header ───────────────────────────────────────────────────────────────

export const pageHeaderWrapper = {
  display: "flex",
  alignItems: { xs: "flex-start", sm: "center" },
  justifyContent: "space-between",
  flexDirection: { xs: "column", sm: "row" },
  gap: 3,
  mb: 5,
};

export const pageHeaderLeft = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
};

export const pageTitle = {
  color: colors.textMain,
  fontWeight: 500,
  fontSize: { xs: "1.6rem", md: "2rem" },
  fontFamily: font,
  lineHeight: 1.15,
  letterSpacing: "-0.01em",
};

export const pageSubtitle = {
  color: colors.textMuted,
  fontSize: "0.85rem",
  fontFamily: font,
};

export const pageHeaderRight = {
  display: "flex",
  alignItems: "center",
  gap: 3,
  flexWrap: "wrap" as const,
};

export const infoBanner = {
  display: "flex",
  alignItems: "center",
  gap: 2,
  bgcolor: colors.bgCard,
  border: `1px solid ${colors.border}`,
  borderRadius: "10px",
  px: 3,
  py: 2,
};

export const infoBannerText = {
  color: colors.textSec,
  fontSize: "0.78rem",
  fontFamily: font,
  whiteSpace: "nowrap",
};

export const lastDaysPill = {
  bgcolor: colors.bgCard,
  border: `1px solid ${colors.border}`,
  borderRadius: "8px",
  px: 3,
  py: 2,
  cursor: "pointer",
  "&:hover": { bgcolor: colors.border },
};

export const lastDaysText = {
  color: colors.textMuted,
  fontSize: "0.78rem",
  fontFamily: font,
  whiteSpace: "nowrap",
};

export const startButton = {
  bgcolor: colors.primary,
  color: colors.bgApp,
  fontFamily: font,
  fontWeight: 600,
  fontSize: "0.82rem",
  textTransform: "none",
  borderRadius: "10px",
  px: 4,
  py: 2,
  whiteSpace: "nowrap",
  boxShadow: "none",
  "&:hover": { bgcolor: "#C2D5FF", boxShadow: "none" },
};

// ── Stat cards ────────────────────────────────────────────────────────────────

export const statsGrid = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr 1fr",
    md: "repeat(4, 1fr)",
  },
  gap: 3,
  mb: 4,
};

export const statCard = {
  bgcolor: colors.bgCard,
  border: `1px solid ${colors.border}`,
  borderRadius: "12px",
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 3,
};

export const statCardHeader = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
};

export const statLabel = {
  color: colors.textMuted,
  fontSize: "0.7rem",
  fontFamily: font,
  fontWeight: 600,
  letterSpacing: "0.05em",
  textTransform: "uppercase" as const,
  lineHeight: 1.4,
};

export const statIconBox = {
  width: 36,
  height: 36,
  borderRadius: "8px",
  bgcolor: colors.border,
  color: colors.primary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

export const statValue = {
  color: colors.textMain,
  fontWeight: 500,
  fontSize: "2rem",
  fontFamily: font,
  lineHeight: 1,
};

// ── Empty state ───────────────────────────────────────────────────────────────

export const emptyStateCard = {
  bgcolor: colors.bgCard,
  border: `1px solid ${colors.border}`,
  borderRadius: "12px",
  p: 8,
  mb: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 220,
  textAlign: "center",
};

export const emptyStateTitle = {
  color: colors.textSec,
  fontSize: "1rem",
  fontWeight: 500,
  fontFamily: font,
  mt: 4,
  mb: 2,
};

export const emptyStateSubtitle = {
  color: colors.textMuted,
  fontSize: "0.8rem",
  fontFamily: font,
  mb: 5,
  maxWidth: 380,
};

export const emptyStateButton = {
  bgcolor: "transparent",
  color: colors.textMain,
  fontFamily: font,
  fontWeight: 500,
  fontSize: "0.82rem",
  textTransform: "none",
  borderRadius: "8px",
  px: 5,
  py: 2,
  boxShadow: "none",
  border: `1px solid ${colors.border}`,
  "&:hover": { bgcolor: colors.border, boxShadow: "none" },
};

// ── Chart section ─────────────────────────────────────────────────────────────

export const chartSection = {
  mb: 4,
};

export const chartSectionHeader = {
  display: "flex",
  alignItems: "center",
  gap: 3,
  mb: 3,
};

export const chartIconBox = {
  width: 36,
  height: 36,
  borderRadius: "10px",
  bgcolor: colors.bgCard,
  border: `1px solid ${colors.border}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

export const chartSectionTitle = {
  color: colors.textSec,
  fontWeight: 500,
  fontSize: "0.95rem",
  fontFamily: font,
};

export const chartCard = {
  bgcolor: colors.bgCard,
  border: `1px solid ${colors.border}`,
  borderRadius: "10px",
  minHeight: 160,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  p: 6,
};

export const chartPlaceholderText = {
  color: colors.textMuted,
  fontSize: "0.78rem",
  fontFamily: font,
};

export const twoColGrid = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
  gap: 3,
};