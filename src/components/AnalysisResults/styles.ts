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
import { alpha, styled, type Theme } from "@mui/material/styles";

const analysisResultsStyles = {
  containerGapDesktop: 3,
  containerGapMobile: 2,
  containerPaddingDesktop: 3,
  containerPaddingTablet: 2.5,
  containerPaddingMobile: 2,
  containerBorderRadius: 3,
  panelGapDesktop: 2,
  panelGapMobile: 1.5,
  tableGapDesktop: 2.5,
  tableGapMobile: 1.5,
  panelPaddingDesktop: 2,
  panelPaddingMobile: 1.5,
  tablePaddingDesktop: 0.75,
  tablePaddingMobile: 0.625,
  fontSizeTitle: 1.25,
  fontSizeSubtitle: 0.875,
  fontSizeLabel: 0.95,
  fontSizeContent: 0.875,
  panelSurfaceRadius: 1.75,
  badgeRadius: 999,
  tableHeaderBarHeightDesktop: 48,
  tableHeaderBarHeightMobile: 40,
} as const;

const getDecisionTextColor = (
  theme: Theme,
  level: "Low" | "Medium" | "High",
  inactive: boolean | undefined,
): string => {
  if (inactive) {
    return theme.palette.neutralColors[300];
  }

  if (level === "High") {
    return theme.palette.success.main;
  }

  return theme.palette.text.primary;
};

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
  [theme.breakpoints.down("md")]: {
    minHeight: "auto",
  },
}));

export const AnalysisPageTitle = styled("h1")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize48,
  color: "#dae2fd",
  margin: 0,
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize26,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize24,
  },
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
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize14,
  },
}));

export const FrameworkBadge = styled(Box)(({ theme }) => ({
  width: "auto",
  height: "36px",
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.5, 3),
  borderRadius: theme.spacing(2),
  backgroundColor: alpha(theme.palette.primaryColors[900], 0.5),
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight700,
  color: "#b0c6ff",
  whiteSpace: "nowrap",
  flexShrink: 0,
}));

export const FrameworkBadgeLabel = styled("span")(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontWeight: theme.typography.fontWeight400,
}));

export const AnalysisResultsContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(analysisResultsStyles.containerGapDesktop),
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(analysisResultsStyles.containerGapMobile),
  },
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
  [theme.breakpoints.down("md")]: {
    fontSize: `${theme.typography.fontSize12}px`,
    marginBottom: theme.spacing(1.5),
  },
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
  minHeight: "300px",
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
  color: "#dae2fd",
}));

export const RestrictedBadge = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0.5, 2),
  borderRadius: theme.spacing(0.5),
  fontSize: `${theme.typography.fontSize14}px`,
  backgroundColor: "rgba(230, 81, 0, 0.3)",
  color: "#ff9800",
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
  minHeight: 268,
  overflowY: "auto",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(analysisResultsStyles.panelSurfaceRadius),
  backgroundColor: "#131b2e",
}));

export const TextContent = styled(Box)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize14}px`,
  fontWeight: theme.typography.fontWeight400,
  color: "#c3c6d4",
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
  borderRadius: "8px !important",
  border: "0.80px solid #2d3548 !important",
  backgroundImage: "none !important",
  backgroundColor: `${theme.palette.neutralColors[900]} !important`,
  fontFamily: `${theme.typography.fontFamily} !important`,
  fontWeight: `${theme.typography.fontWeight500} !important`,
  fontSize: `${theme.typography.fontSize16}px !important`,
  lineHeight: "1.5 !important",
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
  minWidth: 88,
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
  borderRadius: "8px",
  border: "1px solid rgba(178,197, 255, 0.08)",
  backgroundColor: theme.palette.background.paper,
  overflow: "hidden",
  padding: "24px",
}));
export const TableSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  marginBottom: "80px",
}));

export const TableContainerHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: "16px",
  backgroundColor: "transparent",
}));
export const TableContainerTitle = styled(Box)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize20}px`,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.text.primary,
}));

