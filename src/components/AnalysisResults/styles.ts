import {
  Box,
  Button,
  Paper,
  Select,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import {
  getDecisionTextColor,
  type ActionToggleButtonProps,
  type DecisionFactorBadgeProps,
  type EntityBadgeProps,
  type MutedStateProps,
  type RecognizerChipProps,
  type StyledTableRowProps,
} from "@/components/AnalysisResults/constants";
import { theme } from "@/common/theme/theme";

const TABLE_COLORS = {
  textPrimary: theme.palette.primaryColors[50],
  textSecondary: theme.palette.textColors[200],
  bgMain: theme.palette.neutralColors[900],
  bgHeader: theme.palette.neutralColors[800],
  border: "rgba(178, 197, 255, 0.08)",
  badgeRestrictedBg: "rgba(230, 81, 0, 0.3)",
  badgeRestrictedText: theme.palette.tertiaryColors[600],
  actionBtnBg: theme.palette.primaryColors[200],
  actionBtnText: theme.palette.neutralColors[700],
  highlightTokenBg: "rgba(13, 71, 161, 0.4)",
  highlightTokenText: theme.palette.primaryColors[300],
  entityBg: "rgba(230, 81, 0, 0.2)",
  entityBadge: "#7A2848",
  resultButton: "linear-gradient(167deg, #0d47a1 0%, #002d6f 100%)",
} as const;

const analysisResultsStyles = {
  containerGapDesktop: 6,
  containerGapMobile: 4,
  panelGapDesktop: 4,
  panelSurfaceRadius: 2,
} as const;

export const AnalysisResultsWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(8),
}));

export const AnalysisPageHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: theme.spacing(4),
}));

export const AnalysisPageTitleGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  minHeight: theme.spacing(43),
}));

export const AnalysisPageTitle = styled("h1")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize48,
  color: TABLE_COLORS.textPrimary,
  margin: 0,
}));

export const AnalysisPageTitleHighlight = styled("span")(({ theme }) => ({
  backgroundImage: `linear-gradient(161deg, ${theme.palette.primaryColors[200]} 0%, ${theme.palette.primaryColors[700]} 100%)`,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
}));

export const AnalysisPageSubtitle = styled("p")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.textColors[200],
  margin: 0,
}));

export const FrameworkBadge = styled(Box)(({ theme }) => ({
  width: "auto",
  height: theme.spacing(9),
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.5, 3),
  borderRadius: theme.spacing(2),
  backgroundColor: alpha(theme.palette.primaryColors[900], 0.5),
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight700,
  color: TABLE_COLORS.actionBtnBg,
  whiteSpace: "nowrap",
  flexShrink: 0,
}));

export const FrameworkBadgeLabel = styled("span")(({ theme }) => ({
  color: theme.palette.textColors[200],
}));

export const AnalysisResultsContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(analysisResultsStyles.containerGapDesktop),
}));

export const AnalysisResultsTitle = styled(Box)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize20}px`,
  fontWeight: theme.typography.fontWeight600,
  color: theme.palette.text.primary,
}));

export const AnalysisResultsSubtitle = styled(Box)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize14}px`,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

export const PanelsContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.spacing(analysisResultsStyles.panelGapDesktop),
}));

export const ResultPanel = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(2),
  minHeight: theme.spacing(75),
  boxShadow: "none",
}));

export const PanelTitleRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const PanelTitle = styled(Box)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize20}px`,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.primaryColors[50],
}));

export const RestrictedBadge = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0.5, 2),
  borderRadius: theme.spacing(0.5),
  fontSize: `${theme.typography.fontSize14}px`,
  backgroundColor: TABLE_COLORS.badgeRestrictedBg,
  color: TABLE_COLORS.badgeRestrictedText,
}));

export const AnonymizedBadge = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0.5, 2),
  borderRadius: theme.spacing(0.5),
  backgroundColor: alpha(theme.palette.primaryColors[700], 0.2),
  color: theme.palette.primaryColors[200],
}));

export const PanelSurface = styled(Box)(({ theme }) => ({
  flex: 1,
  minHeight: theme.spacing(67),
  overflowY: "auto",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(analysisResultsStyles.panelSurfaceRadius),
  backgroundColor: theme.palette.neutralColors[900],
}));

export const TextContent = styled(Box)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize14}px`,
  color: theme.palette.textColors[200],
  wordBreak: "break-word",
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word",
  fontFamily: theme.typography.fontFamily,
}));

