import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const GradeSecurity = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: theme.spacing(6),
  padding: theme.spacing(5, 8),
  borderRadius: theme.spacing(6),
  backgroundColor: theme.palette.neutralColors[900],
  border: `1px solid ${theme.palette.strokeColors[500]}`,
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    padding: theme.spacing(10, 17),
    alignItems: "center",
    margin: theme.spacing(0, 24),
    "& > *": { flex: 1 },
  },
  [theme.breakpoints.down("lg")]: {
    maxWidth: "688px",
    margin: "0 auto",
    padding: theme.spacing(15, 8),
    flexDirection: "column",
  },
}));

export const GradeSecurityContext = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  minWidth: 0,
}));

export const GradeSecurityTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize24,
  color: theme.palette.secondary.main,

  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.fontSize28,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize32,
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeight400,
  fontSize: theme.typography.fontSize20,
  color: theme.palette.neutralColors[200],

  [theme.breakpoints.down("lg")]: {},
}));

export const MetricsBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  minWidth: 0,
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(6),
  },
}));

export const MetricsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  minWidth: 0,
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    gap: theme.spacing(6),
  },
}));

export const MetricCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(6),
  borderRadius: theme.spacing(4),
  backgroundColor: theme.palette.neutralColors[800],
  textAlign: "center",
  flex: 1,
  minWidth: 0,
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(8),
  },
  [theme.breakpoints.down("lg")]: {
    minWidth: "221px",
    textAlign: "left",
  },
}));

export const MetricValue = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize24,
  color: theme.palette.secondary.main,
  wordBreak: "break-word",
  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.fontSize28,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize32,
  },
}));

export const MetricLabel = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeight500,
  fontSize: theme.typography.fontSize12,
  color: theme.palette.textColors[200],
  textTransform: "uppercase",
}));
