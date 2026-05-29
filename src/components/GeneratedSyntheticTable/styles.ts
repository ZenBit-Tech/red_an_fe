import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import { Download as LuDownload } from "lucide-react";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

interface GeneratedTableProps {
  tableWidth: number;
}

interface RegenerateActionIconProps {
  isHidden?: boolean;
}

interface DownloadActionIconProps {
  isHidden?: boolean;
}

interface HeaderActionButtonLabelProps {
  isHidden?: boolean;
}

const TABLET_MEDIA_QUERY =
  "@media (min-width: 768px) and (max-width: 1023.95px)";

export const TableCard = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  border: `1px solid ${alpha(theme.palette.strokeColors[400], 0.8)}`,
  backgroundColor: theme.palette.neutralColors[900],
  padding: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  [TABLET_MEDIA_QUERY]: {
    padding: theme.spacing(6.25),
    gap: theme.spacing(4),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3),
  },
}));

export const TableHeaderSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
}));

export const DownloadInfoBanner = styled(Box)(({ theme }) => ({
  width: "100%",
  borderRadius: theme.spacing(2),
  border: `1px solid ${theme.palette.primaryColors[200]}`,
  backgroundColor: alpha(theme.palette.primaryColors[200], 0.06),
  padding: theme.spacing(4.25),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  [TABLET_MEDIA_QUERY]: {
    padding: theme.spacing(4),
  },
}));

export const DownloadInfoHeader = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const DownloadInfoIcon = styled("span")(({ theme }) => ({
  width: theme.spacing(4),
  height: theme.spacing(4),
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primaryColors[100],
  lineHeight: 0,
}));

export const DownloadInfoSvg = styled("svg")(() => ({
  width: "100%",
  height: "100%",
  display: "block",
  maxWidth: "none",
  fill: "currentColor",
}));

export const DownloadInfoTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[100],
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight700,
  lineHeight: theme.spacing(5),
  letterSpacing: 0,
}));

export const DownloadInfoDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight400,
  lineHeight: theme.spacing(5),
  letterSpacing: 0,
}));

export const TableHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(2),
  [TABLET_MEDIA_QUERY]: {
    alignItems: "center",
    gap: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "stretch",
  },
}));

export const TableTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[50],
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight700,
  [TABLET_MEDIA_QUERY]: {
    lineHeight: theme.spacing(7),
  },
}));

export const TableHeaderActions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  [TABLET_MEDIA_QUERY]: {
    gap: theme.spacing(4),
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    justifyContent: "stretch",
    "& > *": {
      flex: 1,
    },
  },
}));

export const RegenerateActionIcon = styled(RefreshRoundedIcon, {
  shouldForwardProp: (prop) => prop !== "isHidden",
})<RegenerateActionIconProps>(({ theme, isHidden }) => ({
  width: theme.spacing(4.5),
  height: theme.spacing(4.5),
  fontSize: `${theme.spacing(4.5)} !important`,
  visibility: isHidden ? "hidden" : "visible",
}));

export const DownloadActionIcon = styled(LuDownload, {
  shouldForwardProp: (prop) => prop !== "isHidden",
})<DownloadActionIconProps>(({ theme, isHidden }) => ({
  width: theme.spacing(4.5),
  height: theme.spacing(4.5),
  strokeWidth: 2,
  visibility: isHidden ? "hidden" : "visible",
}));

