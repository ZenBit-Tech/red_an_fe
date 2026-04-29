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

  if (level === "Low") {
    return theme.palette.text.secondary;
  }

  return theme.palette.text.primary;
};

const getDecisionBackgroundColor = (
  theme: Theme,
  level: "Low" | "Medium" | "High",
  inactive: boolean | undefined,
): string => {
  if (inactive) {
    return theme.palette.neutralColors[700];
  }

  if (level === "High") {
    return alpha(theme.palette.success.main, 0.1);
  }

  if (level === "Low") {
    return theme.palette.neutralColors[700];
  }

  return alpha(theme.palette.neutralColors[300], 0.14);
};

export const AnalysisResultsWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
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
  color: theme.palette.textColors[50],
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
  [theme.breakpoints.down("md")]: {
    fontSize: `${theme.typography.fontSize16}px`,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: `${theme.typography.fontSize14}px`,
  },
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

export const PanelTitleRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const PanelTitle = styled(Box)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize16}px`,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.textColors[50],
  [theme.breakpoints.down("md")]: {
    fontSize: `${theme.typography.fontSize14}px`,
  },
}));

export const RestrictedBadge = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  padding: theme.spacing(0.5, 2),
  borderRadius: theme.spacing(1),
  backgroundColor: alpha(theme.palette.warning.main, 0.15),
  color: theme.palette.warning.main,
  fontSize: `${theme.typography.fontSize12}px`,
  fontWeight: theme.typography.fontWeight600,
}));

export const AnonymizedBadge = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  padding: theme.spacing(0.5, 2),
  borderRadius: theme.spacing(1),
  backgroundColor: alpha(theme.palette.primaryColors[700], 0.2),
  color: theme.palette.primaryColors[200],
  fontSize: `${theme.typography.fontSize12}px`,
  fontWeight: theme.typography.fontWeight600,
}));

export const PanelSurface = styled(Box)(({ theme }) => ({
  flex: 1,
  minHeight: 268,
  overflowY: "auto",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(analysisResultsStyles.panelSurfaceRadius),
  border: `1px solid ${theme.palette.neutralColors[600]}`,
  backgroundColor: theme.palette.neutralColors[800],
  [theme.breakpoints.down("sm")]: {
    minHeight: 220,
    padding: theme.spacing(1.5),
  },
}));

export const TextContent = styled(Box)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize14}px`,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.text.primary,
  lineHeight: 1.7,
  wordBreak: "break-word",
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word",
  fontFamily: theme.typography.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: `${theme.typography.fontSize12}px`,
  },
}));

export const OutputLoadingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(2),
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
  borderColor: theme.palette.neutralColors[500],
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  fontSize: `${theme.typography.fontSize12}px`,
  fontWeight: theme.typography.fontWeight500,
  "&:hover": {
    borderColor: theme.palette.neutralColors[400],
    backgroundColor: theme.palette.neutralColors[800],
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
  fontSize: `${theme.typography.fontSize16}px`,
  fontWeight: theme.typography.fontWeight600,
  color: theme.palette.text.primary,
  [theme.breakpoints.down("md")]: {
    fontSize: `${theme.typography.fontSize14}px`,
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
    fontSize: `${theme.typography.fontSize12}px`,
    verticalAlign: "middle",
    lineHeight: 1.25,
  },
  "& .MuiTableCell-root:first-of-type": {
    paddingLeft: theme.spacing(1.5),
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiTableCell-root": {
      padding: theme.spacing(analysisResultsStyles.tablePaddingMobile),
      fontSize: `${theme.typography.fontSize10}px`,
    },
    "& .MuiTableCell-root:first-of-type": {
      paddingLeft: theme.spacing(1.25),
    },
  },
}));

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.neutralColors[800],
  zIndex: 2,
  "& .MuiTableCell-head": {
    fontWeight: theme.typography.fontWeight700,
    color: theme.palette.text.secondary,
    borderBottom: `2px solid ${theme.palette.divider}`,
    fontSize: `${theme.typography.fontSize12}px`,
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
    ? alpha(theme.palette.primary.main, 0.06)
    : theme.palette.background.paper,
  "&:hover": {
    backgroundColor: active
      ? alpha(theme.palette.primary.main, 0.1)
      : theme.palette.neutralColors[700],
  },
  "& .MuiTableCell-root": {
    color: active
      ? theme.palette.text.primary
      : theme.palette.neutralColors[300],
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
    color: inactive
      ? theme.palette.neutralColors[400]
      : theme.palette.text.secondary,
    fontSize: `${theme.typography.fontSize12}px`,
    fontVariantNumeric: "tabular-nums",
  }),
);