export const OutputLoadingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(2),
}));

export const PanelActions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  justifyContent: "flex-start",
  flexWrap: "wrap",
}));

export const PanelActionButton = styled(Button)(({ theme }) => ({
  minWidth: 0,
  padding: `${theme.spacing(3, 4)} !important`,
  borderRadius: `${theme.spacing(2)} !important`,
  border: "0.80px solid #2d3548 !important",
  backgroundImage: "none !important",
  backgroundColor: `${theme.palette.neutralColors[900]} !important`,
  fontFamily: `${theme.typography.fontFamily} !important`,
  fontWeight: `${theme.typography.fontWeight500} !important`,
  fontSize: `${theme.typography.fontSize16}px !important`,
  textAlign: "center",
  color: `${theme.palette.primaryColors[50]} !important`,
  "&:hover": {
    border: "0.80px solid #2d3548 !important",
    backgroundImage: "none !important",
    backgroundColor: `${theme.palette.neutralColors[800]} !important`,
    filter: "brightness(1.1)",
  },
}));

export const DownloadFormatSelect = styled(Select)(({ theme }) => ({
  minWidth: theme.spacing(22),
  "& .MuiSelect-select": {
    paddingTop: theme.spacing(0.55),
    paddingBottom: theme.spacing(0.55),
    paddingLeft: theme.spacing(1),
    fontSize: `${theme.typography.fontSize12}px`,
    fontWeight: theme.typography.fontWeight600,
    color: theme.palette.text.primary,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.neutralColors[500],
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.neutralColors[400],
  },
}));
export const TableBlock = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  border: `1px solid ${TABLE_COLORS.border}`,
  backgroundColor: theme.palette.background.paper,
  overflow: "hidden",
  padding: theme.spacing(6),
}));
export const TableSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(20),
}));