export const StyledTableHeadContainer = styled(Box)({
  overflowX: "hidden",
  overflowY: "hidden",
  paddingRight: "10px",
  border: "1px solid rgba(178, 197, 255, 0.08)",
  borderBottom: "none",
  borderRadius: "8px 8px 0 0",
  backgroundColor: "#222a3d",
});

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: "0 0 8px 8px",
  border: "1px solid rgba(178, 197, 255, 0.08)",
  borderTop: "none",
  backgroundColor: "#131b2e",
  boxShadow: "none",
  overflowX: "hidden",
  overflowY: "auto",
  maxHeight: "382px",
  scrollbarWidth: "auto",
  scrollbarColor: `${theme.palette.strokeColors[400]} transparent`,
  "&::-webkit-scrollbar": {
    width: "10px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
    marginBottom: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.strokeColors[400],
    borderRadius: "8px",
    border: "2px solid transparent",
    backgroundClip: "content-box",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: alpha(theme.palette.primaryColors[200], 0.45),
  },
  [theme.breakpoints.down("sm")]: {
    maxHeight: "290px",
  },
}));
export const StyledTable = styled(Table)(() => ({
  width: "100%",
  tableLayout: "fixed", // Блокує самодіяльність браузера по розширенню
  whiteSpace: "nowrap",
  "& .MuiTableCell-root": {
    padding: "12px 16px",
    fontSize: "14px",
    fontWeight: 400,
    verticalAlign: "middle",
    height: "48px",
    boxSizing: "border-box",
    overflow: "hidden",
    textOverflow: "ellipsis", // Додає трикрапку, якщо текст задовгий
  },

  // --- ЖОРСТКИЙ КОНТРОЛЬ ШИРИНИ (Разом 100%) ---
  "& .MuiTableCell-root:first-of-type": {
    width: "3%", // #
  },
  "& .MuiTableCell-root:nth-of-type(2)": {
    whiteSpace: "normal",
    width: "9%", // Text (Тепер тут не буде величезної дірки!)
  },
  "& .MuiTableCell-root:nth-of-type(3)": { width: "4%" }, // Start
  "& .MuiTableCell-root:nth-of-type(4)": { width: "4%" }, // End
  "& .MuiTableCell-root:nth-of-type(5)": { width: "5%" }, // Score
  "& .MuiTableCell-root:nth-of-type(6)": { width: "8%" }, // Recognizer
  "& .MuiTableCell-root:nth-of-type(7)": { width: "7%" }, // Pattern Name
  "& .MuiTableCell-root:nth-of-type(8)": { width: "6%" }, // Decision Factors
  "& .MuiTableCell-root:nth-of-type(9)": { width: "5%" }, // Original Score
  "& .MuiTableCell-root:last-of-type": {
    width: "8%", // Action
  },
}));

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: "#222a3d",
  "& .MuiTableCell-head": {
    fontWeight: theme.typography.fontWeight500,
    color: "#c3c6d4",
    borderBottom: "none",
    fontSize: "16px !important",
    whiteSpace: "nowrap",
  },
  "& .MuiTableCell-stickyHeader": {
    top: 0,
    zIndex: 2,
    backgroundColor: "#222a3d",
  },
}));
interface MutedStateProps {
  inactive?: boolean;
}

interface StyledTableRowProps {
  active: boolean;
}

