import { ContactUsForm } from "../../components/ContactUsForm";
import { SectionFAQ } from "../../components/SectionFAQ";
import { Box } from "@mui/material";

export const ContactUsPage = () => {
  return (
    <Box component="main">
      <ContactUsForm />
      <SectionFAQ />
    </Box>
  );
};
