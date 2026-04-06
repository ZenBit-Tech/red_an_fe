import { styled } from "@mui/material/styles";
import { Link } from "@mui/material";

export const LinkHeader = styled(Link)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 500,
  color: theme.palette.text.primary,
  textDecoration: "none",
  opacity: 0.75,
  transition: "opacity 0.2s ease-in-out, color 0.2s ease-in-out",
  "&:hover": {
    opacity: 1,
    color: theme.palette.primary.main,
  },
}));

export const IconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "44px",
  height: "44px",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "50%",
  color: "#fff",
  "& svg": {
    width: "20px",
    height: "20px",
  },
}));
