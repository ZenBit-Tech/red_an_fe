import { createTheme, type Theme } from "@mui/material/styles";
import {
  primaryColors,
  secondaryColors,
  neutralColors,
  textColors,
  tertiaryColors,
  strokeColors,
  backgroundColor,
} from "@/constants/themeConstants";

type PrimaryColorsType = typeof primaryColors;
type SecondaryColorsType = typeof secondaryColors;
type NeutralColorsType = typeof neutralColors;
type TextColorsType = typeof textColors;
type TertiaryColorsType = typeof tertiaryColors;
type StrokeColorsType = typeof strokeColors;

declare module "@mui/material/styles" {
  interface TypographyVariants {
    secondFamily: string;
    fontSize10: number;
    fontSize12: number;
    fontSize14: number;
    fontSize16: number;
    fontSize18: number;
    fontSize20: number;
    fontSize24: number;
    fontSize26: number;
    fontSize30: number;
    fontSize32: number;
    fontSize36: number;
    fontSize38: number;
    fontSize48: number;
    fontSize64: number;
    fontSize72: number;
    fontWeight300: number;
    fontWeight400: number;
    fontWeight500: number;
    fontWeight600: number;
    fontWeight700: number;
    fontWeight800: number;
  }

  interface TypographyVariantsOptions {
    secondFamily?: string;
    fontSize10?: number;
    fontSize12?: number;
    fontSize14?: number;
    fontSize16?: number;
    fontSize18?: number;
    fontSize20?: number;
    fontSize24?: number;
    fontSize26?: number;
    fontSize30?: number;
    fontSize32?: number;
    fontSize36?: number;
    fontSize38?: number;
    fontSize48?: number;
    fontSize64?: number;
    fontSize72?: number;
    fontWeight300?: number;
    fontWeight400?: number;
    fontWeight500?: number;
    fontWeight600?: number;
    fontWeight700?: number;
    fontWeight800?: number;
  }

  interface ComplianceFrameworkChip {
    HIPAA: string;
    GDPR: string;
    CCPA: string;
    CUSTOM: string;
  }

  interface ComplianceColors {
    frameworkChip: ComplianceFrameworkChip;
  }

  interface Palette {
    primaryColors: PrimaryColorsType;
    secondaryColors: SecondaryColorsType;
    neutralColors: NeutralColorsType;
    textColors: TextColorsType;
    tertiaryColors: TertiaryColorsType;
    strokeColors: StrokeColorsType;
    backgroundColor: string;
    compliance: ComplianceColors;
  }

  interface PaletteOptions {
    primaryColors?: PrimaryColorsType;
    secondaryColors?: SecondaryColorsType;
    neutralColors?: NeutralColorsType;
    textColors?: TextColorsType;
    tertiaryColors?: TertiaryColorsType;
    strokeColors?: StrokeColorsType;
    backgroundColor?: string;
    compliance?: ComplianceColors;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    body1: false;
    body2: false;
  }
}

const buttonLinkStyles = (theme: Theme) => ({
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2, 4),
  textTransform: "none" as const,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize14,
  color: theme.palette.textColors[50],
  backgroundImage: `linear-gradient(161deg, ${primaryColors[200]} 0%, ${primaryColors[700]} 100%)`,
  flexShrink: 0,
  "&:hover": {
    backgroundImage: `linear-gradient(167deg, ${primaryColors[500]} 28.37%, ${primaryColors[900]} 100%)`,
  },
  "&:active": {
    backgroundImage: "none",
    backgroundColor: theme.palette.primaryColors[700],
  },
  "&.Mui-disabled": {
    backgroundColor: theme.palette.secondaryColors[300],
    color: theme.palette.neutralColors[100],
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(3, 5),
    fontSize: theme.typography.fontSize16,
  },
});

export const theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 375, md: 787, lg: 1440, xl: 1920 },
  },
  palette: {
    primary: { main: primaryColors[500] },
    secondary: { main: primaryColors[50] },
    background: {
      default: backgroundColor,
      paper: neutralColors[900],
    },
    text: {
      primary: primaryColors[50],
      secondary: neutralColors[300],
    },
    action: {
      hover: neutralColors[700],
    },
    error: { main: tertiaryColors[500] },
    compliance: {
      frameworkChip: {
        HIPAA: primaryColors[600],
        GDPR: "#7c3aed",
        CCPA: "#065f46",
        CUSTOM: neutralColors[500],
      },
    },

    primaryColors,
    secondaryColors,
    neutralColors,
    textColors,
    tertiaryColors,
    strokeColors,
    backgroundColor,
  },
  typography: {
    fontFamily: `"Manrope", sans-serif`,
    secondFamily: `"Roboto", sans-serif`,
    fontSize10: 10,
    fontSize12: 12,
    fontSize14: 14,
    fontSize16: 16,
    fontSize18: 18,
    fontSize20: 20,
    fontSize24: 24,
    fontSize26: 26,
    fontSize32: 32,
    fontSize36: 36,
    fontSize38: 38,
    fontSize48: 48,
    fontSize64: 64,
    fontSize72: 72,
    fontWeight300: 300,
    fontWeight400: 400,
    fontWeight500: 500,
    fontWeight600: 600,
    fontWeight700: 700,
    fontWeight800: 800,
  },
  spacing: 4,
  shape: { borderRadius: 16 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body": { width: "100%", height: "100%" },
        "#root": { width: "100%", minHeight: "100vh" },
        backgroundColor: backgroundColor,
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: false },
      styleOverrides: {
        root: ({ theme }) => ({
          width: "100%",
          margin: "0 auto",
          padding: theme.spacing(3, 4),
          [theme.breakpoints.up("md")]: {
            padding: theme.spacing(10, 10),
          },
          [theme.breakpoints.up("lg")]: {
            maxWidth: 1440,
            padding: theme.spacing(20, 20),
          },
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
      },
      styleOverrides: {
        root: ({ theme }) => buttonLinkStyles(theme),
      },
    },

    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: ({ theme }) => buttonLinkStyles(theme),
      },
    },
    MuiTextField: { defaultProps: { fullWidth: true } },
  },
});
