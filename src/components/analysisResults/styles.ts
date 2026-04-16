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
  styled,
} from "@mui/material";

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

export const AnalysisResultsContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(analysisResultsStyles.containerGapDesktop),
  padding: theme.spacing(analysisResultsStyles.containerPaddingDesktop),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(analysisResultsStyles.containerBorderRadius),
  backgroundColor: theme.palette.background.default,
  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.04)",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(analysisResultsStyles.containerPaddingTablet),
  },
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(analysisResultsStyles.containerGapMobile),
    padding: theme.spacing(analysisResultsStyles.containerPaddingMobile),
  },
}));

export const AnalysisResultsTitle = styled(Box)(({ theme }) => ({
  fontSize: `${analysisResultsStyles.fontSizeTitle}rem`,
  fontWeight: 600,
  color: theme.palette.text.primary,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.05rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem",
  },
}));

export const AnalysisResultsSubtitle = styled(Box)(({ theme }) => ({
  fontSize: `${analysisResultsStyles.fontSizeSubtitle}rem`,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    fontSize: "0.82rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
    marginBottom: theme.spacing(1.5),
  },
}));

export const PanelsContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.spacing(analysisResultsStyles.panelGapDesktop),
  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(analysisResultsStyles.panelGapDesktop),
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(analysisResultsStyles.panelGapMobile),
  },
}));

export const ResultPanel = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  padding: theme.spacing(analysisResultsStyles.panelPaddingDesktop),
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(2),
  minHeight: "300px",
  boxShadow: "none",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(analysisResultsStyles.panelPaddingMobile),
    minHeight: "250px",
  },
}));

export const PanelHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "stretch",
    gap: theme.spacing(1),
  },
}));

export const PanelHeaderCopy = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.25),
}));

export const PanelLabel = styled(Box)(({ theme }) => ({
  fontSize: `${analysisResultsStyles.fontSizeLabel}rem`,
  fontWeight: 600,
  color: theme.palette.text.primary,
  [theme.breakpoints.down("md")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.82rem",
  },
}));

export const PanelDescription = styled(Box)(({ theme }) => ({
  fontSize: "0.8rem",
  color: theme.palette.text.secondary,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.74rem",
  },
}));

export const PanelSurface = styled(Box)(({ theme }) => ({
  flex: 1,
  minHeight: 268,
  overflowY: "auto",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(analysisResultsStyles.panelSurfaceRadius),
  border: `1px solid ${theme.palette.grey[200]}`,
  backgroundColor: theme.palette.grey[50],
  [theme.breakpoints.down("sm")]: {
    minHeight: 220,
    padding: theme.spacing(1.5),
  },
}));

export const TextContent = styled(Box)(({ theme }) => ({
  fontSize: `${analysisResultsStyles.fontSizeContent}rem`,
  color: theme.palette.text.primary,
  lineHeight: 1.7,
  wordBreak: "break-word",
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word",
  fontFamily:
    '"IBM Plex Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
}));

export const PanelActions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  justifyContent: "flex-start",
  flexWrap: "wrap",
}));

export const PanelActionButton = styled(Button)(({ theme }) => ({
  minWidth: 0,
  padding: theme.spacing(0.75, 1.25),
  borderRadius: theme.spacing(1),
  borderColor: theme.palette.grey[300],
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  fontSize: "0.75rem",
  fontWeight: 500,
  "&:hover": {
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[50],
  },
}));

export const DownloadFormatSelect = styled(Select)(({ theme }) => ({
  minWidth: 88,
  "& .MuiSelect-select": {
    paddingTop: theme.spacing(0.55),
    paddingBottom: theme.spacing(0.55),
    paddingLeft: theme.spacing(1),
    fontSize: "0.72rem",
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.grey[300],
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.grey[400],
  },
}));

export const TableSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  marginTop: theme.spacing(analysisResultsStyles.tableGapDesktop),
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(analysisResultsStyles.tableGapMobile),
    marginTop: theme.spacing(analysisResultsStyles.tableGapMobile),
  },
}));

export const TableContainerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(1.25, 1.75),
  minHeight: analysisResultsStyles.tableHeaderBarHeightDesktop,
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  position: "sticky",
  top: 0,
  zIndex: 3,
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1, 1.25),
    minHeight: analysisResultsStyles.tableHeaderBarHeightMobile,
  },
}));

export const TableContainerTitle = styled(Box)(({ theme }) => ({
  fontSize: `${analysisResultsStyles.fontSizeLabel}rem`,
  fontWeight: 600,
  color: theme.palette.text.primary,
  [theme.breakpoints.down("md")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.82rem",
  },
}));

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: theme.spacing(1.5),
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  boxShadow: "none",
  overflowX: "auto",
  maxHeight: "430px",
  [theme.breakpoints.down("sm")]: {
    maxHeight: "340px",
  },
}));

