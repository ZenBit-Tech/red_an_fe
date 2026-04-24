import { useTranslation } from "react-i18next";
import { Controller } from "react-hook-form";
import { Snackbar } from "@mui/material";
import { ArrowBack, MailOutline } from "@mui/icons-material";

import { LOGIN_STEPS, useLogin } from "./hooks/useLogin";
import {
  BackgroundOverlay,
  BackToSignInWrapper,
  BoxHandleBack,
  CardContainer,
  CardInner,
  CheckInboxCardInner,
  CheckInboxContent,
  CheckInboxSubtitle,
  CheckInboxTitle,
  Container,
  ContentWrapper,
  DidntReceiveText,
  LabelStyles,
  LinkButton,
  MailIconWrapper,
  RequiredAsterisk,
  ResendBlock,
  ResendLinkAction,
  StyledAlert,
  StyledDivider,
  StyledInput,
  SubmitButton,
  SubmittedEmailText,
  Subtitle,
  Title,
} from "@/pages/LoginPage/styles";

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
    <Container>
      <BackgroundOverlay />
      <ContentWrapper>
        <CardContainer>
          {step === LOGIN_STEPS.FORM ? (
            <CardInner>
              <Title>{t("login.title")}</Title>
              <Subtitle>{t("login.subtitle")}</Subtitle>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <LabelStyles>
                  {t("login.emailLabel")}
                  <RequiredAsterisk>*</RequiredAsterisk>
                </LabelStyles>
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <StyledInput
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
                <SubmitButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={!isValid || isLoading}
                >
                  {isLoading ? t("login.sending") : t("login.sendMagicLink")}
                </SubmitButton>
              </form>
              <BoxHandleBack>
                <StyledDivider />
                <LinkButton onClick={handleBack}>
                  <ArrowBack />
                  {t("login.back")}
                </LinkButton>
              </BoxHandleBack>
            </CardInner>
          ) : (
            <CheckInboxCardInner>
              <CheckInboxContent>
                <MailIconWrapper>
                  <MailOutline />
                </MailIconWrapper>
                <CheckInboxTitle>{t("login.checkInboxTitle")}</CheckInboxTitle>
                <CheckInboxSubtitle>
                  {t("login.checkInboxDescription")}{" "}
                  <SubmittedEmailText>{submittedEmail}</SubmittedEmailText>
                </CheckInboxSubtitle>
                <ResendBlock>
                  <DidntReceiveText>{t("login.didntReceive")}</DidntReceiveText>
                  <ResendLinkAction onClick={handleResend}>
                    {t("login.resendLink")}
                  </ResendLinkAction>
                </ResendBlock>
              </CheckInboxContent>
              <BackToSignInWrapper>
                <StyledDivider />
                <LinkButton onClick={handleBackToSignIn}>
                  <ArrowBack />
                  {t("login.back")}
                </LinkButton>
              </BackToSignInWrapper>
            </CheckInboxCardInner>
          )}
        </CardContainer>
      </ContentWrapper>
      <Snackbar
        open={!!toastErrorKey}
        autoHideDuration={6000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <StyledAlert
          onClose={handleCloseToast}
          severity="error"
          variant="filled"
        >
          {toastErrorKey ? t(toastErrorKey) : ""}
        </StyledAlert>
      </Snackbar>
    </Container>
  );
};

export default LoginPage;
