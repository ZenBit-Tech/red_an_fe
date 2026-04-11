import { Link as RouterLink } from "react-router-dom";
import { styled, type Theme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Footer = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(16, 0, 8, 0),
  borderTop: `1px solid ${theme.palette.grey[200]}`,
  marginBottom: theme.spacing(16),
}));

export const FooterTop = styled(Box)(({ theme }) => ({
  display: "flex",
  marginBottom: theme.spacing(16),
  gap: theme.spacing(10),

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const FooterHeader = styled(Box)({
  display: "flex",
  flexDirection: "column",
  maxWidth: "500px",
});

export const DescriptionText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
}));

export const SocialWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
}));

export const SocialIcon = styled("a")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  backgroundColor: theme.palette.grey[50],
  borderRadius: theme.spacing(2),
  color: theme.palette.text.secondary,
  transition: "all 0.2s ease",

  "&:hover": {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.text.primary,
  },

  "& svg": {
    width: "20px",
    height: "20px",
    fill: "currentColor",
  },
}));

export const ColumnsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(30),

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: theme.spacing(10),
  },
}));

export const ColumnList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
}));

export const ColumnTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
}));

const getBaseLinkStyles = (theme: Theme) => ({
  color: theme.palette.text.secondary,
  textDecoration: "none",
  ...theme.typography.fontSize16,
  transition: "color 0.2s ease",
  textAlign: "left" as const,
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",

  "&:hover": {
    color: theme.palette.primary.main,
  },
});

export const ApiButton = styled("button")(({ theme }) =>
  getBaseLinkStyles(theme),
);

export const ExternalLink = styled("a")(({ theme }) =>
  getBaseLinkStyles(theme),
);

export const InternalLink = styled(RouterLink)(({ theme }) =>
  getBaseLinkStyles(theme),
);
