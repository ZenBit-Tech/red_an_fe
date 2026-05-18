import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import { Download as LuDownload } from "lucide-react";
import {
  Alert,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

interface CollapsibleCardProps {
  isOpen: boolean;
}

interface GeneratedTableProps {
  tableWidth: number;
}

export const SyntheticPageWrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  boxSizing: "border-box",
  padding: theme.spacing(9, 10),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

export const SyntheticPageContent = styled(Box)(({ theme }) => ({
  maxWidth: theme.spacing(262.5),
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
}));

export const HeaderGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  width: "100%",
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[50],
  fontSize: theme.typography.fontSize48,
  fontWeight: theme.typography.fontWeight700,
  lineHeight: 1,
  whiteSpace: "nowrap",
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize38,
    whiteSpace: "normal",
  },
}));

export const PageTitleHighlight = styled("span")(({ theme }) => ({
  backgroundImage: `linear-gradient(161deg, ${theme.palette.primaryColors[200]} 0%, ${theme.palette.primaryColors[700]} 100%)`,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
}));

export const PageSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight500,
  maxWidth: theme.spacing(181.75),
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize16,
    maxWidth: "100%",
  },
}));

export const SettingsCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.neutralColors[900],
  border: `1px solid ${theme.palette.strokeColors[400]}`,
  borderRadius: theme.spacing(4),
  padding: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(8),
}));

export const SettingsHeader = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 0,
}));

export const SettingsTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[100],
  fontSize: theme.typography.fontSize24,
  fontWeight: theme.typography.fontWeight700,
}));

export const SettingsDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize14,
}));

export const SettingsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  gap: theme.spacing(2),
  minHeight: theme.spacing(12.5),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

export const InputLabel = styled(Typography)(({ theme }) => ({
  width: theme.spacing(42.75),
  color: theme.palette.primaryColors[50],
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight500,
  lineHeight: theme.spacing(7),
  margin: 0,
}));

export const NumberField = styled(TextField)(({ theme }) => ({
  width: theme.spacing(30),
  "& .MuiInputBase-root": {
    height: theme.spacing(12.5),
    backgroundColor: theme.palette.backgroundColor,
    borderRadius: theme.spacing(1),
    color: theme.palette.textColors[50],
    transition: "box-shadow 120ms ease, border-color 120ms ease",
  },
  "& .MuiInputBase-input": {
    textAlign: "center",
    fontSize: theme.typography.fontSize16,
    fontWeight: theme.typography.fontWeight500,
    padding: 0,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: alpha(theme.palette.strokeColors[400], 0.8),
  },
  "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: alpha(theme.palette.primaryColors[200], 0.8),
  },
  "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primaryColors[200],
    borderWidth: theme.spacing(0.25),
  },
  "& .MuiInputBase-root.Mui-focused": {
    boxShadow: `0 0 0 ${theme.spacing(0.5)} ${alpha(theme.palette.primaryColors[200], 0.15)}`,
  },
}));

export const SourceDataSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

export const SourceDataTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[100],
  fontSize: theme.typography.fontSize24,
  fontWeight: theme.typography.fontWeight500,
}));

export const SourceDataDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize14,
}));

export const GenerateButton = styled(Button)(({ theme }) => ({
  alignSelf: "flex-end",
  width: theme.spacing(75),
  height: theme.spacing(14),
  borderRadius: theme.spacing(2),
  textTransform: "none",
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize20,
  lineHeight: theme.spacing(7),
  whiteSpace: "nowrap",
  color: theme.palette.textColors[50],
  backgroundImage: `linear-gradient(141deg, ${theme.palette.primaryColors[700]} 0%, ${theme.palette.primaryColors[900]} 100%)`,
  marginTop: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    minWidth: "100%",
  },
}));

export const ErrorAlert = styled(Alert)(({ theme }) => ({
  borderRadius: theme.spacing(2),
}));

export const CollapsibleCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<CollapsibleCardProps>(({ theme, isOpen }) => ({
  minHeight: isOpen ? theme.spacing(103.25) : theme.spacing(21),
  borderRadius: theme.spacing(2),
  border: `1px solid ${alpha(theme.palette.strokeColors[400], 0.5)}`,
  backgroundColor: alpha(theme.palette.neutralColors[900], 0.8),
  overflow: "hidden",
}));

