import { styled } from "@mui/material/styles";
import { Box, Accordion, AccordionSummary, Typography } from "@mui/material";

export const FAQWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(9, 0, 75, 0),
  backgroundColor: theme.palette.backgroundColor,
}));

export const StyledContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1440px",
  margin: "0 auto",
  padding: theme.spacing(0, 2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(0, 15),
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(0, 20),
  },
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
}));

export const FAQTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize36,
  fontWeight: theme.typography.fontWeight700,
  fontFamily: theme.typography.secondFamily,
  textAlign: "center",
  marginBottom: theme.spacing(12),
  color: theme.palette.text.primary,
}));

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  borderRadius: "8px",
  backgroundColor: theme.palette.neutralColors[900],
  "&:before": {
    display: "none",
  },

  "&:last-child": {
    borderBottom: "none",
  },

  "&.Mui-expanded": {
    margin: 0,
    backgroundColor: theme.palette.neutralColors[900],
  },

  "&.MuiAccordion-root": {
    borderRadius: "8px",
    margin: 0,
    "&:before": { display: "none" },
    "&:first-of-type, &:last-of-type": {
      borderRadius: "8px",
    },
  },

  "& .MuiAccordionSummary-expandIconWrapper": {
    color: theme.palette.primaryColors[200],
    "& .MuiSvgIcon-root": {
      fontSize: "24px",
    },
  },
}));

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: theme.spacing(6),
  height: "80px",
  borderRadius: "8px",
  "& .MuiAccordionSummary-content": {},
}));

export const QuestionText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight400,
  color: "#b0c6ff",
  lineHeight: "133%",
}));

export const StyledAccordionDetails = styled(Box)(() => ({
  borderRadius: "8px",
}));

export const AnswerText = styled(Typography)(({ theme }) => ({
  borderRadius: "8px",
  fontSize: theme.typography.fontSize16,
  padding: theme.spacing(6),
  fontWeight: theme.typography.fontWeight500,
  color: "#c3c6d4",
  lineHeight: "150%",
}));
