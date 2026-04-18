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
  bgcolor: neutralColors[900],
  border: `1px solid ${strokeColors[500]}`,
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
  color: textColors[50],
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
export const arrowBack = {
  fontSize: theme.typography.fontSize18,
};
export const colorWhite = {
  color: "#FFFFFF",
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
  bgcolor: strokeColors[400],
  color: textColors[50],
  "& input": {
    color: textColors[50],
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
    borderColor: `${primaryColors[200]} !important`,
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
  bgcolor: primaryColors[200],
  color: "rgba(19, 27, 46, 0.8)",
  boxShadow: "none",
  backgroundImage: "none",
  "&:hover": {
    bgcolor: "#c2d5ff",
    boxShadow: "none",
    backgroundImage: "none",
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
  color: textColors[200],
  fontFamily: font,
  fontSize: theme.typography.fontSize14,
  cursor: "pointer",
  transition: "color 0.2s",
  p: 0,
  "&:hover": { color: textColors[50] },
};
export const requiredAsterisk = {
  color: "rgba(255, 255, 255, 0.6)",
  ml: 0.5,
};

export const checkInboxCardInner = {
  ...cardInner,
  textAlign: "center" as const,
  display: "flex",
  flexDirection: "column" as const,
  height: "100%",
};

export const checkInboxContent = {
  flexGrow: 1,
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
};

export const mailIconWrapper = { mb: "16px" };

export const mailIcon = {
  fontSize: 56,
  color: primaryColors[200],
};

export const checkInboxTitle = {
  ...title,
  mb: "8px",
};

export const checkInboxSubtitle = {
  ...subtitle,
  mb: "32px",
  fontSize: "15px",
};

export const submittedEmailText = {
  color: textColors[50],
};

export const didntReceiveText = {
  color: "rgba(255,255,255,0.4)",
  fontFamily: font,
  mb: "16px",
};

export const resendLinkAction = {
  color: primaryColors[700],
  fontSize: "0.875rem",
  cursor: "pointer",
  textDecoration: "underline",
  "&:hover": { color: primaryColors[600] },
};

export const backToSignInWrapper = {
  mt: "auto",
  pt: "75px",
  textAlign: "left" as const,
};

export const alertStyles = {
  width: "100%",
  fontFamily: font,
};
export const boxHandleBack = {
  mt: "auto",
  pt: "24px",
};
