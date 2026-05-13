import {
  Alert,
  Box,
  Button,
  MenuItem,
  Select,
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
  maxWidth: theme.spacing(260),
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
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
  gap: theme.spacing(6),
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
  display: "grid",
  gridTemplateColumns: "minmax(200px, 1fr) minmax(200px, 1fr)",
  gap: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const InputLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[50],
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight500,
  marginBottom: theme.spacing(2),
}));

export const NumberField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: theme.palette.backgroundColor,
    borderRadius: theme.spacing(1),
    color: theme.palette.textColors[50],
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: alpha(theme.palette.strokeColors[400], 0.8),
  },
}));

export const FormatSelect = styled(Select)(({ theme }) => ({
  backgroundColor: theme.palette.backgroundColor,
  borderRadius: theme.spacing(1),
  color: theme.palette.textColors[50],
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: alpha(theme.palette.strokeColors[400], 0.8),
  },
}));

export const GenerateButton = styled(Button)(({ theme }) => ({
  alignSelf: "flex-end",
  minWidth: theme.spacing(56),
  minHeight: theme.spacing(14),
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
  borderRadius: theme.spacing(3),
  border: `1px solid ${alpha(theme.palette.strokeColors[400], 0.7)}`,
  backgroundColor: alpha(theme.palette.neutralColors[900], 0.8),
  overflow: "hidden",
}));

export const CollapsibleHeader = styled(Button)(({ theme }) => ({
  width: "100%",
  justifyContent: "space-between",
  textTransform: "none",
  color: theme.palette.primaryColors[50],
  padding: theme.spacing(4),
  backgroundColor: "transparent",
}));

export const CollapsibleTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight700,
}));

export const CollapsibleBody = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderTop: `1px solid ${alpha(theme.palette.strokeColors[400], 0.6)}`,
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

export const OutputFormatOption = styled(MenuItem)(() => ({}));
