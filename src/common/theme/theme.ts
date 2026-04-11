import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    fontSize14: number;
    fontSize16: number;
    fontSize38: number;
    fontSize64: number;
    fontWeight400: number;
    fontWeight500: number;
    fontWeight600: number;
    fontWeight700: number;
  }

  interface TypographyVariantsOptions {
    fontSize14?: number;
    fontSize16?: number;
    fontSize38?: number;
    fontSize64?: number;
    fontWeight400?: number;
    fontWeight500?: number;
    fontWeight600?: number;
    fontWeight700?: number;
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

const greyShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const greyColors = [
  "#F8FAFC",
  "#F1F5F9",
  "#E2E8F0",
  "#CBD5E1",
  "#94A3B8",
  "#64748B",
  "#475569",
  "#334155",
  "#1E293B",
  "#0F172A",
];
const grey = Object.fromEntries(greyShades.map((k, i) => [k, greyColors[i]]));

const blueShades = [500];
const blueColors = ["#155dfc"];
const blue = Object.fromEntries(blueShades.map((k, i) => [k, blueColors[i]]));

const whiteShades = [50, 500, 700];
const whiteColors = ["#fff", "#eff6ff", "#d2d3d6"];
const white = Object.fromEntries(
  whiteShades.map((k, i) => [k, whiteColors[i]]),
);

const redShades = [500];
const redColors = ["#d32f2f"];
const red = Object.fromEntries(redShades.map((k, i) => [k, redColors[i]]));

export const theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 375, md: 787, lg: 1440, xl: 1920 },
  },
  palette: {
    primary: { main: blue[500] },
    secondary: { main: white[500] },
    background: { default: white[50] },
    text: { primary: grey[900], secondary: grey[600] },
    error: { main: red[500] },
    success: { main: blue[500] },
    grey: grey,
  },
  typography: {
    fontFamily: `'Inter', sans-serif`,
    fontSize64: {
      fontWeight: 400,
      fontSize: "64px",
    },
    fontSize56: {
      fontWeight: 400,
      fontSize: "56px",
    },
    fontSize38: { fontWeight: 400, fontSize: "38px", lineHeight: 1.16 },
    fontSize18Bold: { fontWeight: 700, fontSize: "18px", lineHeight: 1.5 },
    fontSize16Semibold: { fontWeight: 600, fontSize: "16px", lineHeight: 1.38 },
    fontSize14Bold: { fontWeight: 600, fontSize: "14px", lineHeight: 1.4 },
    fontSize16: { fontWeight: 400, fontSize: "16px", lineHeight: 1.75 },
    button: { fontWeight: 600, fontSize: "16px", lineHeight: 1.5 },
  },
  spacing: 4,
  shape: { borderRadius: 16 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body": { width: "100%", height: "100%" },
        "#root": { width: "100%", minHeight: "100vh" },
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: false },
      styleOverrides: {
        root: {
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 24px",
          "@media (min-width:1440px)": { padding: "0 32px" },
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          fontSize64: "h1",
          fontSize56: "h2",
          fontSize38: "h3",
          fontSize18Bold: "h4",
          fontSize16Semibold: "h5",
          fontSize14Bold: "h6",
          fontSize16: "p",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 14,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiTextField: { defaultProps: { fullWidth: true } },
    MuiAppBar: {
      defaultProps: { elevation: 0, position: "static" },
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
      defaultProps: { disableGutters: true },
      styleOverrides: {
        root: { minHeight: "48px !important", justifyContent: "space-between" },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
  },
});
