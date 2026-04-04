import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

export const SectionFAQ = () => {
  const { t } = useTranslation();

  // Отримуємо масив питань із i18n
  // returnObjects: true дозволяє витягнути масив об'єктів з JSON
  const faqItems = t("faq.items", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <Container maxWidth="md" sx={{ pb: 10 }}>
      <Typography variant="h4" align="center" sx={{ mb: 6 }}>
        {t("faq.title")}
      </Typography>

      {faqItems.map((item, index) => (
        <Accordion key={index} disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};