export const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 1060,
  "& .MuiTableCell-root": {
    padding: theme.spacing(analysisResultsStyles.tablePaddingDesktop),
    fontSize: "0.75rem",
    verticalAlign: "middle",
    lineHeight: 1.25,
  },
  "& .MuiTableCell-root:first-of-type": {
    paddingLeft: theme.spacing(1.5),
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiTableCell-root": {
      padding: theme.spacing(analysisResultsStyles.tablePaddingMobile),
      fontSize: "0.72rem",
    },
    "& .MuiTableCell-root:first-of-type": {
      paddingLeft: theme.spacing(1.25),
    },
  },
}));

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  zIndex: 2,
  "& .MuiTableCell-head": {
    fontWeight: 700,
    color: theme.palette.text.secondary,
    borderBottom: `2px solid ${theme.palette.divider}`,
    fontSize: "0.69rem",
    whiteSpace: "nowrap",
    lineHeight: 1.2,
  },
  "& .MuiTableCell-stickyHeader": {
    top: analysisResultsStyles.tableHeaderBarHeightDesktop,
    zIndex: 2,
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiTableCell-stickyHeader": {
      top: analysisResultsStyles.tableHeaderBarHeightMobile,
    },
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
  backgroundColor: active
    ? "rgba(21, 101, 192, 0.03)"
    : theme.palette.common.white,
  "&:hover": {
    backgroundColor: active
      ? "rgba(21, 101, 192, 0.05)"
      : theme.palette.common.white,
  },
  "& .MuiTableCell-root": {
    color: active ? theme.palette.text.primary : theme.palette.grey[400],
  },
  "&:last-child td": {
    borderBottom: 0,
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderColor: theme.palette.divider,
  wordBreak: "break-word",
  color: theme.palette.text.primary,
}));

export const IndexText = styled(Box)<MutedStateProps>(
  ({ inactive, theme }) => ({
    color: inactive ? theme.palette.grey[400] : theme.palette.text.secondary,
    fontSize: "0.71rem",
    fontVariantNumeric: "tabular-nums",
  }),
);

export const NumericText = styled(Box)<MutedStateProps>(
  ({ inactive, theme }) => ({
    color: inactive ? theme.palette.grey[400] : theme.palette.text.secondary,
    fontSize: "0.72rem",
    fontVariantNumeric: "tabular-nums",
    whiteSpace: "nowrap",
  }),
);

export const ScoreBadge = styled(Box)<MutedStateProps>(
  ({ inactive, theme }) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 36,
    padding: theme.spacing(0.125, 0.5),
    borderRadius: theme.spacing(analysisResultsStyles.badgeRadius / 8),
    border: inactive
      ? `1px solid ${theme.palette.grey[200]}`
      : `1px solid rgba(245, 127, 23, 0.28)`,
    backgroundColor: inactive
      ? theme.palette.grey[50]
      : "rgba(245, 127, 23, 0.08)",
    color: inactive ? theme.palette.grey[500] : theme.palette.warning.main,
    fontSize: "0.67rem",
    fontWeight: 700,
    fontVariantNumeric: "tabular-nums",
  }),
);

interface HighlightedEntityProps {
  highlightColor: string;
}

export const HighlightedEntity = styled("span", {
  shouldForwardProp: (prop) => prop !== "highlightColor",
})<HighlightedEntityProps>(({ highlightColor, theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  minHeight: 22,
  padding: "1px 6px",
  marginRight: 2,
  borderRadius: 6,
  border: `1px solid ${theme.palette.background.paper}`,
  backgroundColor: highlightColor,
  color: theme.palette.text.primary,
  fontWeight: 500,
  cursor: "default",
  boxShadow: "0 1px 2px rgba(15, 23, 42, 0.08)",
}));

interface EntityBadgeProps {
  badgeColor: string;
}

export const EntityBadge = styled(Box, {
  shouldForwardProp: (prop) => prop !== "badgeColor",
})<EntityBadgeProps & MutedStateProps>(({ badgeColor, inactive }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "3px 7px",
  borderRadius: 999,
  backgroundColor: badgeColor,
  color: inactive ? "rgba(122, 40, 72, 0.58)" : "#7A2848",
  fontSize: "0.64rem",
  fontWeight: 700,
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
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "3px 7px",
    borderRadius: 999,
    fontSize: "0.65rem",
    fontWeight: 600,
    whiteSpace: "nowrap",
    opacity: inactive ? 0.55 : 1,
    color: inactive
      ? theme.palette.grey[500]
      : level === "High"
        ? theme.palette.success.main
        : level === "Low"
          ? theme.palette.text.secondary
          : theme.palette.text.primary,
    backgroundColor: inactive
      ? theme.palette.grey[100]
      : level === "High"
        ? "rgba(46, 125, 50, 0.10)"
        : level === "Low"
          ? theme.palette.grey[100]
          : "rgba(148, 163, 184, 0.14)",
  }),
);

interface ActionToggleButtonProps {
  active: boolean;
}

export const ActionToggleButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<ActionToggleButtonProps>(({ active, theme }) => ({
  minWidth: 90,
  minHeight: 24,
  padding: theme.spacing(0.3, 0.875),
  borderRadius: theme.spacing(0.85),
  border: active
    ? "1px solid transparent"
    : `1px solid ${theme.palette.grey[300]}`,
  backgroundColor: active
    ? "rgba(47, 128, 237, 0.14)"
    : theme.palette.grey[100],
  color: active ? theme.palette.primary.main : theme.palette.grey[500],
  fontSize: "0.66rem",
  fontWeight: 700,
  lineHeight: 1,
  textTransform: "none",
  boxShadow: "none",
  justifyContent: "space-between",
  "& .MuiButton-endIcon": {
    marginLeft: theme.spacing(0.5),
    color: active ? theme.palette.primary.main : theme.palette.grey[400],
  },
  "&:hover": {
    borderColor: active ? "transparent" : theme.palette.grey[300],
    backgroundColor: active
      ? "rgba(47, 128, 237, 0.18)"
      : theme.palette.grey[100],
    boxShadow: "none",
  },
}));