export const NumericText = styled(Box)<MutedStateProps>(
  ({ inactive, theme }) => ({
    color: inactive
      ? theme.palette.neutralColors[400]
      : theme.palette.text.secondary,
    fontSize: `${theme.typography.fontSize12}px`,
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
})<RecognizerChipProps>(({ chipColor, inactive, theme }) => ({
  display: "inline",
  color: inactive ? theme.palette.neutralColors[300] : chipColor,
  fontSize: `${theme.typography.fontSize12}px`,
  fontWeight: theme.typography.fontWeight600,
}));

export const HighlightedEntity = styled("span")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  minHeight: 24,
  padding: theme.spacing(0.25, 1),
  marginRight: theme.spacing(0.5),
  borderRadius: theme.spacing(1),
  border: "none",
  backgroundColor: alpha(theme.palette.warning.main, 0.14),
  color: theme.palette.warning.main,
  fontWeight: theme.typography.fontWeight500,
  cursor: "default",
  lineHeight: 1.2,
  boxShadow: "none",
}));

export const OutputHighlightedToken = styled("span")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  minHeight: 24,
  padding: theme.spacing(0.25, 1),
  marginRight: theme.spacing(0.5),
  borderRadius: theme.spacing(1),
  border: "none",
  backgroundColor: alpha(theme.palette.primary.main, 0.18),
  color: theme.palette.primary.light ?? theme.palette.primary.main,
  fontWeight: theme.typography.fontWeight500,
  cursor: "default",
  lineHeight: 1.2,
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
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "3px 7px",
    borderRadius: 999,
    fontSize: `${theme.typography.fontSize12}px`,
    fontWeight: theme.typography.fontWeight600,
    whiteSpace: "nowrap",
    opacity: inactive ? 0.55 : 1,
    color: getDecisionTextColor(theme, level, inactive),
    backgroundColor: getDecisionBackgroundColor(theme, level, inactive),
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
    : `1px solid ${theme.palette.neutralColors[500]}`,
  backgroundColor: active
    ? alpha(theme.palette.primary.main, 0.14)
    : theme.palette.neutralColors[700],
  color: active ? theme.palette.primary.main : theme.palette.neutralColors[300],
  fontSize: `${theme.typography.fontSize12}px`,
  fontWeight: theme.typography.fontWeight700,
  lineHeight: 1,
  textTransform: "none",
  boxShadow: "none",
  justifyContent: "space-between",
  "& .MuiButton-endIcon": {
    marginLeft: theme.spacing(0.5),
    color: active
      ? theme.palette.primary.main
      : theme.palette.neutralColors[400],
  },
  "&:hover": {
    borderColor: active ? "transparent" : theme.palette.neutralColors[500],
    backgroundColor: active
      ? alpha(theme.palette.primary.main, 0.18)
      : theme.palette.neutralColors[700],
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
  backgroundImage: `linear-gradient(161deg, ${theme.palette.primaryColors[200]} 0%, ${theme.palette.primaryColors[700]} 100%)`,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  [theme.breakpoints.down("md")]: {
    fontSize: `${theme.typography.fontSize16}px`,
  },
}));

export const ResultCtaSubtitle = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: `${theme.typography.fontSize14}px`,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],
  maxWidth: theme.spacing(150),
}));

export const ResultCtaButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  height: theme.spacing(14),
  minWidth: 0,
  padding: theme.spacing(3, 8),
  borderRadius: theme.spacing(2),
  backgroundImage: `linear-gradient(167deg, ${theme.palette.primaryColors[700]} 0%, ${theme.palette.primaryColors[900]} 100%)`,
  backgroundColor: "transparent",
  color: theme.palette.textColors[50],
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize16,
  textTransform: "none",
  "&:hover": {
    backgroundImage: `linear-gradient(167deg, ${theme.palette.primaryColors[700]} 0%, ${theme.palette.primaryColors[900]} 100%)`,
    filter: "brightness(1.08)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
