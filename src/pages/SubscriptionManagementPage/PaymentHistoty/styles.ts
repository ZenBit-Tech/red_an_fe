import { alpha, styled } from "@mui/material/styles";
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
  borderRadius: theme.shape.borderRadius,
  overflowX: "auto",
}));

export const HistoryTable = styled(Table)(({ theme }) => ({
  minWidth: 650,
  border: `1px solid #1e293b`,
  background: theme.palette.neutralColors[900],
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
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(4, 1),
  },
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

export const HistoryTabletWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "atRightEnd",
})<{ atRightEnd: boolean }>(({ theme, atRightEnd }) => ({
  overflowX: "auto",
  overflowY: "auto",
  maxHeight: "207px",
  border: `1px solid ${alpha(theme.palette.textColors[400], 0.08)}`,
  backgroundColor: theme.palette.neutralColors[900],
  "&::-webkit-scrollbar": {
    width: atRightEnd ? theme.spacing(2.5) : 0,
    height: 0,
  },
  "&::-webkit-scrollbar-track": { backgroundColor: "transparent" },
  "&::-webkit-scrollbar-track:vertical": { marginBottom: theme.spacing(1) },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.neutralColors[800],
    borderRadius: theme.spacing(2),
    border: "2px solid transparent",
    backgroundClip: "content-box",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: alpha(theme.palette.primaryColors[200], 0.45),
  },
  "&::-webkit-scrollbar-corner": { backgroundColor: "transparent" },
}));

export const HistoryHScrollBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.neutralColors[800]}`,
  display: "flex",
  alignItems: "center",
  background: theme.palette.neutralColors[900],
}));

export const HistoryHScrollArrow = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: theme.spacing(6),
  height: theme.spacing(6),
  cursor: "pointer",
  color: theme.palette.neutralColors[800],
  userSelect: "none",
  "&:hover": { color: theme.palette.neutralColors[600] },
}));

export const HistoryHScrollTrack = styled(Box)(({ theme }) => ({
  flex: 1,
  overflowX: "scroll",
  overflowY: "hidden",
  "&::-webkit-scrollbar": { height: theme.spacing(2.5) },
  "&::-webkit-scrollbar-track": {
    backgroundColor: alpha(theme.palette.strokeColors[150], 0.05),
    borderRadius: theme.spacing(2),
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.neutralColors[600],
    borderRadius: theme.spacing(2),
    border: "2px solid transparent",
    backgroundClip: "content-box",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: alpha(theme.palette.primaryColors[200], 0.45),
  },
}));

export const HistoryHScrollInner = styled(Box)({ height: 1 });
