import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Button,
  Container,
  Link,
  TextField,
} from "@mui/material";

export const SectionForm = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(28),
  paddingBottom: theme.spacing(25),
  backgroundColor: theme.palette.background.default,
}));

export const CustomContainer = styled(Container)({
  display: "block",
});

export const ContactTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize64,
  fontWeight: theme.typography.fontWeight600,
  color: theme.palette.text.primary,
  lineHeight: "100%",
  letterSpacing: "-0.05em",
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize38,
  },
}));

export const ContactDescription = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.gray[300],
  lineHeight: "156%",
  maxWidth: "480px",
  marginTop: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize14,
    textAlign: "center",
  },
}));

export const FormWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(6),
  width: "100%",
  alignItems: "flex-start",
  marginTop: theme.spacing(8),
}));

export const ContactSidebar = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(6),
  width: "324px",
  height: "184px",
  backgroundColor: theme.palette.dark[200],
  borderRadius: "8px",
  border: `1px solid ${theme.palette.gray[700]}`,
}));

export const ContactLabel = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight600,
  lineHeight: "150%",
  color: theme.palette.white[500],
  marginBottom: theme.spacing(1),
}));

export const EmailLink = styled(Link)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight400,
  lineHeight: "143%",
  color: theme.palette.gray[300], // максимально близько до #c6c6cd
  textDecoration: "none",
  marginBottom: theme.spacing(0.5),
  transition: "color 0.2s ease-in-out",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export const ContactFormBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(9, 8),

  backgroundColor: theme.palette.dark[200],
  borderRadius: "8px",
  flexGrow: 1,
}));

export const ContactForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
}));

export const ContactFormTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize32,
  fontWeight: theme.typography.fontWeight600,
  lineHeight: "150%",
  color: theme.palette.white[500],
  marginBottom: theme.spacing(8),
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(51, 63, 90, 0.4)", // Фон з макета
    borderRadius: "8px",
    padding: "8px 12px",
    color: theme.palette.text.primary,
    "& fieldset": {
      border: "1px solid rgba(175, 198, 255, 0.08)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(175, 198, 255, 0.2)",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },

  // Лейбл (текст над/всередині інпуту)
  "& .MuiInputLabel-root": {
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "133%",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "rgba(187, 198, 197, 0.8)", // Твій колір з Фігми

    //transform: "translate(14px, -9px) scale(1)",
    "&.Mui-focused": {
      color: theme.palette.primary.main,
    },
  },
}));

export const FormGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  rowGap: theme.spacing(6),
  columnGap: theme.spacing(5),
  width: "100%",

  "& .full-width": {
    gridColumn: "span 2",
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  // Скидаємо градієнт Едуарда, щоб він не просвічував
  background: theme.palette.blue[50],
  backgroundColor: theme.palette.blue[50], // Твій #b0c6ff

  // Геометрія з Фігми
  width: "208px",
  height: "60px",
  padding: "20px 40px",
  borderRadius: "8px",
  border: "1px solid rgba(67, 70, 82, 0.15)",

  // Типографіка з Фігми
  fontFamily: theme.typography.fontFamily,
  fontWeight: 700, // Конкретно 700, як у макеті
  fontSize: "14px",
  lineHeight: "143%",
  letterSpacing: "-0.03em",
  textAlign: "center",
  color: "#2d3449", // Темний текст на світлій кнопці

  textTransform: "none", // Щоб текст не став капсом за замовчуванням

  "&:hover": {
    // Трохи підсвічуємо при ховері, щоб було зрозуміло, що кнопка активна
    backgroundColor: theme.palette.white[500],
    background: theme.palette.white[500],
    boxShadow: "0px 4px 12px rgba(176, 198, 255, 0.3)",
  },

  // Адаптивність (якщо на мобілках треба зробити ширшою)
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
