import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
} from "@mui/material";
import { ArrowBack, MailOutline } from "@mui/icons-material";
import * as styles from "@/pages/LoginPage/styles";
import { apiClient } from "@/common/api/apiClient";

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
    formState: { isValid },
  } = useForm<LoginFormValues>({
    mode: "onChange",
    defaultValues: { email: "" },
  });

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    try {
      await apiClient.post("/auth/magic-link", { email: data.email });
      setSubmittedEmail(data.email);
      setStep("checkInbox");
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = () => onSubmit({ email: submittedEmail });
  const handleBackToSignIn = () => setStep("form");
  const handleBack = () => navigate(-1);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.backgroundOverlay} />
      <Box sx={styles.contentWrapper}>
        <Box sx={styles.card}>
          {step === "form" ? (
            <Box sx={styles.cardInner}>
              <Typography variant="h1" sx={styles.title}>
                {t("login.title")}
              </Typography>
              <Typography variant="body1" sx={styles.subtitle}>
                {t("login.subtitle") ||
                  "Enter your email to receive a sign-in link"}
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Typography component="label" sx={styles.labelStyles}>
                  {t("login.emailLabel")}
                  <Box
                    component="span"
                    sx={{ color: "rgba(255, 255, 255, 0.6)", ml: 0.5 }}
                  >
                    *
                  </Box>
                </Typography>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      placeholder={t("login.emailPlaceholder")}
                      InputProps={{
                        sx: styles.inputStyles,
                      }}
                    />
                  )}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={!isValid || isLoading}
                  sx={styles.submitButton}
                >
                  {isLoading ? t("login.sending") : t("login.sendMagicLink")}
                </Button>
              </form>
              <Box sx={{ mt: "auto", pt: "24px" }}>
                <Divider sx={styles.dividerStyles} />
                <Link
                  component="button"
                  onClick={handleBack}
                  underline="none"
                  sx={styles.linkButton}
                >
                  <ArrowBack sx={{ fontSize: 18 }} />
                  {t("login.back")}
                </Link>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                ...styles.cardInner,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ mb: "16px" }}>
                  <MailOutline sx={{ fontSize: 56, color: "#afc6ff" }} />
                </Box>
                <Typography variant="h3" sx={{ ...styles.title, mb: "8px" }}>
                  {t("login.checkInboxTitle")}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ ...styles.subtitle, mb: "32px", fontSize: "15px" }}
                >
                  {t("login.checkInboxDescription") ||
                    "We sent a magic link to"}{" "}
                  <Box component="span" sx={{ color: "#FFFFFF" }}>
                    {submittedEmail}
                  </Box>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.4)",
                    fontFamily: styles.font,
                    mb: "16px",
                  }}
                >
                  {t("login.didntReceive")}{" "}
                  <Link
                    component="button"
                    onClick={handleResend}
                    underline="hover"
                    sx={{
                      color: "#0D47A1",
                      fontSize: "0.875rem",
                      cursor: "pointer",
                      textDecoration: "underline",
                      "&:hover": { color: "#1565C0" },
                    }}
                  >
                    {t("login.resendLink")}
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ mt: "auto", pt: "75px", textAlign: "left" }}>
                <Divider sx={styles.dividerStyles} />
                <Link
                  component="button"
                  onClick={handleBackToSignIn}
                  underline="none"
                  sx={styles.linkButton}
                >
                  <ArrowBack sx={{ fontSize: 18 }} />
                  {t("login.backToSignIn")}
                </Link>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
