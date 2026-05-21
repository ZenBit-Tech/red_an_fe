import { styled } from "@mui/material/styles";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";

export const HistoryTableContainer = styled(TableContainer)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.neutralColors[900],
  borderRadius: theme.shape.borderRadius,
  overflowX: "auto",
}));

export const HistoryTable = styled(Table)(() => ({
  minWidth: 650,
  border: `1px solid #1e293b`,
  background: "#111a2e",
}));

export const HistoryTableHead = styled(TableHead)(() => ({}));

export const HistoryTableRow = styled(TableRow)(() => ({
  borderBottom: "1px solid #1e293b",
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.02)",
  },
}));

export const HistoryThCell = styled(TableCell)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize12,
  color: "#64748b",
  padding: theme.spacing(4, 8),
  textAlign: "center",
}));

export const HistoryTdCell = styled(TableCell)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  textAlign: "center",
  color: theme.palette.text.secondary,
  padding: theme.spacing(4, 5),
  borderBottom: "1px solid #1e293b",
}));

export const ActionButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primaryColors[200],
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
