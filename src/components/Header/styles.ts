import { styled } from "@mui/material/styles";
import { Box, Button, Container, Drawer } from "@mui/material";

export const HeaderWrapper = styled("header")(({ theme }) => ({
  backgroundColor: theme.palette.primaryColors[950],
  backgroundImage: `linear-gradient(180deg, ${theme.palette.neutralColors[900]} 0%, rgba(19, 27, 46, 0) 100%)`,

  position: "relative",
  zIndex: 10,
}));

export const HeaderContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  paddingBlock: theme.spacing(1.5),
  minHeight: 56,

  [theme.breakpoints.up("md")]: {
    paddingBlock: theme.spacing(2),
    minHeight: 60,
  },

  [theme.breakpoints.up("lg")]: {
    paddingBlock: theme.spacing(3),
    minHeight: 72,
  },
}));

export const LinkHeader = styled("a")(({ theme }) => ({
  textDecoration: "none",
  whiteSpace: "nowrap",
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight700,
  opacity: 0.75,
  transition: "opacity 0.2s ease-in-out, color 0.2s ease-in-out",
  color: theme.palette.textColors[200],
  padding: theme.spacing(2, 4),

  [theme.breakpoints.up("sm")]: {
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
    marginLeft: theme.spacing(2),
    marginRight: 0,
    "& svg": {
      width: 14,
      height: 14,
    },
  },
}));

export const NavWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(6),
  minWidth: 0,
  justifyContent: "center",
  flex: 1,
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const DesktopSignWrapper = styled(Box)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const BurgerButton = styled("button")(({ theme }) => ({
  background: "none",
  border: "none",
  cursor: "pointer",
  width: 44,
  height: 44,
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  color: theme.palette.textColors[200],
  "& svg": {
    width: 44,
    height: 44,
    flexShrink: 0,
  },
  [theme.breakpoints.down("lg")]: {
    display: "flex",
  },
}));

export const BurgerMenu = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.secondaryColors[650],
    boxShadow: "-4px 0px 20px rgba(0, 0, 0, 0.5)",
    border: "none",
    width: 280,
    padding: theme.spacing(4, 6),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(6),
    [theme.breakpoints.up("md")]: {
      width: 320,
    },
  },
}));

export const BurgerMenuClose = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  marginRight: "-12px",
  marginTop: "-8px",
});

export const BurgerMenuLinksWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
}));

export const MobileLinkHeader = styled("a")(({ theme }) => ({
  textDecoration: "none",
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.textColors[200],
  padding: theme.spacing(2, 4),
  borderRadius: theme.spacing(2),
  display: "block",
  width: "100%",
  "&:hover, &.active": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    color: theme.palette.textColors[50],
  },
}));

export const BurgerMenuSignButton = styled(Box)({
  marginTop: "auto",
  "& button": {
    width: "100%",
    justifyContent: "center",
  },
});
