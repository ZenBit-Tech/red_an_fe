import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

export const SectionFAQ = () => {
  const { t } = useTranslation();

  const faqItems = t("contactUs:faq.items", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <S.FAQWrapper>
      <S.StyledContainer maxWidth="md">
        <S.FAQTitle>{t("contactUs:faq.title")}</S.FAQTitle>

        {faqItems.map((item, index) => (
          <S.StyledAccordion key={index} disableGutters elevation={0}>
            <S.StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <S.QuestionText>{item.question}</S.QuestionText>
            </S.StyledAccordionSummary>
            <S.StyledAccordionDetails>
              <S.AnswerText>{item.answer}</S.AnswerText>
            </S.StyledAccordionDetails>
          </S.StyledAccordion>
        ))}
      </S.StyledContainer>
    </S.FAQWrapper>
  );
};
