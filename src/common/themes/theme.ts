import { createTheme } from "@mui/material/styles";

interface CompliancePalette {
  frameworkChip: {
    HIPAA: string;
    GDPR: string;
    CCPA: string;
    CUSTOM: string;
  };
}

declare module "@mui/material/styles" {
  interface Palette {
    compliance: CompliancePalette;
  }

  interface PaletteOptions {
    compliance?: CompliancePalette;
  }
}

const COMPLIANCE_FRAMEWORK_CHIP = {
  HIPAA: "#2F80ED",
  GDPR: "#9B51E0",
  CCPA: "#27AE60",
  CUSTOM: "#4F4F4F",
} as const;

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 787,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#155dfc",
    },
    secondary: {
      main: "#eff6ff",
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#101828",
      secondary: "#6a7282",
    },
    error: { main: "#d32f2f" },
    success: { main: "#155dfc" },
    compliance: {
      frameworkChip: COMPLIANCE_FRAMEWORK_CHIP,
    },
    grey: {
      50: "#F8FAFC",
      100: "#F1F5F9",
      200: "#E2E8F0",
      300: "#CBD5E1",
      400: "#94A3B8",
      500: "#64748B",
      600: "#475569",
      700: "#334155",
      800: "#1E293B",
      900: "#0F172A",
    },
  },
  typography: {
    fontFamily: `'Inter', sans-serif`,
    h1: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "64px",
      lineHeight: 1.08,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "56px",
      lineHeight: 1.09,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "38px",
      lineHeight: 1.16,
    },
    h4: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: 1.38,
    },
    h6: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: 1.4,
    },
    body1: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: 1.75,
    },
    button: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: 1.5,
    },
  },
  spacing: 4,
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          width: "100%",
          height: "100%",
        },
        body: {
          width: "100%",
          minHeight: "100%",
          margin: 0,
        },
        "#root": {
          width: "100%",
          minHeight: "100vh",
        },
        "*": {
          boxSizing: "border-box",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
      styleOverrides: {
        root: {
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",

          "@media (min-width:1440px)": {
            paddingLeft: "32px",
            paddingRight: "32px",
          },
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          body1: "p",
          body2: "p",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          textTransform: "none",
          fontWeight: 600,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: "static",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.grey[50],
          borderRadius: "50px",
          border: `1px solid ${theme.palette.grey[200]}`,
          padding: theme.spacing(2, 6),
          marginTop: theme.spacing(6),
        }),
      },
    },
    MuiToolbar: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          minHeight: "48px !important",
          justifyContent: "space-between",
        },
      },
    },
  },
});
