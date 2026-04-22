import { theme } from "@/common/theme/theme";
import { alpha } from "@mui/material/styles";
export const colors = {
  pageBg: theme.palette.secondaryColors[900],
  surfaceLow: theme.palette.neutralColors[900],
  surfaceMid: theme.palette.neutralColors[800],
  surfaceHigh: theme.palette.neutralColors[700],
  borderSubtle: theme.palette.strokeColors[150],
  borderMid: theme.palette.strokeColors[400],
  accent: theme.palette.primaryColors[200],
  textPrimary: theme.palette.textColors[50],
  textSecondary: theme.palette.textColors[200],
  textLabel: theme.palette.primaryColors[50],
};

export const pageScroll = {
  px: { xs: theme.spacing(4), md: theme.spacing(10) },
  py: theme.spacing(11),
};

export const contentContainer = {
  maxWidth: theme.spacing(251.75),
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
};

export const pageHeaderWrapper = {
  position: "relative",
  mb: theme.spacing(8),
};

export const backgroundGlow = {
  position: "absolute",
  top: theme.spacing(-25),
  left: theme.spacing(-12.5),
  width: theme.spacing(175),
  height: theme.spacing(75),
  background: theme.palette.strokeColors[120],
  filter: `blur(${theme.spacing(25)})`,
  borderRadius: "50%",
  pointerEvents: "none",
  zIndex: 0,
};

export const pageHeaderRow1 = {
  position: "relative",
  zIndex: 1,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  mb: theme.spacing(2),
};

export const pageHeaderRow2 = {
  position: "relative",
  zIndex: 1,
  display: "flex",
  justifyContent: "flex-end",
};

export const headerActionsColumn = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: theme.spacing(3),
};

export const pageTitle = {
  color: theme.palette.primaryColors[50],
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize48,
  margin: 0,
};

export const pageSubtitle = {
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight500,
  margin: 0,
};

export const startButton = {
  width: theme.spacing(41.25),
  height: theme.spacing(10.5),
  backgroundImage: "none",
  bgcolor: theme.palette.primaryColors[200],
  color: theme.palette.backgroundColor,
  fontWeight: theme.typography.fontWeight700,
  fontSize: {
    xs: theme.typography.fontSize12,
    md: theme.typography.fontSize12,
  },
  px: {
    xs: theme.spacing(4),
    md: theme.spacing(4),
  },
  py: {
    xs: theme.spacing(3),
    md: theme.spacing(3),
  },
  borderRadius: theme.spacing(2),
  textTransform: "none",
  "&:hover": {
    bgcolor: theme.palette.textColors[50],
    backgroundImage: "none",
  },
};

export const timeFilterGroup = {
  display: "flex",
  gap: theme.spacing(2),
};

export const timeFilterPill = (active: boolean) => ({
  px: theme.spacing(3.25),
  py: theme.spacing(2.5),
  borderRadius: theme.spacing(2),
  cursor: "pointer",
  bgcolor: theme.palette.neutralColors[800],
  border: active
    ? `1px solid ${theme.palette.strokeColors[120]}`
    : `1px solid ${theme.palette.strokeColors[400]}`,
});

export const timeFilterText = (active: boolean) => ({
  color: active ? colors.textPrimary : colors.textSecondary,
  fontSize: theme.typography.fontSize14,
  fontWeight: active
    ? theme.typography.fontWeight500
    : theme.typography.fontWeight400,
});

export const infoBanner = {
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  background: theme.palette.strokeColors[120],
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3, 3),
  width: theme.spacing(82),
  height: theme.spacing(10.5),
};

export const infoBannerText = {
  color: theme.palette.primaryColors[200],
  fontSize: theme.typography.fontSize14,
  fontFamily: theme.typography.fontFamily,
};

export const topSectionGrid = {
  display: "flex",
  gap: theme.spacing(6),
  mb: theme.spacing(6),
};

