import { styled } from "@mui/material/styles";
import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";

export const FAQWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(9, 0, 24),
  backgroundColor: theme.palette.backgroundColor,
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(15, 0),
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(8, 0),
  },
}));

export const StyledContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1440px",
  margin: "0 auto",
  padding: theme.spacing(0, 46),

  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(0, 10),
    maxWidth: "768px",
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 4),
    maxWidth: "375px",
  },
}));

export const FAQTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize38,
  fontWeight: theme.typography.fontWeight700,
  fontFamily: theme.typography.secondFamily,
  textAlign: "center",
  marginBottom: theme.spacing(12),
  color: theme.palette.text.primary,
  [theme.breakpoints.down("lg")]: {
    marginBottom: theme.spacing(2),
  },
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize32,
  },
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
  gap: theme.spacing(8),
  "& .MuiAccordionSummary-content": {},
  [theme.breakpoints.down("lg")]: { height: "112px" },
  [theme.breakpoints.down("md")]: {
    height: "128px",
    padding: theme.spacing(4),
    gap: theme.spacing(1),
  },
}));

export const QuestionText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize24,
  fontWeight: theme.typography.fontWeight400,
  color: "#b0c6ff",

  [theme.breakpoints.down("md")]: { fontSize: theme.typography.fontSize20 },
}));

export const StyledAccordionDetails = styled(AccordionDetails)(() => ({
  borderRadius: "8px",
  padding: 0,
}));

export const AnswerText = styled(Typography)(({ theme }) => ({
  borderRadius: "8px",
  fontSize: theme.typography.fontSize18,
  padding: theme.spacing(6),
  fontWeight: theme.typography.fontWeight500,
  color: "#c3c6d4",
  lineHeight: "150%",
  [theme.breakpoints.down("lg")]: {
    fontSize: theme.typography.fontSize16,
    paddingTop: theme.spacing(0),
  },
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize16,
    padding: theme.spacing(0, 4, 4),
  },
}));
