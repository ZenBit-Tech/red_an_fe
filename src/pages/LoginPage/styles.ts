import { theme } from "@/common/theme/theme";
import {
  primaryColors,
  neutralColors,
  textColors,
  strokeColors,
} from "@/constants/themeConstants";

export const font =
  (theme.typography.fontFamily as string) || "'Inter', sans-serif";

export const container = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  background: "url('/login/login-bg.png') center/cover no-repeat, #0d1117",
  fontFamily: font,
  position: "relative",
  overflow: "hidden",
};

export const backgroundOverlay = {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  zIndex: 0,
};

export const contentWrapper = {
  position: "relative",
  zIndex: 1,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  px: { xs: 4, sm: 6 },
};

export const card = {
  width: "456px",
  height: "473px",
  bgcolor: neutralColors[900], // "#131b2e"
  border: `1px solid ${strokeColors[500]}`, // "rgba(67, 70, 82, 0.5)"
  borderRadius: "8px",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1.5px",
    background:
      "linear-gradient(90deg, rgba(178, 197, 255, 0) 0%, rgba(178, 197, 255, 0.8) 50%, rgba(178, 197, 255, 0) 100%)",
  },
};

export const cardInner = {
  padding: "48px 40px 32px 40px",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  boxSizing: "border-box",
};

export const title = {
  fontWeight: theme.typography.fontWeight400,
  color: textColors[50], // "#FFFFFF"
  mb: "8px",
  fontFamily: font,
  fontSize: "24px",
  lineHeight: 1.25,
};

export const subtitle = {
  color: "rgba(255, 255, 255, 0.6)",
  mb: "45px",
  fontFamily: font,
  fontSize: theme.typography.fontSize14,
  lineHeight: 1.6,
};

export const labelStyles = {
  fontWeight: theme.typography.fontWeight500,
  color: "rgba(187, 198, 197, 0.8)",
  display: "block",
  mb: "16px",
  fontFamily: font,
  fontSize: theme.typography.fontSize12,
  letterSpacing: "0.05em",
  textTransform: "uppercase" as const,
};

export const inputStyles = {
  fontFamily: font,
  fontSize: theme.typography.fontSize16,
  borderRadius: "10px",
  bgcolor: strokeColors[400], // "rgba(51, 63, 90, 0.4)"
  color: textColors[50], // "white"
  "& input": {
    color: textColors[50], // "white"
    padding: "14px 16px",
    "&::placeholder": { color: "rgba(187, 198, 197, 0.4)", opacity: 1 },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: strokeColors[400],
    borderRadius: "8px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: strokeColors[400],
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: `${primaryColors[200]} !important`, // "#afc6ff"
    borderWidth: "1px !important",
  },
};

export const dividerStyles = {
  borderColor: "rgba(255,255,255,0.05)",
  mb: "24px",
};

export const submitButton = {
  py: "14px",
  mt: "24px",
  mb: "32px",
  borderRadius: "10px",
  fontFamily: font,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize16,
  textTransform: "none",
  bgcolor: primaryColors[200], // "#afc6ff"
  color: "rgba(19, 27, 46, 0.8)",
  boxShadow: "none",
  backgroundImage: "none", // Вимикаємо градієнт глобальної теми
  "&:hover": {
    bgcolor: "#c2d5ff",
    boxShadow: "none",
    backgroundImage: "none", // Вимикаємо градієнт глобальної теми при ховері
  },
  "&.Mui-disabled": {
    bgcolor: "rgba(175, 198, 255, 0.3)",
    color: "#949faf",
    boxShadow: "none",
    backgroundImage: "none",
  },
};

export const linkButton = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  color: textColors[200], // "#C3C6D4"
  fontFamily: font,
  fontSize: theme.typography.fontSize14,
  cursor: "pointer",
  transition: "color 0.2s",
  p: 0,
  "&:hover": { color: textColors[50] }, // "#ffffff"
};
