import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const LogoWrapper = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontWeight: 700,
  fontSize: 14.5,
  color: theme.palette.text.primary,
  letterSpacing: "-0.01em",
  textDecoration: "none",
}));

export const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "14.5px",
  color: theme.palette.text.primary,
  letterSpacing: "-0.01em",
}));
