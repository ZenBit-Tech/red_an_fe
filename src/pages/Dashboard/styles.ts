import { Box, Button, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const PageScrollContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(11),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: theme.spacing(251.75),
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
}));

export const PageHeaderWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  marginBottom: theme.spacing(8),
}));

export const BackgroundGlow = styled(Box)(({ theme }) => ({
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
}));

export const PageHeaderRow1 = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

export const PageHeaderRow2 = styled(Box)({
  position: "relative",
  zIndex: 1,
  display: "flex",
  justifyContent: "flex-end",
});

export const HeaderActionsColumn = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: theme.spacing(3),
  [theme.breakpoints.down("lg")]: {
    marginTop: theme.spacing(8),
    width: "100%",
    gap: theme.spacing(6),
  },
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[50],
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize48,
  margin: 0,
}));

export const PageSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight500,
  margin: 0,
}));

export const StartButton = styled(Button)(({ theme }) => ({
  width: theme.spacing(41.25),
  whiteSpace: "nowrap",
  height: theme.spacing(10.5),
  minWidth: 0,
  boxShadow: "none",
  backgroundImage: "none",
  backgroundColor: theme.palette.primaryColors[200],
  color: theme.palette.backgroundColor,
  fontWeight: theme.typography.fontWeight700,
  fontSize: `${theme.typography.fontSize12}px !important`,
  padding: `${theme.spacing(3)} ${theme.spacing(4)} !important`,
  borderRadius: theme.spacing(2),
  textTransform: "none",
  "&:hover": {
    backgroundColor: theme.palette.textColors[50],
    backgroundImage: "none",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
  },
  "&:focus": {
    boxShadow: "none",
  },
}));

export const TimeFilterGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  [theme.breakpoints.down("lg")]: {
    gap: theme.spacing(4),
  },
}));

export const TimeFilterPill = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ theme, active }) => ({
  paddingInline: theme.spacing(3.25),
  paddingBlock: theme.spacing(2.5),
  borderRadius: theme.spacing(2),
  cursor: "pointer",
  [theme.breakpoints.down("lg")]: {
    paddingInline: theme.spacing(3),
    paddingBlock: theme.spacing(2),
  },
  backgroundColor: theme.palette.neutralColors[800],
  border: active
    ? `${theme.spacing(0.25)} solid ${theme.palette.strokeColors[120]}`
    : `${theme.spacing(0.25)} solid ${theme.palette.strokeColors[400]}`,
}));

export const TimeFilterText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ theme, active }) => ({
  color: active ? theme.palette.textColors[50] : theme.palette.textColors[200],
  fontSize: theme.typography.fontSize14,
  fontWeight: active
    ? theme.typography.fontWeight500
    : theme.typography.fontWeight400,
}));

export const InfoBanner = styled(Box)(({ theme }) => ({
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  background: theme.palette.strokeColors[120],
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3, 3),
  width: "fit-content",
  height: theme.spacing(10.5),
  "& svg": {
    fontSize: theme.typography.fontSize20,
    color: theme.palette.primaryColors[200],
  },
}));

export const InfoBannerText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[200],
  fontSize: theme.typography.fontSize14,
  fontFamily: theme.typography.fontFamily,
}));

export const TopSectionGrid = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(6),
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

export const StatCardsColumn = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: `repeat(2, ${theme.spacing(58.25)})`,
  gap: theme.spacing(6),
  [theme.breakpoints.down("lg")]: {
    margin: "0 auto",
    gridTemplateColumns: `repeat(2, ${theme.spacing(72)})`,
  },
}));

