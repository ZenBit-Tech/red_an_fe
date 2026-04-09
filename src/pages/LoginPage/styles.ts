import { theme } from "@/common/themes/theme";

export const font =
  (theme.typography.fontFamily as string) || "'Inter', sans-serif";

export const container = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  background:
    "radial-gradient(ellipse 100% 60% at 50% -10%, rgba(30,60,100,0.55) 0%, transparent 65%), #0d1117",
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
  bgcolor: "rgba(22,28,45,0.92)",
  border: "1px solid rgba(67, 70, 82, 0.5)",
  borderRadius: "8px",
  boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
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
  color: "rgba(255, 255, 255, 0.6);",
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
    borderColor: "rgba(51, 63, 90, 0.4)" 
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { 
    borderColor: "#afc6ff !important", 
    borderWidth: "1px !important",
  },
};
export const inputErrorStyles = {
  ...inputStyles,
  "& fieldset": { borderColor: "#EF4444", borderRadius: "8px" },
  "&:hover fieldset": { borderColor: "#EF4444" },
  "&.Mui-focused fieldset": { borderColor: "#EF4444", borderWidth: "1px", outline: "none", },
};

export const dividerStyles = {
  borderColor: "rgba(255,255,255,0.05)",
  mb: "24px",
};

export const submitButton = {
  py: "14px",
  mt: "24px", 
  mb:"32px",
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