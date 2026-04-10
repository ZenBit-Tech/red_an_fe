import { Box } from "@mui/material";

import { ContactUsForm } from "@/components/ContactUsForm";
import { SectionFAQ } from "@/components/SectionFAQ";

export const ContactUsPage = () => {
  return (
    <Box component="main">
      <ContactUsForm />
      <SectionFAQ />
    </Box>
  );
};