export const StyledTableRow = styled(TableRow, {
  shouldForwardProp: (prop) => prop !== "active",
})<StyledTableRowProps>(({ active, theme }) => ({
  backgroundColor: "#131b2e",
  "&:hover": {
    backgroundColor: active
      ? alpha(theme.palette.primary.main, 0.1)
      : theme.palette.neutralColors[700],
  },
  "& .MuiTableCell-root": {
    color: "#dae2fd",
  },
  "&:last-child td": {
    borderBottom: 0,
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderColor: theme.palette.divider,
  wordBreak: "break-word",
  color: "#dae2fd",
}));

export const IndexText = styled(Box)<MutedStateProps>(({ theme }) => ({
  color: "#dae2fd",
  fontSize: `${theme.typography.fontSize16}px`,
  fontVariantNumeric: "tabular-nums",
}));

export const NumericText = styled(Box)<MutedStateProps>(
  ({ inactive, theme }) => ({
    color: inactive ? theme.palette.neutralColors[400] : "#dae2fd",
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
    fontSize: `${theme.typography.fontSize12}px`,
    fontWeight: theme.typography.fontWeight700,
    fontVariantNumeric: "tabular-nums",
  }),
);

interface RecognizerChipProps {
  chipColor: string;
  inactive?: boolean;
}

export const RecognizerChip = styled(Box, {
  shouldForwardProp: (prop) => prop !== "chipColor" && prop !== "inactive",
})<RecognizerChipProps>(({ inactive, theme }) => ({
  display: "inline",
  color: inactive ? theme.palette.neutralColors[300] : "#3b82ef",
  fontSize: `${theme.typography.fontSize14}px`,
  fontWeight: theme.typography.fontWeight400,
}));

export const HighlightedEntity = styled("span")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  minHeight: 24,
  padding: theme.spacing(0, 0.5),
  marginRight: theme.spacing(0.5),
  borderRadius: theme.spacing(0.5),
  backgroundColor: "rgba(230, 81, 0, 0.2)",
  color: theme.palette.warning.main,
  fontWeight: theme.typography.fontWeight500,
  cursor: "default",
  boxShadow: "none",
}));

export const OutputHighlightedToken = styled("span")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  minHeight: 24,
  padding: theme.spacing(0.25, 1),
  marginRight: theme.spacing(0.5),
  borderRadius: theme.spacing(1),
  backgroundColor: "rgba(13, 71, 161, 0.4)",
  color: "#a2c3f7",
  cursor: "default",
  boxShadow: "none",
}));

interface EntityBadgeProps {
  badgeColor: string;
}

export const EntityBadge = styled(Box, {
  shouldForwardProp: (prop) => prop !== "badgeColor",
})<EntityBadgeProps & MutedStateProps>(({ badgeColor, inactive, theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "3px 7px",
  borderRadius: 999,
  backgroundColor: badgeColor,
  color: inactive ? alpha("#7A2848", 0.58) : "#7A2848",
  fontSize: `${theme.typography.fontSize12}px`,
  fontWeight: theme.typography.fontWeight700,
  lineHeight: 1,
  whiteSpace: "nowrap",
  opacity: inactive ? 0.52 : 1,
}));

interface DecisionFactorBadgeProps {
  level: "Low" | "Medium" | "High";
}

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

interface ActionToggleButtonProps {
  active: boolean;
}

export const ActionToggleButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<ActionToggleButtonProps>(({ theme }) => ({
  minWidth: 90,
  minHeight: 24,
  padding: "4px 12px !important",
  borderRadius: "4px !important",
  border: "1px solid transparent",
  backgroundColor: "#b0c6ff !important" as string,
  backgroundImage: "none !important" as string,
  color: "#2d3449 !important" as string,
  fontFamily: `${theme.typography.fontFamily} !important`,
  fontSize: "12px !important",
  fontWeight: "700 !important" as unknown as number,
  lineHeight: "133% !important",
  textAlign: "center",
  textTransform: "none",
  boxShadow: "none",
  justifyContent: "center",
  "& .MuiButton-endIcon": {
    marginLeft: theme.spacing(0.5),
    color: "#2d3449",
  },
  "&:hover": {
    borderColor: "transparent",
    backgroundColor: "#b0c6ff !important" as string,
    backgroundImage: "none !important" as string,
    boxShadow: "none",
  },
}));

export const ResultCtaSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
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
  color: "#dae2fd",
}));

export const ResultCtaSubtitle = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: `${theme.typography.fontSize14}px`,
  fontWeight: theme.typography.fontWeight400,
  color: "#c3c6d4",
  maxWidth: theme.spacing(150),
}));

export const ResultCtaButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  height: theme.spacing(14),
  minWidth: 0,
  padding: theme.spacing(3.5, 4),
  borderRadius: theme.spacing(2),
  backgroundImage: `linear-gradient(167deg, #0d47a1 0%, #002d6f 100%);`,
  backgroundColor: "transparent",
  color: "#FFF",
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize20,
  textTransform: "none",
  "&:hover": {
    backgroundImage: `linear-gradient(167deg, ${theme.palette.primaryColors[700]} 0%, ${theme.palette.primaryColors[900]} 100%)`,
    filter: "brightness(1.08)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
