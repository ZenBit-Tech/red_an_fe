import { AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

export const SectionFAQ = () => {
  const { t } = useTranslation();

  const faqItems = t("faq.items", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <S.FAQWrapper>
      <S.StyledContainer maxWidth="md">
        <S.FAQTitle>{t("faq.title")}</S.FAQTitle>

        {faqItems.map((item, index) => (
          <S.StyledAccordion key={index} disableGutters elevation={0}>
            <S.StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <S.QuestionText>{item.question}</S.QuestionText>
            </S.StyledAccordionSummary>
            <AccordionDetails sx={{ px: 0, pb: 4 }}>
              <S.AnswerText>{item.answer}</S.AnswerText>
            </AccordionDetails>
          </S.StyledAccordion>
        ))}
      </S.StyledContainer>
    </S.FAQWrapper>
  );
};
