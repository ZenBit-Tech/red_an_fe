import { styled } from "@mui/material/styles";
import { Box, Typography, Button, Link, TextField } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

export const SectionForm = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(27),
  paddingBottom: theme.spacing(29),
  backgroundColor: theme.palette.background.default,
}));

export const CustomContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1440px",
  margin: "0 auto",
  padding: theme.spacing(0, 43),
}));

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

export const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "51px",
  height: "48px",
  padding: "8px",
  borderRadius: "14px",
  border: "0.80px solid rgba(176, 198, 255, 0.3)",
  marginBottom: theme.spacing(2),
  background:
    "linear-gradient(135deg, rgba(176, 198, 255, 0.2) 0%, rgba(164, 189, 248, 0.2) 7.14%, rgba(153, 180, 242, 0.2) 14.29%, rgba(141, 171, 235, 0.2) 21.43%, rgba(130, 161, 228, 0.2) 28.57%, rgba(119, 152, 222, 0.2) 35.71%, rgba(108, 143, 215, 0.2) 42.86%, rgba(96, 134, 208, 0.2) 50%, rgba(85, 125, 202, 0.2) 57.14%, rgba(74, 116, 195, 0.2) 64.29%, rgba(63, 107, 188, 0.2) 71.43%, rgba(52, 98, 181, 0.2) 78.57%, rgba(40, 89, 175, 0.2) 85.71%, rgba(28, 80, 168, 0.2) 92.86%, rgba(13, 71, 161, 0.2) 100%)",

  "& svg": {
    fontSize: "24px",
    fill: "#b2c5ff",
    color: "#b2c5ff",
  },
}));

export const ContactLabel = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight400,
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
  padding: theme.spacing(9, 8, 22),
  textAlign: "center",
  backgroundColor: theme.palette.dark[200],
  borderRadius: "8px",
  flexGrow: 1,
}));

export const ContactFormTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize32,
  fontWeight: theme.typography.fontWeight600,
  lineHeight: "150%",
  color: theme.palette.white[500],
  marginBottom: theme.spacing(8),
  textAlign: "left",
}));

export const ContactForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(0, 16),
}));

export const FormGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  rowGap: theme.spacing(6),
  columnGap: theme.spacing(6),
  width: "100%",

  "& .full-width": {
    gridColumn: "span 2",
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(6),

  // === 1. ЛЕЙБЛ (Завжди зверху) ===
  "& .MuiInputLabel-root": {
    position: "absolute",
    top: 0,
    left: 0,
    transform: "translate(0, -24px) scale(1)",
    fontFamily: "var(--font-family)",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "133%",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "rgba(187, 198, 197, 0.8)",

    "&.Mui-focused": { color: "rgba(187, 198, 197, 0.8)" },
    "&.Mui-inputLabel-shrink": { transform: "translate(0, -24px) scale(1)" },
    "&.Mui-error": { color: "rgba(187, 198, 197, 0.8)" },
  },

  // === 2. КОНТЕЙНЕР (ЛОГІКА ВИСОТИ ТУТ) ===
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(51, 63, 90, 0.4)",
    borderRadius: "8px",
    transition: "all 0.2s ease-in-out",

    // ВИСОТА: Якщо звичайний - 60px, якщо multiline - 126px
    height: "60px",
    "&.MuiInputBase-multiline": {
      height: "auto",
      minHeight: "126px",
      padding: "16px 14px",
    },

    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid rgba(175, 198, 255, 0.12)",
      top: 0,
      "& legend": { display: "none" },
    },

    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(175, 198, 255, 0.2)",
    },

    "&.Mui-focused": {
      boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#b0c6ff",
        borderWidth: "1px",
      },
    },

    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ef4444",
    },
  },

  // === 3. САМ ТЕКСТ (ЛОГІКА ТЕКСТУ ТУТ) ===
  "& .MuiInputBase-input": {
    fontFamily: "var(--font-family)",
    fontWeight: 400,
    fontSize: "16px",
    color: "rgba(187, 198, 197, 0.8)",

    // Тільки для звичайних інпутів
    "&:not(textarea)": {
      height: "60px",
      padding: "0 16px",
      boxSizing: "border-box",
    },

    // Тільки для Текстареа
    "&.MuiInputBase-inputMultiline": {
      padding: 0,
      height: "auto !important",
    },

    "&:focus": { color: "#fff" },
    "&::placeholder": {
      color: "rgba(187, 198, 197, 0.4)",
      opacity: 1,
    },
  },

  // === 4. ПОМИЛКА ===
  "& .MuiFormHelperText-root": {
    fontFamily: "var(--font-family)",
    fontSize: "12px",
    color: "#ef4444",
    position: "absolute",
    bottom: "-16px", // Виносимо його ПІД рамку інпута
    left: 0,
    margin: 0,
    padding: 0,
    lineHeight: "1",
  },
}));

export const StyledPhoneInput = styled(MuiTelInput)(({ theme }) => ({
  marginTop: theme.spacing(6),

  "& .MuiInputLabel-root": {
    position: "absolute",
    top: 0,
    left: 0,
    transform: "translate(0, -24px) scale(1)",
    fontFamily: "var(--font-family)",
    fontWeight: 500,
    fontSize: "12px",
    textTransform: "uppercase",
    color: "rgba(187, 198, 197, 0.8)",

    "&.Mui-inputLabel-shrink": { transform: "translate(0, -24px) scale(1)" },
  },

  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(51, 63, 90, 0.4)",
    borderRadius: "8px",
    height: "60px",
    color: "#b0c6ff",

    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid rgba(175, 198, 255, 0.12)",
      top: 0,
      "& legend": { display: "none" },
    },

    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(175, 198, 255, 0.2)",
    },

    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#b0c6ff",
      color: "rgba(187, 198, 197, 0.8)",
    },

    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ef4444",
    },

    "& .MuiMuiTelInput-IconButton": {
      borderRadius: "0px",
      paddingLeft: "16px",
      paddingRight: "8px",
      color: "rgba(187, 198, 197, 0.8)",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },

    "& .MuiMuiTelInput-Adornment": {
      marginRight: "4px",
      "& .MuiTypography-root": {
        color: "rgba(187, 198, 197, 0.8)",
        fontFamily: "var(--font-family)",
        fontSize: "16px",
      },
    },

    "& input": {
      padding: "0 16px 0 0",
      height: "60px",
      fontFamily: "var(--font-family)",
      fontSize: "16px",
      color: "rgba(187, 198, 197, 0.8)",
      "&:focus": { color: "#fff" },
    },
  },

  "& .MuiFormHelperText-root": {
    fontFamily: "var(--font-family)",
    fontSize: "12px",
    color: "#ef4444",
    margin: "4px 0 0 0",
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  background: "#B0C6FF",
  backgroundColor: theme.palette.blue[50],

  width: "368px",
  height: "60px",
  padding: "20px 40px",
  borderRadius: "8px",
  border: "1px solid rgba(67, 70, 82, 0.15)",
  marginTop: theme.spacing(12),

  fontFamily: theme.typography.fontFamily,
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "143%",
  letterSpacing: "-0.03em",
  textAlign: "center",
  color: "#2d3449",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "#A2C3F7",
    background: "#A2C3F7",
    boxShadow: "0px 4px 12px rgba(176, 198, 255, 0.3)",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
