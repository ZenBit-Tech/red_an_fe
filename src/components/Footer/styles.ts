import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

export const FooterContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(8),
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(10, 10),
  marginBottom: theme.spacing(16),

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: theme.spacing(58),
    padding: theme.spacing(10, 20),
    marginBottom: theme.spacing(26),
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

export const FooterSections = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(8),

  [theme.breakpoints.up("md")]: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export const FooterSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const FooterSectionTitle = styled("p")(({ theme }) => ({
  margin: 0,
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight600,
  color: theme.palette.text.primary,
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize16,
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
    opacity: 1,
    color: theme.palette.textColors[400],
  },
  "&:active": {
    color: theme.palette.primaryColors[700],
  },

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize14,
    textAlign: "start",
  },
}));

export const SocialLinks = styled(Box)(({ theme }) => ({
  display: "flex",
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
    backgroundColor: theme.palette.strokeColors[600],

    color: theme.palette.textColors[200],
    transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
    textDecoration: "none",
    flexShrink: 0,

    "& .MuiSvgIcon-root": {
      fontSize: theme.typography.fontSize14,
    },

    "&:hover": {
      backgroundColor: theme.palette.primaryColors[500],
      color: theme.palette.textColors[50],
    },

    [theme.breakpoints.up("md")]: {
      "& .MuiSvgIcon-root": {
        fontSize: theme.typography.fontSize16,
      },
    },
  };
});

export const FooterLogo = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  textDecoration: "none",
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize24,
  fontFamily: theme.typography.secondFamily,
  color: theme.palette.secondary.main,

  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.fontSize28,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize32,
  },
}));
