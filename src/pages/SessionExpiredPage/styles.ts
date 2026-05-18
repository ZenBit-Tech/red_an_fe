import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const SESSION_EXPIRED_SVG_SIZE = 300;
const SESSION_EXPIRED_SVG_SIZE_MOBILE = 200;

const PAGE_COLORS = {
  PAGE_TITLE: "linear-gradient(161deg, #b0c6ff 0%, #0d47a1 100%)",
  BUTTON_BG: "linear-gradient(161deg, #b0c6ff 0%, #0d47a1 100%)",
  BUTTON_BG_HOVER: "linear-gradient(161deg, #c8d8ff 0%, #1565c0 100%)",
};
export const PageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(6),
  overflow: "hidden",
  minHeight: 844,
}));

export const BgBlur = styled("img")({
  position: "absolute",
  width: SESSION_EXPIRED_SVG_SIZE * 2,
  height: SESSION_EXPIRED_SVG_SIZE * 2,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, calc(-50% - 80px))",
  objectFit: "contain",
  pointerEvents: "none",
  zIndex: 0,
});

export const SvgImage = styled("img")(({ theme }) => ({
  position: "relative",
  width: SESSION_EXPIRED_SVG_SIZE,
  height: SESSION_EXPIRED_SVG_SIZE,
  zIndex: 1,
  flexShrink: 0,
  pointerEvents: "none",
  [theme.breakpoints.down("md")]: {
    width: SESSION_EXPIRED_SVG_SIZE_MOBILE,
    height: SESSION_EXPIRED_SVG_SIZE_MOBILE,
  },
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(4),
  zIndex: 1,
  textAlign: "center",
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize60,
  background: PAGE_COLORS.PAGE_TITLE,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
  whiteSpace: "nowrap",
  [theme.breakpoints.down("lg")]: {
    fontSize: theme.typography.fontSize48,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize32,
  },
}));

export const PageSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize24,
  color: theme.palette.secondaryColors[50],
  marginBottom: theme.spacing(9),
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize20,
    marginBottom: theme.spacing(0),
  },
}));

export const GetStartedButton = styled(Button)(({ theme }) => ({
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize16,
  background: PAGE_COLORS.BUTTON_BG,
  color: theme.palette.textColors[50],
  padding: theme.spacing(3, 5),
  borderRadius: theme.spacing(2),
  textTransform: "none",
  "&:hover": {
    background: PAGE_COLORS.BUTTON_BG_HOVER,
  },
  "&:active": {
    background: PAGE_COLORS.BUTTON_BG_HOVER,
  },
}));
