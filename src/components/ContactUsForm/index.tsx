import { TextField, Button, Stack, Box } from "@mui/material";
import { useContactForm } from "./hooks/useContactForm";
import {
  SectionForm,
  CustomContainer,
  ContactTitle,
  ContactDescription,
  FormWrapper,
  ContactSidebar,
  ContactFormBox,
  EmailLink,
  ContactLabel,
  ContactForm,
  ContactFormTitle,
  FormGrid,
} from "./styles";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useTranslation } from "react-i18next";

export const ContactUsForm = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useContactForm();

  return (
    <SectionForm>
      <CustomContainer>
        <Stack spacing={4}>
          <ContactTitle variant="h1">{t("contactUs.title")}</ContactTitle>
          <ContactDescription>{t("contactUs.description")}</ContactDescription>

          <FormWrapper>
            <ContactSidebar>
              <MailOutlineIcon
                sx={{
                  color: "#155DFC",
                  fontSize: "20px",
                  marginBottom: "26px",
                }}
              />
              <ContactLabel>{t("contactUs.sidebar.emailLabel")}</ContactLabel>
              <EmailLink href="mailto:info@clinicaldatastudio.com">
                info@clinicaldatastudio.com
              </EmailLink>
              <EmailLink href="mailto:support@clinicaldatastudio.com">
                support@clinicaldatastudio.com
              </EmailLink>
            </ContactSidebar>

            <ContactFormBox>
              <ContactFormTitle variant="h2">
                {t("contactUs.form.title")}
              </ContactFormTitle>

              <ContactForm onSubmit={handleSubmit} noValidate>
                <FormGrid>
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
                    <TextField
                      fullWidth
                      label={t("contactUs.form.phone")}
                      placeholder={t("contactUs.form.placeholder.phone")}
                      {...register("phone")}
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
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{ width: "fit-content", px: 4, py: 1.5 }}
                    >
                      {t("contactUs.form.submit")}
                    </Button>
                  </Box>
                </FormGrid>
              </ContactForm>
            </ContactFormBox>
          </FormWrapper>
        </Stack>
      </CustomContainer>
    </SectionForm>
  );
};
