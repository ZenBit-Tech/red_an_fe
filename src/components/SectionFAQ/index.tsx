import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const SectionFAQ = () => {
  return (
    <Container maxWidth="md" sx={{ pb: 10 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6 }}>
        Найпоширеніші запитання
      </Typography>

      {/* Акордеон 1 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: "bold" }}>
            Як працює де-ідентифікація?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Наш алгоритм автоматично розпізнає та приховує ПІБ, дати та адреси в
            документах.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Акордеон 2 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: "bold" }}>
            Чи це відповідає стандартам безпеки?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Так, ми використовуємо протоколи, що відповідають вимогам HIPAA для
            медичних даних.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Тут додайте ще 2 акордеони за таким же принципом */}
    </Container>
  );
};
