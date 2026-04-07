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
import * as S from "./styles";
type LoginStep = "form" | "checkInbox";
interface LoginFormValues {
  email: string;
}
const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [step, setStep] = useState<LoginStep>("form");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormValues>({
    mode: "onChange",
    defaultValues: { email: "" },
  });
  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:3000/auth/magic-link/request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: data.email }),
        },
      );
      if (response.ok) {
        setSubmittedEmail(data.email);
        setStep("checkInbox");
      } else {
        console.error("Помилка при відправці пошти");
      }
    } catch (error) {
      console.error("Помилка з'єднання з сервером", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = () => {
    onSubmit({ email: submittedEmail });
  };
  const handleBackToSignIn = () => setStep("form");
  const handleBack = () => navigate(-1);
  return (
    <>
      <CssBaseline />
      <Box sx={S.container}>
        <Box sx={S.backgroundOverlay} />
        <Box sx={S.contentWrapper}>
          <Box sx={S.card}>
            {step === "form" ? (
              <Box sx={{ px: 4, py: 4.5 }}>
                <Typography variant="h5" sx={S.title}>
                  {t("login.title")}
                </Typography>
                <Typography variant="body2" sx={S.subtitle}>
                  {t("login.subtitle")}
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <Typography
                    variant="caption"
                    sx={{
                      ...S.title,
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.7)",
                      display: "block",
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
                          sx: errors.email ? S.inputErrorStyles : S.inputStyles,
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
                    disabled={!isValid || isLoading}
                    sx={{
                      ...S.submitButton(isValid && !isLoading),
                      mt: errors.email ? 1.5 : 0,
                    }}
                  >
                    {isLoading ? "Відправка..." : t("login.sendMagicLink")}
                  </Button>
                </form>

                <Box display="flex" justifyContent="center" mt={2.5}>
                  <Link
                    component="button"
                    onClick={handleBack}
                    underline="none"
                    sx={S.linkButton}
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
                <Typography variant="h5" sx={S.title}>
                  {t("login.checkInboxTitle")}
                </Typography>
                <Typography variant="body2" sx={S.subtitle}>
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
                    sx={S.linkButton}
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
