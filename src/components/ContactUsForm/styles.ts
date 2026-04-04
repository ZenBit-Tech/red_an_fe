import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

export const SectionForm = styled(Box)(({ theme }) => ({
  paddingTop: "112px",
  paddingBottom: "100px",
  backgroundColor: theme.palette.background.default,
}));

export const CustomContainer = styled(Box)({
  padding: "0 144px", // додаємо падінг з боків для мобільних пристроїв
});

export const ContactTitle = styled(Typography)({
  fontWeight: 400,
  fontSize: "56px",
  lineHeight: "109%",
  color: "#101828",
  textAlign: "left",
});

export const ContactDescription = styled(Typography)({
  fontWeight: 400,
  fontSize: "17px",
  lineHeight: "171%",
  color: "#6a7282",
  textAlign: "left",
  maxWidth: "480px",
});

export const FormWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "24px",
  width: "100%",
  alignItems: "flex-start", // щоб ліва частина не розтягувалася по висоті форми
  margin: "0 auto",
  marginTop: "48px",
});

export const ContactSidebar = styled(Box)({
  flexDirection: "column",
  padding: "25px",
  display: "flex",
  width: "320px",
});

export const ContactFormBox = styled(Box)({
  padding: "40px",
  flexGrow: 1, // дозволяємо займати весь доступний простір
});

export const ContactLabel = styled(Typography)({
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "150%", // ~27px
  color: "#101828",
  marginBottom: "8px", // mb: 1 у MUI це зазвичай 8px
});

export const EmailLink = styled("a")({
  fontSize: "14px",
  lineHeight: "164%",
  fontWeight: 400,
  color: "#6a7282",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

export const ContactForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const ContactFormTitle = styled(Typography)({
  fontWeight: "400",
  fontSize: "25px",
  lineHeight: "152%",
  color: "#101828",
  marginBottom: "32px",
});

export const FormGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)", // Дві рівні колонки
  rowGap: "24px",
  columnGap: "20px",
  width: "100%",

  // Правило для елементів, які мають бути на всю ширину
  "& .full-width": {
    gridColumn: "span 2",
  },
});

export const SubmitButton = styled(Button)({
  fontFamily: "var(--font-family)",
  color: "#fff",
  lineHeight: "150%",
  width: "196px",
  padding: "12px 32px", // Відповідає py: 1.5 та px: 4
  boxShadow: "0 4px 14px 0 rgba(59, 130, 246, 0.3)",
  fontWeight: 600,
  fontSize: "16px",
  borderRadius: "14px",
  backgroundColor: "#155DFC", // Синій колір як у іконки
  "&:hover": {
    backgroundColor: "#0046E5", // Трохи темніший при наведенні
  },
});
