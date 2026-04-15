import theme from "@/common/theme/index";

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
  bgcolor: "#131b2e",
  border: "1px solid rgba(67, 70, 82, 0.)",
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
  fontWeight: 400,
  color: "#FFFFFF",
  mb: "8px",
  fontFamily: font,
  fontSize: "24px",
  lineHeight: 1.25,
};

export const subtitle = {
  color: "rgba(255, 255, 255, 0.6)",
  mb: "45px",
  fontFamily: font,
  fontSize: "14px",
  lineHeight: 1.6,
};

export const labelStyles = {
  fontWeight: 500,
  color: "rgba(187, 198, 197, 0.8)",
  display: "block",
  mb: "16px",
  fontFamily: font,
  fontSize: "12px",
  letterSpacing: "0.05em",
  textTransform: "uppercase" as const,
};

export const inputStyles = {
  fontFamily: font,
  fontSize: "16px",
  borderRadius: "10px",
  bgcolor: "rgba(51, 63, 90, 0.4)",
  color: "white",
  "& input": {
    color: "white",
    padding: "14px 16px",
    "&::placeholder": { color: "rgba(187, 198, 197, 0.4)", opacity: 1 },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(51, 63, 90, 0.4)",
    borderRadius: "8px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(51, 63, 90, 0.4)",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#afc6ff !important",
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
  fontWeight: 700,
  fontSize: "16px",
  textTransform: "none",
  bgcolor: "#afc6ff",
  color: "rgba(19, 27, 46, 0.8)",
  boxShadow: "none",
  "&:hover": {
    bgcolor: "#c2d5ff",
    boxShadow: "none",
  },
  "&.Mui-disabled": {
    bgcolor: "rgba(175, 198, 255, 0.3)",
    color: "#949faf",
    boxShadow: "none",
  },
};

export const linkButton = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  color: "#C3C6D4",
  fontFamily: font,
  fontSize: "14px",
  cursor: "pointer",
  transition: "color 0.2s",
  p: 0,
  "&:hover": { color: "#ffffff" },
};
