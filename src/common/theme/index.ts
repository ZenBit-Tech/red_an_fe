import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Typography {
    fontWeight400: number;
    fontWeight600: number;
    fontWeight700: number;
    fontSize14: number;
    fontSize16: number;
    fontSize18: number;
    fontSize38: number;
    fontSize56: number;
  }
  interface TypographyOptions {
    fontWeight400?: number;
    fontWeight600?: number;
    fontWeight700?: number;
    fontSize14?: number;
    fontSize16?: number;
    fontSize18?: number;
    fontSize38?: number;
    fontSize56?: number;
  }
}

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#155DFC",
    },
    text: {
      primary: "#c4c6d4",
      secondary: "#bbc6c5",
    },
    background: {
      default: "#0b1326",
    },
    divider: "#EAECF0",
  },
  spacing: 4,
  shape: {
    borderRadius: 14,
  },
});

const theme = createTheme(baseTheme, {
  typography: {
    fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
    fontWeight400: 400,
    fontWeight600: 600,
    fontWeight700: 700,
    fontSize14: 14,
    fontSize16: 16,
    fontSize18: 18,
    fontSize38: 38,
    fontSize56: 56,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          width: "100%",
          height: "100%",
        },
        body: {
          width: "100%",
          height: "100%",
          backgroundColor: "#0b1326",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "12px 24px",
          fontWeight: 600,
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
        maxWidth: "lg",
      },
      styleOverrides: {
        root: {
          paddingLeft: "16px",
          paddingRight: "16px",
        },
      },
    },
  },
});

export default theme;
