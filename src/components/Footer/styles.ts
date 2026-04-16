import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

export const FooterWrapper = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.secondaryColors[900],
  padding: theme.spacing(8, 0),

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(38, 0),
  },
}));

export const FooterContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(8),
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: theme.spacing(58),
  },
}));

export const FooterBrand = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.up("md")]: {
    maxWidth: 400,
    flex: 1,
    alignItems: "flex-start",
  },
}));

export const FooterDescription = styled("p")(({ theme }) => ({
  margin: 0,
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize14,
  },
}));

export const FooterSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.up("md")]: {},
}));

export const FooterSectionTitle = styled("p")(({ theme }) => ({
  margin: 0,
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight600,
  color: theme.palette.textColors[50],
  marginBottom: theme.spacing(2),
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize14,
    textAlign: "start",
  },
}));

export const FooterLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],
  transition: "color 0.2s ease-in-out",
  textAlign: "center",

  "&:hover": {
    color: theme.palette.textColors[50],
  },

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize14,
    textAlign: "start",
  },
}));

export const SocialLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

export const SocialIconButton = styled("a")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 36,
  height: 36,
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.neutralColors[800],
  color: theme.palette.textColors[200],
  transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
  cursor: "pointer",
  textDecoration: "none",
  flexShrink: 0,
  fontSize: 16,

  "& .MuiSvgIcon-root": {
    fontSize: 16,
  },

  "&:hover": {
    backgroundColor: theme.palette.primaryColors[500],
    color: theme.palette.textColors[50],
  },

  [theme.breakpoints.up("md")]: {
    "& .MuiSvgIcon-root": {
      fontSize: 18,
    },
  },
}));
