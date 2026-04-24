import { Controller } from "react-hook-form";

import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useContactForm } from "./hooks/useContactForm";
import * as S from "./styles";

export const ContactUsForm = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, errors, control } = useContactForm();

  return (
    <S.SectionForm>
      <S.CustomContainer>
        <S.ContactTitle>{t("contactUs:contactUs.title")}</S.ContactTitle>
        <S.ContactDescription>
          {t("contactUs:contactUs.description")}
        </S.ContactDescription>

        <S.FormWrapper>
          <S.ContactSidebar>
            <S.IconWrapper>
              <MailOutlineIcon />
            </S.IconWrapper>

            <S.ContactLabel>
              {t("contactUs:contactUs.sidebar.emailLabel")}
            </S.ContactLabel>

            <S.EmailLink
              component="a"
              href={`mailto:${import.meta.env.VITE_INFO_EMAIL}`}
            >
              {import.meta.env.VITE_INFO_EMAIL}
            </S.EmailLink>

            <S.EmailLink
              component="a"
              href={`mailto:${import.meta.env.VITE_SUPPORT_EMAIL}`}
            >
              {import.meta.env.VITE_SUPPORT_EMAIL}
            </S.EmailLink>
          </S.ContactSidebar>

          <S.ContactFormBox>
            <S.ContactFormTitle>
              {t("contactUs:contactUs.form.title")}
            </S.ContactFormTitle>

            <S.ContactForm onSubmit={handleSubmit} noValidate>
              <S.FormGrid>
                <S.StyledTextField
                  fullWidth
                  label={t("contactUs:contactUs.form.firstName")}
                  placeholder={t(
                    "contactUs:contactUs.form.placeholder.firstName",
                  )}
                  {...register("firstName", {
                    required: t("contactUs:contactUs.form.validation.required"),
                  })}
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                />
                <S.StyledTextField
                  fullWidth
                  label={t("contactUs:contactUs.form.lastName")}
                  placeholder={t(
                    "contactUs:contactUs.form.placeholder.lastName",
                  )}
                  {...register("lastName", {
                    required: t(
                      "ccontactUs:contactUs.form.validation.required",
                    ),
                  })}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                />

                <Box className="full-width">
                  <S.StyledTextField
                    fullWidth
                    label={t("contactUs:contactUs.form.email")}
                    placeholder={t(
                      "contactUs:contactUs.form.placeholder.email",
                    )}
                    {...register("email", {
                      required: t(
                        "contactUs:contactUs.form.validation.required",
                      ),
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t(
                          "contactUs:contactUs.form.validation.emailInvalid",
                        ),
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
                    render={({ field: { ref, ...fieldProps }, fieldState }) => (
                      <S.StyledPhoneInput
                        {...fieldProps}
                        inputRef={ref}
                        label={t("contactUs:contactUs.form.phone")}
                        fullWidth
                        variant="outlined"
                        defaultCountry="UA"
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        slotProps={{
                          inputLabel: { shrink: true },
                        }}
                      />
                    )}
                  />
                </Box>

                <Box className="full-width">
                  <S.StyledTextField
                    fullWidth
                    maxLength="1000"
                    label={t("contactUs:contactUs.form.message")}
                    placeholder={t(
                      "contactUs:contactUs.form.placeholder.message",
                    )}
                    multiline
                    rows={4}
                    {...register("message", {
                      required: t(
                        "contactUs:contactUs.form.validation.required",
                      ),
                    })}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                  />
                </Box>
              </S.FormGrid>
              <Box className="full-width">
                <S.SubmitButton variant="contained" type="submit">
                  {t("contactUs:contactUs.form.submit")}
                </S.SubmitButton>
              </Box>
            </S.ContactForm>
          </S.ContactFormBox>
        </S.FormWrapper>
      </S.CustomContainer>
    </S.SectionForm>
  );
};
