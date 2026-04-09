import { styled } from "@mui/material/styles";
import { Box, Typography, Button, Container } from "@mui/material";

export const SectionForm = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(28),
  paddingBottom: theme.spacing(25),
  backgroundColor: theme.palette.background.default,
}));

export const CustomContainer = styled(Container)({
  display: "block",
});

export const ContactTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize56,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.text.primary,
}));

export const ContactDescription = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.text.secondary,
  maxWidth: "480px",
}));

export const FormWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(6),
  width: "100%",
  alignItems: "flex-start",
  marginTop: theme.spacing(12),
}));

export const ContactSidebar = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(6),
  width: "320px",
  backgroundColor: "#F9FAFB",
  borderRadius: theme.shape.borderRadius,
}));

export const ContactFormBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10),
  flexGrow: 1,
}));

export const ContactLabel = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize18,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
}));

export const EmailLink = styled("a")(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  lineHeight: "164%",
  color: theme.palette.text.secondary,
  textDecoration: "none",
  fontFamily: theme.typography.fontFamily,
  "&:hover": {
    textDecoration: "underline",
    color: theme.palette.primary.main,
  },
}));

export const ContactForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
}));

export const ContactFormTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize38,
  fontWeight: theme.typography.fontWeight600,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(8),
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
  width: "fit-content",
  padding: theme.spacing(3, 8),
  borderRadius: theme.shape.borderRadius,
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight600,
}));
