import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import {
  primaryColors,
  neutralColors,
  strokeColors,
} from "@/constants/themeConstants";

// ─── Section wrapper ──────────────────────────────────────────────────────────

export const ReadyToProtectSection = styled("section")(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(20, 0),
  },
}));

// ─── Inner content column ─────────────────────────────────────────────────────

export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: theme.spacing(6),
  marginInline: "auto",
  maxWidth: 896,
  paddingInline: theme.spacing(8),
  paddingBottom: theme.spacing(10),
}));

// ─── Heading ─────────────────────────────────────────────────────────────────

export const Title = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize32,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.textColors[50],
  lineHeight: 1.2,
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize48,
  },
}));

// ─── Description ─────────────────────────────────────────────────────────────

export const Description = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],
  lineHeight: 1.6,
  maxWidth: 620,
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize18,
  },
}));

// ─── Button row ───────────────────────────────────────────────────────────────

export const ButtonsGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(4),
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "center",
  },
}));

// ─── Primary CTA ─────────────────────────────────────────────────────────────

export const PrimaryButton = styled(Button)(({ theme }) => ({
  minWidth: 160,
  [theme.breakpoints.up("md")]: {
    minWidth: 180,
  },
}));

// ─── Secondary / ghost CTA ────────────────────────────────────────────────────

export const SecondaryButton = styled(Button)(({ theme }) => ({
  minWidth: 160,
  backgroundImage: "none",
  backgroundColor: "transparent",
  color: theme.palette.textColors[50],
  border: `1px solid ${strokeColors[150]}`,
  "&:hover": {
    backgroundImage: "none",
    backgroundColor: neutralColors[800],
    border: `1px solid ${primaryColors[200]}`,
  },
  [theme.breakpoints.up("md")]: {
    minWidth: 180,
  },
}));
