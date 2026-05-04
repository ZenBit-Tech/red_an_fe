import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const SubscriptionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(20),
  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(10),
    gap: theme.spacing(40),
  },
}));

export const PlanWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(16),
  },
}));

export const TitleBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  maxWidth: 603,
  position: "relative",

  "&::before": {
    content: '""',
    position: "absolute",
    top: "40%",
    left: "50%",
    inset: "-50% -10%",
    background: theme.palette.primaryColors[700],
    opacity: 0.2,
    filter: "blur(60px)",
    pointerEvents: "none",
    zIndex: -1,
  },
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(6),
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize38,
  color: theme.palette.secondary.main,
  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.fontSize52,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize60,
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  color: theme.palette.textColors[200],
  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.fontSize18,
  },
}));

export const PlansBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    paddingLeft: theme.spacing(24),
  },
}));
