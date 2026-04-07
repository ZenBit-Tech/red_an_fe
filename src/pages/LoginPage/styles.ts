export const container = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(20,184,166,0.07) 0%, transparent 70%), #0a0f1e",
  fontFamily: '"DM Sans", sans-serif',
  position: "relative",
  overflow: "hidden",
};

export const backgroundOverlay = {
  position: "absolute",
  inset: 0,
  backgroundSize: "48px 48px",
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
  px: 2,
  mt: { xs: 0, md: -6 },
};

export const card = {
  width: "100%",
  maxWidth: 420,
  bgcolor: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 3,
  boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
  overflow: "hidden",
};

export const title = {
  fontWeight: 700,
  color: "white",
  mb: 0.75,
  fontFamily: '"DM Sans", sans-serif',
};

export const subtitle = {
  color: "rgba(255,255,255,0.45)",
  mb: 3,
  fontFamily: '"DM Sans", sans-serif',
};

export const inputStyles = {
  fontFamily: '"DM Sans", sans-serif',
  fontSize: "0.95rem",
  borderRadius: "8px",
  bgcolor: "rgba(255,255,255,0.05)",
  color: "white",
  "& input": {
    color: "white",
    "&::placeholder": { color: "rgba(255,255,255,0.2)", opacity: 1 },
  },
  "& fieldset": { borderColor: "rgba(255,255,255,0.12)" },
  "&:hover fieldset": { borderColor: "rgba(255,255,255,0.25)" },
  "&.Mui-focused fieldset": { borderColor: "#14b8a6" },
};

export const inputErrorStyles = {
  ...inputStyles,
  "& fieldset": { borderColor: "#f87171" },
  "&:hover fieldset": { borderColor: "#f87171" },
  "&.Mui-focused fieldset": { borderColor: "#f87171" },
};

export const submitButton = (isValid: boolean) => ({
  py: 1.3,
  borderRadius: "8px",
  fontFamily: '"DM Sans", sans-serif',
  fontWeight: 600,
  fontSize: "0.95rem",
  textTransform: "none",
  bgcolor: isValid ? "#14b8a6" : "rgba(255,255,255,0.07)",
  color: isValid ? "white" : "rgba(255,255,255,0.2)",
  boxShadow: isValid ? "0 0 20px rgba(20,184,166,0.3)" : "none",
  "&:hover": {
    bgcolor: isValid ? "#0d9488" : "rgba(255,255,255,0.07)",
    boxShadow: isValid ? "0 0 28px rgba(20,184,166,0.45)" : "none",
  },
  "&.Mui-disabled": {
    bgcolor: "rgba(255,255,255,0.07)",
    color: "rgba(255,255,255,0.2)",
  },
});

export const linkButton = {
  display: "flex",
  alignItems: "center",
  gap: 0.75,
  color: "rgba(255,255,255,0.3)",
  fontFamily: '"DM Sans", sans-serif',
  fontSize: "0.9rem",
  cursor: "pointer",
  "&:hover": { color: "rgba(255,255,255,0.65)" },
};