import { styled } from "@mui/material/styles";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  IconButton,
  Box,
} from "@mui/material";

interface StatusBadgeProps {
  status: string;
}

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

export const StatusBadge = styled(Box, {
  shouldForwardProp: (prop) => prop !== "status",
})<StatusBadgeProps>((props) => {
  const theme = props.theme;

  const statusStyles: Record<string, { bg: string; text: string }> = {
    success: {
      bg: "rgba(16, 172, 96, 0.2);",
      text: "#4ade80",
    },
    paid: {
      bg: "rgba(16, 172, 96, 0.2);",
      text: "#4ade80",
    },
    pending: {
      bg: "rgba(255, 152, 0, 0.2);",
      text: theme.palette.tertiaryColors[600],
    },
    canceled: {
      bg: "rgba(239, 68, 68, 0.2)",
      text: theme.palette.tertiaryColors[500],
    },
    failed: {
      bg: "rgba(239, 68, 68, 0.2)",
      text: theme.palette.tertiaryColors[500],
    },
    subscription_canceled: {
      bg: "rgba(239, 68, 68, 0.2)",
      text: theme.palette.tertiaryColors[500],
    },
  };

  const currentStatus =
    props.status ||
    (props as { ownerState?: StatusBadgeProps }).ownerState?.status ||
    "";

  const currentStyle = statusStyles[currentStatus] || {
    bg: "rgba(255, 255, 255, 0.05)",
    text: theme.palette.text.primary,
  };

  return {
    display: "inline-block",
    padding: theme.spacing(1, 2),
    borderRadius: theme.spacing(1),
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeight400,
    fontSize: theme.typography.fontSize12,
    textAlign: "center",
    backgroundColor: currentStyle.bg,
    color: currentStyle.text,
  };
});
