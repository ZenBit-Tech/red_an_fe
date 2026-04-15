import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Accordion,
  AccordionSummary,
  Typography,
} from "@mui/material";

export const FAQWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(20, 0),
  backgroundColor: theme.palette.background.default,
}));

export const StyledContainer = styled(Container)(() => ({
  display: "block",
}));

export const FAQTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize38,
  fontWeight: theme.typography.fontWeight600,
  textAlign: "center",
  marginBottom: theme.spacing(10),
  color: theme.palette.text.primary,
}));

export const QuestionText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight600,
  color: theme.palette.text.primary,
}));

export const AnswerText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.text.secondary,
}));

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.divider}`,

  "&:before": {
    display: "none",
  },

  "&:last-child": {
    borderBottom: "none",
  },
}));

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  "& .MuiAccordionSummary-content": {
    margin: theme.spacing(3, 0),
  },
}));
