import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

export const LogoWrapper = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  textDecoration: "none",
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize24,
  fontFamily: theme.typography.secondFamily,
  background: `linear-gradient(161deg, ${theme.palette.primaryColors[200]} 0%, ${theme.palette.primaryColors[700]} 100%)`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  [theme.breakpoints.up("lg")]: {
    fontSize: theme.typography.fontSize32,
  },
}));

export const FullText = styled("span")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "inline",
  },
}));

export const ShortText = styled("span")(({ theme }) => ({
  display: "inline",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