export const StatCard = styled(Box)(({ theme }) => ({
  boxSizing: "border-box",
  width: theme.spacing(58.25),
  height: theme.spacing(43),
  padding: theme.spacing(6),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.neutralColors[800],
  border: `${theme.spacing(0.25)} solid ${theme.palette.strokeColors[400]}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: theme.spacing(3),
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    height: theme.spacing(35),
    paddingLeft: theme.spacing(13),
    paddingRight: theme.spacing(13),
    gap: theme.spacing(0),
  },
}));

export const StatCardHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const StatLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[50],
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight500,
  textTransform: "uppercase",
}));

export const StatIconBox = styled(Box)(({ theme }) => ({
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
  "& svg": {
    fontSize: theme.typography.fontSize24,
  },
}));

export const StatValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[50],
  fontSize: theme.typography.fontSize32,
  fontWeight: theme.typography.fontWeight500,
  [theme.breakpoints.down("lg")]: {
    fontSize: theme.typography.fontSize48,
    fontWeight: theme.typography.fontWeight700,
  },
}));

export const StatFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  color: theme.palette.textColors[200],
  "& svg": {
    fontSize: theme.typography.fontSize14,
  },
}));

export const StatFooterText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  fontFamily: theme.typography.fontFamily,
}));

export const ChartCardBase = styled(Box)(({ theme }) => ({
  boxSizing: "border-box",
  background: theme.palette.neutralColors[900],
  border: `${theme.spacing(0.25)} solid ${theme.palette.strokeColors[120]}`,
  boxShadow: `0 ${theme.spacing(4.5)} ${theme.spacing(6.5)} 0 ${theme.palette.strokeColors[150]}`,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
}));

export const ComplianceCard = styled(ChartCardBase)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: theme.spacing(123.25),
  height: theme.spacing(92),
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

export const FullWidthCard = styled(ChartCardBase)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  height: theme.spacing(120),
  marginBottom: theme.spacing(6),
}));

export const HalfWidthCard = styled(ChartCardBase)(({ theme }) => ({
  width: theme.spacing(122),
  height: theme.spacing(112),
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

export const TwoColGrid = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(7.75),
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

export const ChartHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const ChartTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[50],
  fontSize: theme.typography.fontSize18,
  fontWeight: theme.typography.fontWeight600,
  fontFamily: theme.typography.fontFamily,
}));

export const ChartSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize12,
  fontFamily: theme.typography.fontFamily,
}));

export const SkeletonCenter = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  marginTop: theme.spacing(2),
}));

export const DonutSkeleton = styled(Box)(({ theme }) => ({
  width: theme.spacing(45),
  height: theme.spacing(45),
  borderRadius: "50%",
  border: `${theme.spacing(8.75)} solid ${theme.palette.strokeColors[120]}`,
}));

export const BarSkeletonContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  marginTop: theme.spacing(4),
  height: "100%",
  paddingInline: theme.spacing(2),
}));

export const BarSkeletonCol = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
  width: "8%",
  height: "100%",
  justifyContent: "flex-end",
}));

export const BarSkeleton = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: theme.palette.strokeColors[120],
  borderRadius: theme.spacing(1),
}));

export const BarSkeletonDynamic = styled(BarSkeleton, {
  shouldForwardProp: (prop) => prop !== "heightPercent",
})<{ heightPercent: number }>(({ heightPercent }) => ({
  height: `${heightPercent}%`,
}));

export const BarSkeletonLabel = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.textColors[200], 0.2),
  fontSize: theme.typography.fontSize12,
  fontFamily: theme.typography.fontFamily,
}));

export const InfoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  flexWrap: "wrap",
}));

export const EmptyStatePlaceholder = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  flexDirection: "column",
  backgroundColor: theme.palette.neutralColors[900],
  borderRadius: theme.shape.borderRadius,
  minHeight: 300,
}));

export const BubbleSkeletonContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  width: "100%",
  position: "relative",
  marginTop: theme.spacing(4),
}));

export const SkeletonBubble = styled(Box, {
  shouldForwardProp: (prop) => prop !== "top" && prop !== "left",
})<{ top: string; left: string }>(({ theme, top, left }) => ({
  position: "absolute",
  top,
  left,
  width: theme.spacing(2),
  height: theme.spacing(2),
  backgroundColor: theme.palette.strokeColors[120],
  borderRadius: "50%",
}));
