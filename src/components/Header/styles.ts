import { styled } from "@mui/material/styles";
import { Box, Button, Container } from "@mui/material";

export const HeaderWrapper = styled("header")(({ theme }) => ({
  backgroundColor: theme.palette.backgroundColor,
  backgroundImage: `linear-gradient(180deg, ${theme.palette.neutralColors[900]} 0%, rgba(19, 27, 46, 0) 100%)`,
}));

export const HeaderContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  padding: theme.spacing(3, 4),

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(3, 8),
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(3, 20),
  },
}));

export const LinkHeader = styled("a")(({ theme }) => ({
  textDecoration: "none",
  whiteSpace: "nowrap",
  fontSize: theme.typography.fontSize14,
  fontWeight: 600,
  opacity: 0.75,
  transition: "opacity 0.2s ease-in-out, color 0.2s ease-in-out",
  color: theme.palette.textColors[200],
  padding: theme.spacing(1, 2),

  [theme.breakpoints.up("lg")]: {
    fontSize: theme.typography.fontSize16,
    padding: theme.spacing(2, 4),
  },

  "&:hover": {
    opacity: 1,
    color: theme.palette.textColors[400],
  },
  "&.active": {
    opacity: 1,
    color: theme.palette.primaryColors[500],
    textDecoration: "underline",
    textUnderlineOffset: theme.spacing(2),
  },
}));

export const SignButton = styled(Button)(({ theme }) => ({
  "& .MuiButton-endIcon": {
    marginLeft: theme.spacing(1),
    marginRight: 0,
    "& svg": {
      width: 10,
      height: 10,
    },
  },
  [theme.breakpoints.up("md")]: {
    "& .MuiButton-endIcon": {
      marginLeft: theme.spacing(2),

      "& svg": {
        width: 13,
        height: 13,
      },
    },
  },
}));

export const NavWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.5),
  minWidth: 0,
  justifyContent: "center",
  flex: 1,
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