export const TableContainerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: theme.spacing(4),
  backgroundColor: "transparent",
}));
export const TableContainerTitle = styled(Box)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize20}px`,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.text.primary,
}));

export const StyledTableHeadContainer = styled(Box)(({ theme }) => ({
  overflowX: "hidden",
  overflowY: "hidden",
  paddingRight: "10px",
  border: `1px solid ${TABLE_COLORS.border}`,
  borderBottom: "none",
  borderRadius: `${theme.spacing(2)} ${theme.spacing(2)} 0 0`,
  backgroundColor: TABLE_COLORS.bgHeader,
}));

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: `0 0 ${theme.spacing(2)} ${theme.spacing(2)}`,
  border: `1px solid ${TABLE_COLORS.border}`,
  borderTop: "none",
  backgroundColor: TABLE_COLORS.bgMain,
  boxShadow: "none",
  overflowX: "hidden",
  overflowY: "auto",
  maxHeight: theme.spacing(95),
  scrollbarWidth: "auto",
  scrollbarColor: `${theme.palette.strokeColors[400]} transparent`,
  "&::-webkit-scrollbar": {
    width: theme.spacing(2.5),
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
    marginBottom: theme.spacing(1),
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.strokeColors[400],
    borderRadius: theme.spacing(2),
    border: "2px solid transparent",
    backgroundClip: "content-box",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: alpha(theme.palette.primaryColors[200], 0.45),
  },
}));
export const StyledTable = styled(Table)(({ theme }) => ({
  width: "100%",
  tableLayout: "fixed",
  whiteSpace: "nowrap",
  "& .MuiTableCell-root": {
    padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
    fontSize: `${theme.typography.fontSize14}px`,
    verticalAlign: "middle",
    height: theme.spacing(12),
    boxSizing: "border-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  "& .MuiTableCell-root:first-of-type": {
    width: "3%",
  },
  "& .MuiTableCell-root:nth-of-type(2)": {
    whiteSpace: "normal",
    width: "9%",
  },
  "& .MuiTableCell-root:nth-of-type(3)": { width: "4%" },
  "& .MuiTableCell-root:nth-of-type(4)": { width: "4%" },
  "& .MuiTableCell-root:nth-of-type(5)": { width: "5%" },
  "& .MuiTableCell-root:nth-of-type(6)": { width: "8%" },
  "& .MuiTableCell-root:nth-of-type(7)": { width: "7%" },
  "& .MuiTableCell-root:nth-of-type(8)": { width: "6%" },
  "& .MuiTableCell-root:nth-of-type(9)": { width: "5%" },
  "& .MuiTableCell-root:last-of-type": { width: "8%" },
}));

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: TABLE_COLORS.bgHeader,
  "& .MuiTableCell-head": {
    fontWeight: theme.typography.fontWeight500,
    color: TABLE_COLORS.textSecondary,
    borderBottom: "none",
    fontSize: `${theme.typography.fontSize16}px !important`,
    whiteSpace: "nowrap",
  },
  "& .MuiTableCell-stickyHeader": {
    top: 0,
    zIndex: 2,
    backgroundColor: TABLE_COLORS.bgHeader,
  },
  "& .MuiTableCell-head:nth-of-type(2)": {
    textAlign: "center",
  },
}));
export const StyledTableRow = styled(TableRow, {
  shouldForwardProp: (prop) => prop !== "active",
})<StyledTableRowProps>(({ active, theme }) => ({
  "&:hover": {
    backgroundColor: active
      ? alpha(theme.palette.primary.main, 0.1)
      : theme.palette.neutralColors[700],
  },
  "& .MuiTableCell-root": {
    color: TABLE_COLORS.textPrimary,
  },
  "&:last-child td": {
    borderBottom: 0,
  },
}));

export const StyledTableCell = styled(TableCell)(() => ({
  borderColor: TABLE_COLORS.border,
  wordBreak: "break-word",
  color: TABLE_COLORS.textPrimary,
}));

export const IndexText = styled(Box)<MutedStateProps>(({ theme }) => ({
  color: TABLE_COLORS.textPrimary,
  fontSize: `${theme.typography.fontSize16}px`,
  fontVariantNumeric: "tabular-nums",
}));

export const NumericText = styled(Box)<MutedStateProps>(
  ({ inactive, theme }) => ({
    color: inactive
      ? theme.palette.neutralColors[400]
      : TABLE_COLORS.textPrimary,
    fontSize: `${theme.typography.fontSize14}px`,
    fontVariantNumeric: "tabular-nums",
    whiteSpace: "nowrap",
  }),
);

export const ScoreBadge = styled(Box)<MutedStateProps>(
  ({ inactive, theme }) => ({
    color: inactive
      ? theme.palette.neutralColors[300]
      : theme.palette.warning.main,
    fontSize: `${theme.typography.fontSize14}px`,
    fontWeight: theme.typography.fontWeight700,
    fontVariantNumeric: "tabular-nums",
  }),
);

export const RecognizerChip = styled(Box, {
  shouldForwardProp: (prop) => prop !== "chipColor" && prop !== "inactive",
})<RecognizerChipProps>(({ inactive, theme }) => ({
  display: "inline",
  color: inactive
    ? theme.palette.neutralColors[300]
    : theme.palette.primaryColors[400],
  fontSize: `${theme.typography.fontSize14}px`,
}));

export const HighlightedEntity = styled("span")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  minHeight: theme.spacing(6),
  padding: theme.spacing(0, 0.5),
  marginRight: theme.spacing(0.5),
  borderRadius: theme.spacing(0.5),
  backgroundColor: TABLE_COLORS.entityBg,
  color: theme.palette.warning.main,
  fontWeight: theme.typography.fontWeight500,
  cursor: "default",
  boxShadow: "none",
}));

export const OutputHighlightedToken = styled("span")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  minHeight: theme.spacing(6),
  padding: theme.spacing(0.25, 1),
  marginRight: theme.spacing(0.5),
  borderRadius: theme.spacing(1),
  backgroundColor: TABLE_COLORS.highlightTokenBg,
  color: TABLE_COLORS.highlightTokenText,
  cursor: "default",
  boxShadow: "none",
}));

export const EntityBadge = styled(Box, {
  shouldForwardProp: (prop) => prop !== "badgeColor",
})<EntityBadgeProps & MutedStateProps>(({ badgeColor, inactive, theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(1, 2),
  backgroundColor: badgeColor,
  color: inactive
    ? alpha(TABLE_COLORS.entityBadge, 0.58)
    : TABLE_COLORS.entityBadge,
  fontSize: `${theme.typography.fontSize12}px`,
  fontWeight: theme.typography.fontWeight700,
  whiteSpace: "nowrap",
  opacity: inactive ? 0.52 : 1,
}));

export const DecisionFactorBadge = styled(Box, {
  shouldForwardProp: (prop) => prop !== "level",
})<DecisionFactorBadgeProps & MutedStateProps>(
  ({ level, theme, inactive }) => ({
    display: "inline",
    fontSize: `${theme.typography.fontSize14}px`,
    whiteSpace: "nowrap",
    color: getDecisionTextColor(theme, level, inactive),
  }),
);

export const ActionToggleButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<ActionToggleButtonProps>(({ theme }) => ({
  minWidth: theme.spacing(22.5),
  minHeight: theme.spacing(6),
  padding: `${theme.spacing(1)} ${theme.spacing(3)} !important`,
  borderRadius: `${theme.spacing(1)} !important`,
  border: "1px solid transparent",
  backgroundColor: `${TABLE_COLORS.actionBtnBg} !important` as string,
  backgroundImage: "none !important" as string,
  color: `${TABLE_COLORS.actionBtnText} !important`,
  fontFamily: `${theme.typography.fontFamily} !important`,
  fontSize: `${theme.typography.fontSize12}px !important`,
  fontWeight: `${theme.typography.fontWeight700} !important`,
  textAlign: "center",
  textTransform: "none",
  boxShadow: "none",
  justifyContent: "center",
  "& .MuiButton-endIcon": {
    marginLeft: theme.spacing(0.5),
    color: theme.palette.neutralColors[700],
  },
  "&:hover": {
    borderColor: "transparent",
    backgroundColor: `${theme.palette.primaryColors[200]} !important` as string,
    backgroundImage: "none !important" as string,
    boxShadow: "none",
  },
}));

export const ResultCtaSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(6),
}));

export const ResultCtaTextGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
}));

export const ResultCtaTitle = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: `${theme.typography.fontSize20}px`,
  fontWeight: theme.typography.fontWeight700,
  backgroundClip: "text",
  color: theme.palette.primaryColors[50],
}));

export const ResultCtaSubtitle = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: `${theme.typography.fontSize14}px`,
  color: theme.palette.textColors[200],
  maxWidth: theme.spacing(150),
}));

export const ResultCtaButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  height: theme.spacing(14),
  minWidth: 0,
  padding: theme.spacing(3.5, 4),
  borderRadius: theme.spacing(2),
  backgroundImage: TABLE_COLORS.resultButton,
  backgroundColor: "transparent",
  color: theme.palette.textColors[50],
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize20,
  textTransform: "none",
  "&:hover": {
    backgroundImage: `linear-gradient(167deg, ${theme.palette.primaryColors[700]} 0%, ${theme.palette.primaryColors[900]} 100%)`,
    filter: "brightness(1.08)",
  },
}));
