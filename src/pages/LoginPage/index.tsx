import { useTranslation } from "react-i18next";
import { Controller } from "react-hook-form";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import { ArrowBack, MailOutline } from "@mui/icons-material";
import * as styles from "@/pages/LoginPage/styles";
import { LOGIN_STEPS, useLogin } from "./hooks/useLogin";

const LoginPage = () => {
  const {
    step,
    toastErrorKey,
    submittedEmail,
    isLoading,
    control,
    handleSubmit,
    isValid,
    onSubmit,
    handleResend,
    handleBackToSignIn,
    handleBack,
    handleCloseToast,
  } = useLogin();
  const { t } = useTranslation();
  return (
    <Box sx={styles.container}>
      <Box sx={styles.backgroundOverlay} />
      <Box sx={styles.contentWrapper}>
        <Box sx={styles.card}>
          {step === LOGIN_STEPS.FORM ? (
            <Box sx={styles.cardInner}>
              <Typography component="h1" sx={styles.title}>
                {t("login.title")}
              </Typography>
              <Typography component="p" sx={styles.subtitle}>
                {t("login.subtitle")}
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Typography component="label" sx={styles.labelStyles}>
                  {t("login.emailLabel")}
                  <Box component="span" sx={styles.requiredAsterisk}>
                    *
                  </Box>
                </Typography>
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      fullWidth
                      placeholder={t("login.emailPlaceholder")}
                      error={!!error}
                      InputProps={{
                        sx: styles.inputStyles,
                      }}
                      FormHelperTextProps={{
                        sx: { marginLeft: 0 },
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
              <Box sx={styles.boxHandleBack}>
                <Divider sx={styles.dividerStyles} />
                <Link
                  component="button"
                  onClick={handleBack}
                  underline="none"
                  sx={styles.linkButton}
                >
                  <ArrowBack sx={styles.arrowBack} />
                  {t("login.back")}
                </Link>
              </Box>
            </Box>
          ) : (
            <Box sx={styles.checkInboxCardInner}>
              <Box sx={styles.checkInboxContent}>
                <Box sx={styles.mailIconWrapper}>
                  <MailOutline sx={styles.mailIcon} />
                </Box>
                <Typography component="h3" sx={styles.checkInboxTitle}>
                  {t("login.checkInboxTitle")}
                </Typography>
                <Typography component="p" sx={styles.checkInboxSubtitle}>
                  {t("login.checkInboxDescription")}{" "}
                  <Box component="span" sx={styles.colorWhite}>
                    {submittedEmail}
                  </Box>
                </Typography>
                <Typography component="p" sx={styles.didntReceiveText}>
                  {t("login.didntReceive")}{" "}
                  <Link
                    component="button"
                    onClick={handleResend}
                    underline="hover"
                    sx={styles.resendLinkAction}
                  >
                    {t("login.resendLink")}
                  </Link>
                </Typography>
              </Box>
              <Box sx={styles.backToSignInWrapper}>
                <Divider sx={styles.dividerStyles} />
                <Link
                  component="button"
                  onClick={handleBackToSignIn}
                  underline="none"
                  sx={styles.linkButton}
                >
                  <ArrowBack sx={styles.arrowBack} />
                  {t("login.back")}
                </Link>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Snackbar
        open={!!toastErrorKey}
        autoHideDuration={6000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseToast}
          severity="error"
          variant="filled"
          sx={styles.alertStyles}
        >
          {toastErrorKey ? t(toastErrorKey) : ""}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginPage;
