import { styled } from "@mui/material/styles";
import { Box, Typography, Button, TextField } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

export const SectionForm = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: theme.spacing(27),
  paddingBottom: theme.spacing(29),
  backgroundColor: theme.palette.backgroundColor,
}));

export const CustomContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1440px",
  margin: "0 auto",
  padding: theme.spacing(0, 20),
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(0, 4),
  },
}));

export const ContactTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize64,
  fontWeight: theme.typography.fontWeight600,
  fontFamily: theme.typography.secondFamily,
  color: theme.palette.text.primary,

  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize38,
  },
}));

export const ContactDescription = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],
  fontFamily: theme.typography.fontFamily,

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
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const ContactSidebar = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(6),
  width: "324px",
  height: "184px",
  backgroundColor: theme.palette.neutralColors[900],
  borderRadius: "8px",
  border: `1px solid ${theme.palette.strokeColors[500]}`,
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "51px",
  height: "48px",
  padding: "8px",
  borderRadius: "14px",
  border: `0.80px solid ${theme.palette.primaryColors[200]}4D`,
  marginBottom: theme.spacing(2),
  background: `linear-gradient(135deg, ${theme.palette.primaryColors[200]}33 0%, ${theme.palette.primaryColors[700]}33 100%)`,
  "& svg": {
    fontSize: "24px",
    fill: theme.palette.primaryColors[200],
    color: theme.palette.primaryColors[200],
  },
}));

export const ContactLabel = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight400,
  fontFamily: theme.typography.secondFamily,
  color: theme.palette.textColors[50],
  marginBottom: theme.spacing(1),
}));

export const EmailLink = styled(Typography)<
  { component?: React.ElementType } & React.ComponentProps<"a">
>(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[100],
  fontFamily: theme.typography.fontFamily || "sans-serif",
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
  backgroundColor: theme.palette.neutralColors[900],
  borderRadius: "8px",
  flexGrow: 1,
}));

export const ContactFormTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize32,
  fontWeight: theme.typography.fontWeight600,
  fontFamily: theme.typography.secondFamily,
  color: theme.palette.textColors[50],
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

  "& .MuiInputLabel-root": {
    position: "absolute",
    top: 0,
    left: 0,
    transform: "translate(0, -24px) scale(1)",
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeight500,
    fontSize: theme.typography.fontSize12,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: theme.palette.textColors[200],

    "&.Mui-focused": {
      color: theme.palette.primaryColors[200],
    },
    "&.Mui-inputLabel-shrink": {
      transform: "translate(0, -24px) scale(1)",
    },
    "&.Mui-error": {
      color: theme.palette.tertiaryColors[500],
    },
  },

  "& .MuiOutlinedInput-root": {
    backgroundColor: theme.palette.strokeColors[400],
    borderRadius: theme.spacing(2),
    transition: theme.transitions.create([
      "border-color",
      "box-shadow",
      "background-color",
    ]),

    height: "60px",
    "&.MuiInputBase-multiline": {
      height: "auto",
      minHeight: "126px",
      padding: theme.spacing(4, 3.5),
    },

    "& .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${theme.palette.strokeColors[120]}`,
      top: 0,
      "& legend": { display: "none" },
    },

    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primaryColors[200],
      opacity: 0.8,
    },

    "&.Mui-focused": {
      boxShadow: `0 4px 4px 0 ${theme.palette.strokeColors[500]}`,
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primaryColors[200],
        borderWidth: "1px",
      },
    },

    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.tertiaryColors[500],
    },
  },

  "& .MuiInputBase-input": {
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeight400,
    fontSize: theme.typography.fontSize16,
    color: theme.palette.textColors[100],

    "&:not(textarea)": {
      height: "60px",
      padding: theme.spacing(0, 4),
      boxSizing: "border-box",
    },

    "&.MuiInputBase-inputMultiline": {
      padding: 0,
    },

    "&:focus": {
      color: theme.palette.textColors[50],
    },

    "&::placeholder": {
      color: theme.palette.textColors[200],
      opacity: 0.6,
    },
  },

  "& .MuiFormHelperText-root": {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize12,
    color: theme.palette.tertiaryColors[500],
    position: "absolute",
    bottom: "-18px",
    left: 0,
    margin: 0,
  },
}));

export const StyledPhoneInput = styled(MuiTelInput)(({ theme }) => ({
  marginTop: theme.spacing(6),

  "& .MuiInputLabel-root": {
    position: "absolute",
    top: 0,
    left: 0,
    transform: "translate(0, -24px) scale(1)",
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeight500,
    fontSize: theme.typography.fontSize12,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: theme.palette.textColors[200],

    "&.Mui-inputLabel-shrink": {
      transform: "translate(0, -24px) scale(1)",
    },
    "&.Mui-focused": {
      color: theme.palette.primaryColors[200],
    },
  },

  "& .MuiOutlinedInput-root": {
    backgroundColor: theme.palette.strokeColors[400],
    borderRadius: theme.spacing(2),
    height: "60px",
    color: theme.palette.primaryColors[200],
    transition: theme.transitions.create(["border-color", "box-shadow"]),

    "& .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${theme.palette.strokeColors[120]}`,
      top: 0,
      "& legend": { display: "none" },
    },

    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primaryColors[200],
      opacity: 0.8,
    },

    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primaryColors[200],
    },

    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.tertiaryColors[500],
    },

    "& .MuiMuiTelInput-IconButton": {
      borderRadius: "0px",
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(2),
      color: theme.palette.textColors[200],
      "&:hover": {
        backgroundColor: "transparent",
      },
    },

    "& .MuiMuiTelInput-Adornment": {
      marginRight: theme.spacing(1),
      "& .MuiTypography-root": {
        color: theme.palette.textColors[200],
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.fontSize16,
      },
    },

    "& input": {
      padding: theme.spacing(0, 4, 0, 0),
      height: "60px",
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize16,
      color: theme.palette.textColors[100],
      "&:focus": {
        color: theme.palette.textColors[50],
      },
    },
  },

  "& .MuiFormHelperText-root": {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize12,
    color: theme.palette.tertiaryColors[500],
    margin: theme.spacing(1, 0, 0, 0),
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  width: "368px",
  height: "60px",
  padding: theme.spacing(5, 10),
  borderRadius: "8px",
  backgroundImage: `linear-gradient(161deg, ${theme.palette.primaryColors[200]} 0%, ${theme.palette.primaryColors[700]} 100%)`,

  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize14,
  color: theme.palette.textColors[50],
  marginTop: theme.spacing(12),

  textAlign: "center",

  textTransform: "none",

  "&:hover": {
    backgroundImage: `linear-gradient(167deg, ${theme.palette.primaryColors[500]} 28.37%, ${theme.palette.primaryColors[900]} 100%)`,
    boxShadow: `0px 4px 12px ${theme.palette.primaryColors[700]}4D`,
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
