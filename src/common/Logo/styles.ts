import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

export const LogoWrapper = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  textDecoration: "none",
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize18,
  fontFamily: theme.typography.secondFamily,
  background: `linear-gradient(161deg, ${theme.palette.primaryColors[200]} 0%, ${theme.palette.primaryColors[700]} 100%)`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize32,
  },
}));
