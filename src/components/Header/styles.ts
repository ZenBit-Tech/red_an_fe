import { styled } from "@mui/material/styles";
import { Box, Button, Container, Link } from "@mui/material";

export const HeaderContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: 72,
  width: "100%",
  padding: "16px 32px",
  marginBottom: 11,
  [theme.breakpoints.up("md")]: {
    padding: "16px 16px",
  },
}));

export const LinkHeader = styled(Link)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: 600,
  opacity: 0.75,
  transition: "opacity 0.2s ease-in-out, color 0.2s ease-in-out",
  color: theme.palette.white[400],
  padding: "8px 16px",
  "&:hover": {
    opacity: 1,
    color: theme.palette.blue[600],
    textDecoration: "underline",
    textUnderlineOffset: 8,
  },
}));

export const LogoWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const SignButton = styled(Button)(({ theme }) => ({
  width: 144,
  height: 40,
  fontSize: theme.typography.fontSize14,
  fontWeght: theme.typography.fontWeight700,
  gap: 16,
}));

export const NavWrapper = styled(Box)({ display: "flex", gap: 6 });
