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
  maxWidth: theme.spacing(131.25),
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
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[50],
  fontSize: theme.typography.fontSize48,
  fontWeight: theme.typography.fontWeight700,
  lineHeight: theme.spacing(8),
}));

export const PageSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight500,
}));

export const SettingsCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.neutralColors[900],
  border: `1px solid ${theme.palette.strokeColors[400]}`,
  borderRadius: theme.spacing(4),
  padding: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
}));

export const SettingsHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
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
}));

export const InputLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[50],
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight500,
  margin: 0,
}));

export const NumberField = styled(TextField)(({ theme }) => ({
  width: theme.spacing(15),
  "& .MuiInputBase-root": {
    height: theme.spacing(6.25),
    backgroundColor: theme.palette.backgroundColor,
    borderRadius: theme.spacing(1),
    color: theme.palette.textColors[50],
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
  "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primaryColors[300],
  },
}));

export const SourceDataSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
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
  width: theme.spacing(37.5),
  height: theme.spacing(7),
  borderRadius: theme.spacing(2),
  textTransform: "none",
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize20,
  color: theme.palette.textColors[50],
  backgroundImage: `linear-gradient(141deg, ${theme.palette.primaryColors[700]} 0%, ${theme.palette.primaryColors[900]} 100%)`,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    minWidth: "100%",
  },
}));

export const ErrorAlert = styled(Alert)(({ theme }) => ({
  borderRadius: theme.spacing(2),
}));

export const CollapsibleCard = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  border: `1px solid ${alpha(theme.palette.strokeColors[400], 0.7)}`,
  backgroundColor: alpha(theme.palette.neutralColors[900], 0.8),
  overflow: "hidden",
}));

export const CollapsibleHeader = styled(Button)(({ theme }) => ({
  width: "100%",
  justifyContent: "space-between",
  textTransform: "none",
  color: theme.palette.primaryColors[50],
  minHeight: theme.spacing(10.5),
  padding: theme.spacing(3, 3),
  backgroundColor: "transparent",
  borderRadius: 0,
  "& .MuiSvgIcon-root": {
    color: theme.palette.primaryColors[100],
  },
}));

export const CollapsibleTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight700,
}));

export const CollapsibleBody = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 3, 3),
  borderTop: `1px solid ${alpha(theme.palette.strokeColors[400], 0.6)}`,
}));

export const PreviewSurface = styled(Box)(({ theme }) => ({
  minHeight: theme.spacing(35.125),
  maxHeight: theme.spacing(35.125),
  overflowY: "auto",
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.backgroundColor,
  padding: theme.spacing(2),
  scrollbarWidth: "thin",
  scrollbarColor: `${alpha(theme.palette.primaryColors[100], 0.35)} transparent`,
  "&::-webkit-scrollbar": {
    width: theme.spacing(1),
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: alpha(theme.palette.primaryColors[100], 0.35),
    borderRadius: theme.spacing(1),
  },
}));

export const PreviewText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize14,
  lineHeight: 1.6,
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
}));

export const PreviewToken = styled("span")(({ theme }) => ({
  display: "inline-block",
  padding: theme.spacing(0.125, 0.75),
  borderRadius: theme.spacing(0.5),
  backgroundColor: alpha(theme.palette.primaryColors[700], 0.25),
  color: theme.palette.primaryColors[100],
}));

export const CharacterCount = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: alpha(theme.palette.textColors[200], 0.8),
  fontSize: theme.typography.fontSize12,
  textTransform: "uppercase",
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
}));

export const TableHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(2),
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
  },
}));

export const HeaderActionButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  textTransform: "none",
  border: `1px solid ${alpha(theme.palette.strokeColors[400], 0.8)}`,
  color: theme.palette.primaryColors[50],
}));

export const GeneratedTableContainer = styled(TableContainer)(({ theme }) => ({
  border: `1px solid ${alpha(theme.palette.strokeColors[400], 0.8)}`,
  borderRadius: theme.spacing(2),
  maxHeight: theme.spacing(110),
  overflowX: "auto",
  overflowY: "auto",
}));

export const GeneratedTable = styled(Table)(() => ({
  minWidth: 720,
}));

export const GeneratedTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.neutralColors[800],
}));

export const GeneratedHeaderCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.primaryColors[200],
  fontWeight: theme.typography.fontWeight700,
  textTransform: "uppercase",
  fontSize: theme.typography.fontSize12,
}));

export const GeneratedRow = styled(TableRow)(({ theme }) => ({
  "& .MuiTableCell-root": {
    borderColor: alpha(theme.palette.strokeColors[400], 0.8),
    color: theme.palette.textColors[200],
  },
}));

export const GeneratedCell = styled(TableCell)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  minWidth: theme.spacing(24),
  whiteSpace: "nowrap",
  padding: theme.spacing(2),
}));

export const GeneratedBody = styled(TableBody)(() => ({}));
