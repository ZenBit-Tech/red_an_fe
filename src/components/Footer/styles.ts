import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

export const FooterWrapper = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.secondaryColors[900],
  borderTop: "1px solid " + theme.palette.strokeColors[800],
}));

export const FooterContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(16),
  flexDirection: "column",
  alignItems: "flex-start",
  paddingBlock: theme.spacing(8),

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBlock: 0,
    minHeight: 100,
    gap: 102,
  },

  [theme.breakpoints.up("lg")]: {
    paddingBlock: theme.spacing(15),
    gap: 232,
  },
}));

export const FooterBrand = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing(2),

  [theme.breakpoints.up("md")]: {
    width: 290,
  },
  [theme.breakpoints.up("lg")]: {
    width: 400,
  },
}));

export const FooterDescription = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],
}));

export const FooterSections = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(16),
  alignItems: "flex-start",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    gap: 102,
  },
  [theme.breakpoints.up("lg")]: {
    gap: 232,
  },
}));

export const FooterSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing(2),
}));

export const FooterSectionTitle = styled("p")(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.text.primary,
}));

export const FooterLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],
  transition: "color 0.2s ease-in-out",

  "&:hover": {
    opacity: 1,
    color: theme.palette.textColors[50],
  },
  "&:active": {
    color: theme.palette.primaryColors[700],
  },
}));

export const SocialLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(4),
}));

export const SocialIconButton = styled("a")(({ theme }) => {
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: theme.spacing(5),
    backgroundColor: theme.palette.strokeColors[610],

    color: theme.palette.textColors[200],
    transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
    textDecoration: "none",
    flexShrink: 0,

    "& svg": {
      width: 20,
      height: 20,
      fill: "currentColor",
    },

    "&:hover": {
      backgroundColor: theme.palette.primaryColors[500],
      color: theme.palette.textColors[50],
    },
  };
});

export const FooterLogo = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize20,
  fontFamily: theme.typography.secondFamily,
  color: theme.palette.secondary.main,
  lineHeight: "36px",

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize24,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: theme.typography.fontSize32,
  },
}));