export const HeaderActionButtonContent = styled("span")(() => ({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const HeaderActionButtonLabel = styled("span", {
  shouldForwardProp: (prop) => prop !== "isHidden",
})<HeaderActionButtonLabelProps>(({ isHidden }) => ({
  visibility: isHidden ? "hidden" : "visible",
}));

export const HeaderActionButtonSpinner = styled(CircularProgress)(
  ({ theme }) => ({
    position: "absolute",
    color: theme.palette.primaryColors[50],
    opacity: 1,
    "& .MuiCircularProgress-circle": {
      strokeLinecap: "round",
    },
  }),
);

export const HeaderActionButton = styled(Button)(({ theme }) => ({
  width: theme.spacing(36.5),
  height: theme.spacing(10),
  minWidth: theme.spacing(36.5),
  minHeight: theme.spacing(10),
  padding: theme.spacing(3, 4),
  gap: theme.spacing(2),
  borderRadius: theme.spacing(2),
  textTransform: "none",
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight500,
  lineHeight: theme.spacing(6),
  border: `${theme.spacing(0.2)} solid ${theme.palette.neutralColors[700]}`,
  backgroundImage: "none",
  backgroundColor: theme.palette.neutralColors[900],
  color: theme.palette.primaryColors[50],
  whiteSpace: "nowrap",
  boxShadow: "none",
  [TABLET_MEDIA_QUERY]: {
    width: "auto",
    minWidth: 0,
    padding: theme.spacing(2.5, 3),
    fontSize: theme.typography.fontSize16,
    lineHeight: theme.spacing(6),
  },
  "& .MuiButton-startIcon": {
    margin: 0,
  },
  "&:hover": {
    backgroundImage: "none",
    backgroundColor: theme.palette.neutralColors[800],
    borderColor: theme.palette.neutralColors[600],
    boxShadow: "none",
  },
  "&.Mui-disabled": {
    backgroundImage: "none",
    backgroundColor: alpha(theme.palette.neutralColors[900], 0.5),
    borderColor: alpha(theme.palette.neutralColors[700], 0.5),
    color: alpha(theme.palette.primaryColors[50], 0.5),
  },
  "&.Mui-disabled .MuiCircularProgress-root": {
    color: theme.palette.primaryColors[50],
    opacity: 1,
  },
}));

export const GeneratedTableContainer = styled(TableContainer)(({ theme }) => ({
  border: `1px solid ${alpha(theme.palette.strokeColors[400], 0.8)}`,
  borderRadius: theme.spacing(2),
  overflowX: "hidden",
  overflowY: "hidden",
  boxSizing: "border-box",
}));

export const GeneratedTableHeadContainer = styled(Box)(({ theme }) => ({
  overflowX: "auto",
  overflowY: "hidden",
  borderBottom: `${theme.spacing(0.25)} solid ${theme.palette.neutralColors[800]}`,
  backgroundColor: theme.palette.neutralColors[800],
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

export const GeneratedTableBodyContainer = styled(TableContainer)(
  ({ theme }) => ({
    maxHeight: theme.spacing(100),
    overflowY: "auto",
    overflowX: "auto",
    scrollbarGutter: "stable",
    scrollbarWidth: "thin",
    scrollbarColor: `${theme.palette.neutralColors[600]} ${theme.palette.neutralColors[800]}`,
    "&::-webkit-scrollbar": {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: alpha(theme.palette.neutralColors[800], 0.9),
      borderRadius: theme.spacing(999),
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: alpha(theme.palette.neutralColors[500], 0.9),
      borderRadius: theme.spacing(999),
      border: `${theme.spacing(0.5)} solid ${alpha(theme.palette.neutralColors[800], 0.95)}`,
      minHeight: theme.spacing(8),
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: alpha(theme.palette.neutralColors[400], 0.95),
    },
    "&::-webkit-scrollbar-corner": {
      backgroundColor: theme.palette.neutralColors[800],
    },
    "&::-webkit-scrollbar-button": {
      width: 0,
      height: 0,
      display: "none",
    },
    [TABLET_MEDIA_QUERY]: {
      maxHeight: theme.spacing(88),
    },
  }),
);

export const GeneratedTable = styled(Table, {
  shouldForwardProp: (prop) => prop !== "tableWidth",
})<GeneratedTableProps>(({ tableWidth }) => ({
  width: `${tableWidth}px`,
  minWidth: `${tableWidth}px`,
  tableLayout: "fixed",
}));

export const GeneratedTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.neutralColors[800],
}));

export const GeneratedHeaderCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.neutralColors[800],
  color: theme.palette.primaryColors[200],
  fontWeight: theme.typography.fontWeight700,
  textTransform: "uppercase",
  fontSize: theme.typography.fontSize12,
  lineHeight: theme.spacing(4),
  letterSpacing: theme.spacing(0.15),
  padding: `${theme.spacing(2)} ${theme.spacing(3)} ${theme.spacing(2.25)}`,
  height: theme.spacing(10),
  borderBottom: 0,
  textAlign: "center",
  whiteSpace: "normal",
  wordBreak: "break-word",
}));

export const GeneratedRow = styled(TableRow)(({ theme }) => ({
  "& .MuiTableCell-root": {
    borderColor: alpha(theme.palette.strokeColors[400], 0.8),
    boxSizing: "border-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    verticalAlign: "middle",
  },
}));

export const GeneratedCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight400,
  lineHeight: theme.spacing(5.5),
  letterSpacing: 0,
  minWidth: 0,
  whiteSpace: "nowrap",
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  textAlign: "center",
  [TABLET_MEDIA_QUERY]: {
    lineHeight: theme.spacing(5.5),
  },
}));

export const GeneratedBody = styled(TableBody)(() => ({}));
