import { useTranslation } from "react-i18next";
import { Controller } from "react-hook-form";
import { Snackbar } from "@mui/material";
import { ArrowBack, MailOutline } from "@mui/icons-material";

import { LOGIN_STEPS, useLogin } from "./hooks/useLogin";
import * as S from "@/pages/LoginPage/styles";

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
    <S.Container>
      <S.BackgroundOverlay />
      <S.ContentWrapper>
        <S.CardContainer>
          {step === LOGIN_STEPS.FORM ? (
            <S.CardInner>
              <S.Title>{t("login.title")}</S.Title>
              <S.Subtitle>{t("login.subtitle")}</S.Subtitle>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <S.LabelStyles>
                  {t("login.emailLabel")}
                  <S.RequiredAsterisk>*</S.RequiredAsterisk>
                </S.LabelStyles>
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <S.StyledInput
                      {...field}
                      fullWidth
                      placeholder={t("login.emailPlaceholder")}
                      error={!!error}
                      FormHelperTextProps={{
                        sx: { marginLeft: 0 },
                      }}
                    />
                  )}
                />
                <S.SubmitButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={!isValid || isLoading}
                >
                  {isLoading ? t("login.sending") : t("login.sendMagicLink")}
                </S.SubmitButton>
              </form>
              <S.BoxHandleBack>
                <S.StyledDivider />
                <S.LinkButton onClick={handleBack}>
                  <ArrowBack />
                  {t("login.back")}
                </S.LinkButton>
              </S.BoxHandleBack>
            </S.CardInner>
          ) : (
            <S.CheckInboxCardInner>
              <S.CheckInboxContent>
                <S.MailIconWrapper>
                  <MailOutline />
                </S.MailIconWrapper>
                <S.CheckInboxTitle>
                  {t("login.checkInboxTitle")}
                </S.CheckInboxTitle>
                <S.CheckInboxSubtitle>
                  {t("login.checkInboxDescription")}{" "}
                  <S.SubmittedEmailText>{submittedEmail}</S.SubmittedEmailText>
                </S.CheckInboxSubtitle>
                <S.ResendBlock>
                  <S.DidntReceiveText>
                    {t("login.didntReceive")}
                  </S.DidntReceiveText>
                  <S.ResendLinkAction onClick={handleResend}>
                    {t("login.resendLink")}
                  </S.ResendLinkAction>
                </S.ResendBlock>
              </S.CheckInboxContent>
              <S.BackToSignInWrapper>
                <S.StyledDivider />
                <S.LinkButton onClick={handleBackToSignIn}>
                  <ArrowBack />
                  {t("login.home")}
                </S.LinkButton>
              </S.BackToSignInWrapper>
            </S.CheckInboxCardInner>
          )}
        </S.CardContainer>
      </S.ContentWrapper>
      <Snackbar
        open={!!toastErrorKey}
        autoHideDuration={6000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <S.StyledAlert
          onClose={handleCloseToast}
          severity="error"
          variant="filled"
        >
          {toastErrorKey ? t(toastErrorKey) : ""}
        </S.StyledAlert>
      </Snackbar>
    </S.Container>
  );
};

export default LoginPage;
