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

export const ContactUsForm = () => {
  // Дістаємо register та errors
  const { register, handleSubmit, errors } = useContactForm();

  return (
    <SectionForm>
      <CustomContainer>
        <Stack spacing={4}>
          <ContactTitle variant="h1">Contact Us</ContactTitle>
          <ContactDescription>
            Have questions? We're here to help. Reach out to our team and we'll
            get back to you shortly.
          </ContactDescription>

          <FormWrapper>
            <ContactSidebar>
              <MailOutlineIcon
                sx={{
                  color: "#155DFC",
                  fontSize: "20px",
                  marginBottom: "26px",
                }}
              />
              <ContactLabel>Email</ContactLabel>
              <EmailLink href="mailto:info@clinicaldatastudio.com">
                info@clinicaldatastudio.com
              </EmailLink>
              <EmailLink href="mailto:support@clinicaldatastudio.com">
                support@clinicaldatastudio.com
              </EmailLink>
            </ContactSidebar>

            <ContactFormBox>
              <ContactFormTitle variant="h2">
                Send us a message
              </ContactFormTitle>

              {/* noValidate вимикає стандартні браузерні підказки, щоб працювали MUI-помилки */}
              <ContactForm onSubmit={handleSubmit} noValidate>
                <FormGrid>
                  <TextField
                    fullWidth
                    label="First Name"
                    placeholder="John"
                    {...register("firstName", { required: "Вкажіть ім'я" })}
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                  />
                  <TextField
                    fullWidth
                    label="Last Name"
                    placeholder="Doe"
                    {...register("lastName", { required: "Вкажіть прізвище" })}
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                  />

                  <Box className="full-width">
                    <TextField
                      fullWidth
                      label="Email"
                      placeholder="example@mail.com"
                      {...register("email", {
                        required: "Email обов'язковий",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Невірний формат email",
                        },
                      })}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  </Box>

                  <Box className="full-width">
                    <TextField
                      fullWidth
                      label="Phone Number"
                      placeholder="+380..."
                      {...register("phone")}
                    />
                  </Box>

                  <Box className="full-width">
                    <TextField
                      fullWidth
                      label="Message"
                      placeholder="How can we help?"
                      multiline
                      rows={4}
                      {...register("message", {
                        required: "Напишіть нам щось",
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
                      Send Message
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
