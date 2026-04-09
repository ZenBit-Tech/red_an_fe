import { Controller } from "react-hook-form";
import { MuiTelInput } from "mui-tel-input";
import { TextField, Stack, Box } from "@mui/material";
import { useContactForm } from "./hooks/useContactForm";
import * as S from "./styles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useTranslation } from "react-i18next";

export const ContactUsForm = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, errors, control } = useContactForm();

  return (
    <S.SectionForm>
      <S.CustomContainer>
        <Stack spacing={4}>
          <S.ContactTitle>{t("contactUs.title")}</S.ContactTitle>
          <S.ContactDescription>
            {t("contactUs.description")}
          </S.ContactDescription>

          <S.FormWrapper>
            <S.ContactSidebar>
              <MailOutlineIcon
                sx={{
                  color: "primary.main",
                  fontSize: "24px",
                  marginBottom: 6,
                }}
              />
              <S.ContactLabel>
                {t("contactUs.sidebar.emailLabel")}
              </S.ContactLabel>
              <S.EmailLink href="mailto:info@clinicaldatastudio.com">
                info@clinicaldatastudio.com
              </S.EmailLink>
              <S.EmailLink href="mailto:support@clinicaldatastudio.com">
                support@clinicaldatastudio.com
              </S.EmailLink>
            </S.ContactSidebar>

            <S.ContactFormBox>
              <S.ContactFormTitle>
                {t("contactUs.form.title")}
              </S.ContactFormTitle>

              <S.ContactForm onSubmit={handleSubmit} noValidate>
                <S.FormGrid>
                  <TextField
                    fullWidth
                    label={t("contactUs.form.firstName")}
                    placeholder={t("contactUs.form.placeholder.firstName")}
                    {...register("firstName", {
                      required: t("contactUs.form.validation.required"),
                    })}
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                  />
                  <TextField
                    fullWidth
                    label={t("contactUs.form.lastName")}
                    placeholder={t("contactUs.form.placeholder.lastName")}
                    {...register("lastName", {
                      required: t("contactUs.form.validation.required"),
                    })}
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                  />

                  <Box className="full-width">
                    <TextField
                      fullWidth
                      label={t("contactUs.form.email")}
                      placeholder={t("contactUs.form.placeholder.email")}
                      {...register("email", {
                        required: t("contactUs.form.validation.required"),
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: t("contactUs.form.validation.emailInvalid"),
                        },
                      })}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  </Box>

                  <Box className="full-width">
                    <Controller
                      name="phone"
                      control={control}
                      render={({
                        field: { ref, ...fieldProps },
                        fieldState,
                      }) => (
                        <MuiTelInput
                          {...fieldProps}
                          inputRef={ref}
                          label={t("contactUs.form.phone")}
                          fullWidth
                          variant="outlined"
                          defaultCountry="UA"
                          error={!!fieldState.error}
                          helperText={fieldState.error?.message}
                        />
                      )}
                    />
                  </Box>

                  <Box className="full-width">
                    <TextField
                      fullWidth
                      label={t("contactUs.form.message")}
                      placeholder={t("contactUs.form.placeholder.message")}
                      multiline
                      rows={4}
                      {...register("message", {
                        required: t("contactUs.form.validation.required"),
                      })}
                      error={!!errors.message}
                      helperText={errors.message?.message}
                    />
                  </Box>

                  <Box className="full-width">
                    <S.SubmitButton variant="contained" type="submit">
                      {t("contactUs.form.submit")}
                    </S.SubmitButton>
                  </Box>
                </S.FormGrid>
              </S.ContactForm>
            </S.ContactFormBox>
          </S.FormWrapper>
        </Stack>
      </S.CustomContainer>
    </S.SectionForm>
  );
};
