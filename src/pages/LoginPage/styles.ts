import { theme } from "@/common/theme/theme";

export const container = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  background: `url('/login/login-bg.png') center/cover no-repeat, ${theme.palette.secondaryColors[950]}`,
  fontFamily: theme.typography.fontFamily,
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
  width: theme.spacing(114),
  minHeight: theme.spacing(118),
  bgcolor: theme.palette.neutralColors[900],
  border: `1px solid ${theme.palette.strokeColors[500]}`,
  borderRadius: theme.spacing(2),
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1.5px",
    background: `linear-gradient(90deg, transparent 0%, ${theme.palette.primaryColors[200]} 50%, transparent 100%)`,
  },
};

export const cardInner = {
  padding: theme.spacing(12, 10, 8, 10),
  display: "flex",
  flexDirection: "column",
  height: "100%",
  boxSizing: "border-box",
};

export const title = {
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[400],
  mb: theme.spacing(2),
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize24,
  lineHeight: 1.25,
};

export const subtitle = {
  color: theme.palette.textColors[50],
  opacity: 0.6,
  mb: theme.spacing(11),
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  lineHeight: 1.6,
};

export const arrowBack = {
  fontSize: theme.typography.fontSize18,
};

export const colorWhite = {
  color: theme.palette.textColors[50],
};

export const labelStyles = {
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.textColors[300],
  display: "block",
  mb: theme.spacing(4),
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize12,
  letterSpacing: "0.05em",
  textTransform: "uppercase" as const,
};

export const inputStyles = {
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize16,
  borderRadius: theme.spacing(2.5),
  bgcolor: theme.palette.strokeColors[400],
  color: theme.palette.textColors[50],
  "& input": {
    color: theme.palette.textColors[50],
    padding: theme.spacing(3.5, 4),
    "&::placeholder": {
      color: theme.palette.textColors[300],
      opacity: 0.4,
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.strokeColors[400],
    borderRadius: theme.spacing(2),
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.strokeColors[400],
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.palette.primaryColors[200]} !important`,
    borderWidth: "1px !important",
  },
};

export const dividerStyles = {
  borderColor: theme.palette.strokeColors[120],
  mb: theme.spacing(6),
};

export const submitButton = {
  py: theme.spacing(3.5),
  mt: theme.spacing(6),
  mb: theme.spacing(8),
  borderRadius: theme.spacing(2.5),
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize16,
  textTransform: "none",
  bgcolor: theme.palette.primaryColors[200],
  color: theme.palette.secondaryColors[900],
  boxShadow: "none",
  backgroundImage: "none",
  "&:hover": {
    bgcolor: theme.palette.primaryColors[100],
    boxShadow: "none",
    backgroundImage: "none",
  },
  "&.Mui-disabled": {
    bgcolor: theme.palette.strokeColors[120],
    color: theme.palette.neutralColors[300],
    boxShadow: "none",
    backgroundImage: "none",
  },
};

export const linkButton = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  color: theme.palette.textColors[200],
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  cursor: "pointer",
  transition: "color 0.2s",
  p: 0,
  textDecoration: "none", // Прибираємо стандартне підкреслення посилання
  background: "transparent", // Скидаємо фон (на випадок, якщо це <button>)
  border: "none",
  "&:hover": {
    color: theme.palette.textColors[50],
    textDecoration: "none",
  },
};

export const requiredAsterisk = {
  color: theme.palette.textColors[50],
  opacity: 0.6,
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

export const mailIconWrapper = { mb: theme.spacing(4) };

export const mailIcon = {
  fontSize: theme.typography.fontSize64,
  color: theme.palette.primaryColors[200],
};

export const checkInboxSubtitle = {
  ...subtitle,
  mb: theme.spacing(6),
  fontSize: theme.typography.fontSize14,
};

export const submittedEmailText = {
  color: theme.palette.textColors[50],
};

export const resendBlock = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 0,
};

export const didntReceiveText = {
  color: theme.palette.textColors[50],
  opacity: 0.4,
  fontFamily: theme.typography.fontFamily,
};

export const resendLinkAction = {
  background: "transparent",
  border: "none",
  color: "#2563eb",
  fontSize: theme.typography.fontSize16,
  cursor: "pointer",
  textDecoration: "underline",
  "&:hover": {
    color: theme.palette.primaryColors[600],
    background: "transparent",
  },
};

export const backToSignInWrapper = {
  mt: "auto",
  pt: theme.spacing(18.5),
  textAlign: "left" as const,
};

export const alertStyles = {
  width: "100%",
  fontFamily: theme.typography.fontFamily,
};

export const boxHandleBack = {
  mt: "auto",
  pt: theme.spacing(6),
};
