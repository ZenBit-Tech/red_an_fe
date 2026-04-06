import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Link,
  Divider,
  CssBaseline,
} from "@mui/material";
import { ArrowBack, ErrorOutline, MailOutline } from "@mui/icons-material";

type LoginStep = "form" | "checkInbox";

interface LoginFormValues {
  email: string;
}
const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [step, setStep] = useState<LoginStep>("form");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormValues>({
    mode: "onChange",
    defaultValues: { email: "" },
  });
  const onSubmit = (data: LoginFormValues) => {
    setSubmittedEmail(data.email);
    setStep("checkInbox");
  };
  const handleResend = () => {
    console.log("Resending link to", submittedEmail);
  };
  const handleBackToSignIn = () => {
    setStep("form");
  };
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(20,184,166,0.07) 0%, transparent 70%), #0a0f1e",
          fontFamily: '"DM Sans", sans-serif',
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundSize: "48px 48px",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
            mt: { xs: 0, md: -6 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 420,
              bgcolor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 3,
              boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
              overflow: "hidden",
            }}
          >
            {step === "form" ? (
              <Box sx={{ px: 4, py: 4.5 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "white",
                    mb: 0.75,
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                >
                  {t("login.title")}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.45)",
                    mb: 3,
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                >
                  {t("login.subtitle")}
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.7)",
                      mb: 0.5,
                      display: "block",
                      fontFamily: '"DM Sans", sans-serif',
                    }}
                  >
                    {t("login.emailLabel")}
                    <Box component="span" sx={{ color: "#f87171", ml: 0.25 }}>
                      *
                    </Box>
                  </Typography>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: t("login.emailRequired"),
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: t("login.emailInvalid"),
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        placeholder={t("login.emailPlaceholder")}
                        error={!!errors.email}
                        size="small"
                        InputProps={{
                          endAdornment: errors.email ? (
                            <InputAdornment position="end">
                              <ErrorOutline
                                sx={{ color: "#f87171", fontSize: 20 }}
                              />
                            </InputAdornment>
                          ) : null,
                          sx: {
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: "0.95rem",
                            borderRadius: "8px",
                            bgcolor: "rgba(255,255,255,0.05)",
                            color: "white",
                            "& input": {
                              color: "white",
                              "&::placeholder": {
                                color: "rgba(255,255,255,0.2)",
                                opacity: 1,
                              },
                            },
                            "& fieldset": {
                              borderColor: errors.email
                                ? "#f87171"
                                : "rgba(255,255,255,0.12)",
                            },
                            "&:hover fieldset": {
                              borderColor: errors.email
                                ? "#f87171"
                                : "rgba(255,255,255,0.25)",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: errors.email ? "#f87171" : "#14b8a6",
                            },
                          },
                        }}
                        sx={{ mb: errors.email ? 0.5 : 3 }}
                      />
                    )}
                  />
                  {errors.email && (
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#f87171",
                        mb: 2.5,
                        display: "block",
                        fontFamily: '"DM Sans", sans-serif',
                      }}
                    >
                      {errors.email.message}
                    </Typography>
                  )}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={!isValid}
                    sx={{
                      mt: errors.email ? 1.5 : 0,
                      py: 1.3,
                      borderRadius: "8px",
                      fontFamily: '"DM Sans", sans-serif',
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      textTransform: "none",
                      bgcolor: isValid ? "#14b8a6" : "rgba(255,255,255,0.07)",
                      color: isValid ? "white" : "rgba(255,255,255,0.2)",
                      boxShadow: isValid
                        ? "0 0 20px rgba(20,184,166,0.3)"
                        : "none",
                      "&:hover": {
                        bgcolor: isValid ? "#0d9488" : "rgba(255,255,255,0.07)",
                        boxShadow: isValid
                          ? "0 0 28px rgba(20,184,166,0.45)"
                          : "none",
                      },
                      "&.Mui-disabled": {
                        bgcolor: "rgba(255,255,255,0.07)",
                        color: "rgba(255,255,255,0.2)",
                      },
                    }}
                  >
                    {t("login.sendMagicLink")}
                  </Button>
                </form>
                <Box display="flex" justifyContent="center" mt={2.5}>
                  <Link
                    component="button"
                    onClick={handleBack}
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.75,
                      color: "rgba(255,255,255,0.3)",
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      "&:hover": { color: "rgba(255,255,255,0.65)" },
                    }}
                  >
                    <ArrowBack sx={{ fontSize: 16 }} />
                    {t("login.back")}
                  </Link>
                </Box>
              </Box>
            ) : (
              <Box sx={{ px: 4, py: 5, textAlign: "center" }}>
                <Box sx={{ mb: 2 }}>
                  <MailOutline sx={{ fontSize: 48, color: "#14b8a6" }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "white",
                    mb: 1,
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                >
                  {t("login.checkInboxTitle")}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.45)",
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                >
                  {t("login.checkInboxDescription")}{" "}
                  <Box
                    component="span"
                    sx={{ fontWeight: 700, color: "rgba(255,255,255,0.85)" }}
                  >
                    {submittedEmail}
                  </Box>
                </Typography>
                <Divider
                  sx={{ my: 3, borderColor: "rgba(255,255,255,0.08)" }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.4)",
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                >
                  {t("login.didntReceive")}{" "}
                  <Link
                    component="button"
                    onClick={handleResend}
                    underline="hover"
                    sx={{
                      color: "#14b8a6",
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: "0.875rem",
                      cursor: "pointer",
                      "&:hover": { color: "#2dd4bf" },
                    }}
                  >
                    {t("login.resendLink")}
                  </Link>
                </Typography>
                <Box display="flex" justifyContent="center" mt={2.5}>
                  <Link
                    component="button"
                    onClick={handleBackToSignIn}
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.75,
                      color: "rgba(255,255,255,0.3)",
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      "&:hover": { color: "rgba(255,255,255,0.65)" },
                    }}
                  >
                    <ArrowBack sx={{ fontSize: 16 }} />
                    {t("login.backToSignIn")}
                  </Link>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default LoginPage;
