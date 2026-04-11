import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

export const LogoWrapper = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
  textDecoration: "none",
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize32,
  background: `linear-gradient(169deg, ${theme.palette.blue[50]} 34.13%, ${theme.palette.blue[700]} 100%)`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  whiteSpace: "nowrap",
}));