export const CollapsibleHeader = styled(Button)(({ theme }) => ({
  width: "100%",
  justifyContent: "space-between",
  textTransform: "none",
  color: theme.palette.primaryColors[50],
  minHeight: theme.spacing(21),
  padding: theme.spacing(6.25),
  backgroundImage: "none !important",
  backgroundColor: `${theme.palette.neutralColors[900]} !important`,
  boxShadow: "none !important",
  border: "none",
  borderRadius: 0,
  "&:hover": {
    backgroundImage: "none !important",
    backgroundColor: `${theme.palette.neutralColors[900]} !important`,
    boxShadow: "none !important",
  },
  "&.Mui-disabled": {
    backgroundImage: "none !important",
    backgroundColor: `${theme.palette.neutralColors[900]} !important`,
  },
  "& .MuiSvgIcon-root": {
    fontSize: theme.spacing(6),
    color: theme.palette.primaryColors[100],
  },
}));

export const CollapsibleTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight400,
  lineHeight: theme.spacing(7),
}));

export const CollapsibleBody = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 6.25, 6.25),
}));

export const PreviewSurface = styled(Box)(({ theme }) => ({
  minHeight: theme.spacing(70.25),
  maxHeight: theme.spacing(70.25),
  overflowY: "auto",
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.backgroundColor,
  border: `1px solid ${alpha(theme.palette.strokeColors[400], 0.7)}`,
  padding: theme.spacing(4),
  scrollbarWidth: "auto",
  scrollbarColor: `${alpha(theme.palette.neutralColors[400], 0.8)} transparent`,
  "&::-webkit-scrollbar": {
    width: theme.spacing(3),
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: alpha(theme.palette.neutralColors[400], 0.8),
    borderRadius: theme.spacing(1.5),
    border: `2px solid ${alpha(theme.palette.neutralColors[900], 0.5)}`,
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: alpha(theme.palette.neutralColors[300], 0.9),
  },
}));

export const PreviewText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize14,
  lineHeight: 1.6,
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  paddingRight: theme.spacing(2),
}));

export const PreviewToken = styled("span")(({ theme }) => ({
  display: "inline-block",
  padding: theme.spacing(0.125, 0.75),
  borderRadius: theme.spacing(0.5),
  backgroundColor: alpha(theme.palette.primaryColors[700], 0.25),
  color: theme.palette.primaryColors[100],
}));

export const CharacterCount = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(4),
  color: alpha(theme.palette.textColors[200], 0.8),
  fontSize: theme.typography.fontSize12,
  lineHeight: theme.spacing(2),
  textAlign: "right",
}));

export const EmptyState = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  border: `1px dashed ${alpha(theme.palette.strokeColors[400], 0.9)}`,
  padding: theme.spacing(6),
  color: theme.palette.textColors[200],
  textAlign: "center",
}));

export const TableCard = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  border: `1px solid ${alpha(theme.palette.strokeColors[400], 0.8)}`,
  backgroundColor: theme.palette.neutralColors[900],
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3),
  },
}));

export const TableHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "stretch",
  },
}));

export const TableTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[50],
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight700,
}));

export const TableHeaderActions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    justifyContent: "stretch",
    "& > *": {
      flex: 1,
    },
  },
}));

export const RegenerateActionIcon = styled(RefreshRoundedIcon)(({ theme }) => ({
  width: theme.spacing(4.5),
  height: theme.spacing(4.5),
  fontSize: `${theme.spacing(4.5)} !important`,
}));

export const DownloadActionIcon = styled(LuDownload)(({ theme }) => ({
  width: theme.spacing(4.5),
  height: theme.spacing(4.5),
  strokeWidth: 2,
}));

export const HeaderActionButton = styled(Button)(({ theme }) => ({
  minHeight: theme.spacing(12),
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
    scrollbarWidth: "auto",
    scrollbarColor: `${theme.palette.neutralColors[600]} ${theme.palette.neutralColors[800]}`,
    "&::-webkit-scrollbar": {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: theme.palette.neutralColors[800],
      borderRadius: theme.spacing(999),
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.neutralColors[600],
      borderRadius: theme.spacing(999),
      border: `${theme.spacing(0.25)} solid ${theme.palette.neutralColors[800]}`,
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: theme.palette.neutralColors[500],
    },
    "&::-webkit-scrollbar-corner": {
      backgroundColor: theme.palette.neutralColors[800],
    },
    "&::-webkit-scrollbar-button": {
      width: 0,
      height: 0,
      display: "none",
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
    color: theme.palette.textColors[200],
    boxSizing: "border-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    verticalAlign: "middle",
  },
}));

export const GeneratedCell = styled(TableCell)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  minWidth: 0,
  whiteSpace: "nowrap",
  padding: theme.spacing(2),
  textAlign: "center",
}));

export const GeneratedBody = styled(TableBody)(() => ({}));
