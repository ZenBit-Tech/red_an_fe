import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Footer = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: "64px 0 32px 0",
  borderTop: `1px solid ${theme.palette.grey[200]}`,
  width: "100%",
  marginBottom: "64px",
  gap: "32px",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const FooterTop = styled(Box)(({ theme }) => ({
  display: "flex",
  marginBottom: "64px",
  gap: "40px",

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
  marginTop: "24px",
  marginBottom: "24px",
}));

export const SocialWrapper = styled(Box)({
  display: "flex",
  gap: "12px",
});

export const SocialIcon = styled("a")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  backgroundColor: theme.palette.grey[50],
  borderRadius: "8px",
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
  gap: "120px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "40px",
  },
}));

export const ColumnList = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const ColumnTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: "8px",
}));

const baseLinkStyles = `
  color: #6a7282; /* theme.palette.text.secondary */
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s ease;
  text-align: left;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: #155dfc; /* theme.palette.primary.main */
  }
`;

export const ApiButton = styled("button")`
  ${baseLinkStyles}
`;

export const ExternalLink = styled("a")`
  ${baseLinkStyles}
`;

export const InternalLink = styled(RouterLink)`
  ${baseLinkStyles}
`;