export const statCardsColumn = {
  display: "grid",
  gridTemplateColumns: `repeat(2, ${theme.spacing(58.25)})`,
  gap: theme.spacing(6),
};

export const statCard = {
  boxSizing: "border-box",
  width: theme.spacing(58.25),
  height: theme.spacing(43),
  padding: theme.spacing(6),
  borderRadius: theme.spacing(2),
  bgcolor: colors.surfaceMid,
  border: `1px solid ${theme.palette.strokeColors[400]}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: theme.spacing(3),
};

export const statCardHeader = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const statLabel = {
  color: colors.textLabel,
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight500,
  textTransform: "uppercase" as const,
};

export const statIconBox = {
  boxSizing: "border-box",
  width: theme.spacing(10.5),
  height: theme.spacing(12),
  padding: theme.spacing(0, 2),
  borderRadius: theme.spacing(3.5),
  background: theme.palette.strokeColors[120],
  border: `${theme.spacing(0.2)} solid ${theme.palette.strokeColors[120]}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primaryColors[200],
};

export const statValue = {
  color: theme.palette.textColors[50],
  fontSize: theme.typography.fontSize32,
  fontWeight: theme.typography.fontWeight500,
};

export const statFooter = {
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  color: colors.textSecondary,
};

export const statFooterText = {
  fontSize: theme.typography.fontSize12,
  fontFamily: theme.typography.fontFamily,
};

export const chartCardBase = {
  boxSizing: "border-box",
  background: theme.palette.neutralColors[900],
  border: `1px solid ${theme.palette.strokeColors[120]}`,
  boxShadow: `0 ${theme.spacing(4.5)} ${theme.spacing(6.5)} 0 ${theme.palette.strokeColors[150]}`,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
};

export const complianceCard = {
  ...chartCardBase,
  width: theme.spacing(123.25),
  height: theme.spacing(92),
};

export const fullWidthCard = {
  ...chartCardBase,
  width: theme.spacing(251.75),
  height: theme.spacing(119.5),
  mb: theme.spacing(6),
};

export const halfWidthCard = {
  ...chartCardBase,
  width: theme.spacing(122),
  height: theme.spacing(112),
};

export const twoColGrid = {
  display: "flex",
  gap: theme.spacing(7.75),
  mb: theme.spacing(6),
};

export const chartHeader = {
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
};

export const chartTitle = {
  color: theme.palette.textColors[50],
  fontSize: theme.typography.fontSize18,
  fontWeight: theme.typography.fontWeight600,
  fontFamily: theme.typography.fontFamily,
};

export const chartSubtitle = {
  color: colors.textSecondary,
  fontSize: theme.typography.fontSize12,
  fontFamily: theme.typography.fontFamily,
};

export const skeletonCenter = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mt: theme.spacing(2),
};

export const donutSkeleton = {
  width: theme.spacing(45),
  height: theme.spacing(45),
  borderRadius: "50%",
  border: `${theme.spacing(8.75)} solid ${theme.palette.strokeColors[120]}`,
};

export const barSkeletonContainer = {
  flex: 1,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  mt: theme.spacing(4),
  px: theme.spacing(2),
};

export const barSkeletonCol = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
  width: "8%",
  height: "100%",
  justifyContent: "flex-end",
};

export const barSkeleton = {
  width: "100%",
  bgcolor: theme.palette.strokeColors[120],
  borderRadius: theme.spacing(1),
};

export const barSkeletonLabel = {
  color: alpha(theme.palette.textColors[200], 0.2),
  fontSize: theme.typography.fontSize10,
  fontFamily: theme.typography.fontFamily,
};

export const infoBox = {
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  flexWrap: "wrap",
};

export const statIcon = { fontSize: theme.typography.fontSize24 };
export const statFooterIcon = { fontSize: theme.typography.fontSize14 };
export const infoIcon = {
  fontSize: theme.typography.fontSize20,
  color: colors.accent,
};

export const barSkeletonDynamic = (heightPercent: number) => ({
  ...barSkeleton,
  height: `${heightPercent}%`,
});
