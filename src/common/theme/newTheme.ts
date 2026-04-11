import { GRADIENT_ANGLE } from "@/constants";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    fontSize10: number;
    fontSize14: number;
    fontSize16: number;
    fontSize18: number;
    fontSize20: number;
    fontSize32: number;
    fontSize36: number;
    fontSize38: number;
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
    fontSize10?: number;
    fontSize14?: number;
    fontSize16?: number;
    fontSize18?: number;
    fontSize20?: number;
    fontSize32?: number;
    fontSize36?: number;
    fontSize38?: number;
    fontSize64?: number;
    fontSize72?: number;
    fontWeight300?: number;
    fontWeight400?: number;
    fontWeight500?: number;
    fontWeight600?: number;
    fontWeight700?: number;
    fontWeight800?: number;
  }

  interface Palette {
    // dark: { 100: string; 200: string; 300: string; 600: string };
    // gray: {
    //   300: string;
    //   400: string;
    //   500: string;
    //   600: string;
    //   700: string;
    //   800: string;
    // };
    // blue: { 50: string; 500: string; 600: string; 700: string; 900: string };
    // white: { 50: string; 400: string; 500: string; 600: string; 700: string };
    // red: { 500: string };

    primaryColors: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    secondaryColors: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      950: string;
    };
    neutralColors: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    textColors: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
    };
    tertiaryColors: { 500: string };
    strokeColors: { 120: string; 150: string; 400: string; 500: string };
    backgroundColor: string;
  }
  interface PaletteOptions {
    // dark?: { 100: string; 200: string; 300: string; 600: string };
    // gray?: {
    //   300: string;
    //   400: string;
    //   500: string;
    //   600: string;
    //   700: string;
    //   800: string;
    // };
    // blue?: { 50: string; 500: string; 600: string; 700: string; 900: string };
    // white?: { 50: string; 400: string; 500: string; 600: string; 700: string };
    // red?: { 500: string };

    primaryColors?: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    secondaryColors?: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      950: string;
    };
    neutralColors?: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    textColors?: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
    };
    tertiaryColors?: { 500: string };
    strokeColors?: { 120: string; 150: string; 400: string; 500: string };
    backgroundColor?: string;
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

const gray = {
  300: "#94A3B8",
  400: "#64748B",
  500: "#475569",
  600: "#334155",
  700: "#1E293B",
  800: "#0F172A",
};

// const blue = {
//   50: "#b0c6ff",

//   500: "#3778dd",
//   600: "#2563eb",
//   700: "#0d47a1",
//   900: "#002d6f",
// };
// const white = {
//   50: "#fff",
//   400: "#c3c6d4",
//   500: "#dae2fd",
//   600: "#dae2fd",
//   700: "#d2d3d6",
// };
// const red = { 500: "#d32f2f" };
// const dark = { 100: "#060e20", 200: "#0b1326", 300: "#131b2e", 600: "#2d3449" };

const primaryColors = {
  50: "#dae2fd",
  100: "#c5d9fa",
  200: "#b0c6ff", // Аналог старого blue[50]
  300: "#a2c3f7",
  400: "#3b82ef",
  500: "#2563eb", // Аналог старого blue[500] и blue[600]
  600: "#105bd0",
  700: "#0d47a1", // Аналог старого blue[700]
  800: "#0b3d8b",
  900: "#051f46", // Аналог старого blue[900]
};

const secondaryColors = {
  50: "#eff0ff",
  100: "#d9e2ff",
  200: "#9cabd3",
  300: "#8290b7",
  400: "#68769c",
  500: "#4f5e82",
  600: "#38466a",
  700: "#213051",
  800: "#091a3b",
  900: "#060e20", // Аналог старого dark[100]
  950: "#000818",
};

const neutralColors = {
  50: "#eff0ff",
  100: "#dbe2fd",
  200: "#d9d9d9",
  300: "#8a90a8",
  400: "#70778e",
  500: "#575e74",
  600: "#40465c",
  700: "#2d3449",
  800: "#222a3d",
  900: "#131b2e", // Аналог старого dark[300]
};

const textColors = {
  50: "#ffffff", // Добавлен из старого white[50] для текста кнопок
  100: "#c4c6d4",
  200: "#c3c6d4",
  300: "#bbc6c5",
  400: "#b2c5ff",
};

const tertiaryColors = {
  500: "#ef4444", // Замена старого red[500]
};

const strokeColors = {
  120: "rgba(175, 198, 255, 0.12)",
  150: "rgba(67, 70, 82, 0.15)",
  400: "rgba(51, 63, 90, 0.4)",
  500: "rgba(67, 70, 82, 0.5)",
};

const backgroundColor = "#0b1326"; // Аналог старого dark[200]

export const theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 375, md: 787, lg: 1440, xl: 1920 },
  },
  palette: {
    primary: { main: primaryColors[500] },
    secondary: { main: primaryColors[50] },
    background: {
      default: secondaryColors[900],
      paper: neutralColors[900],
    },
    text: {
      primary: primaryColors[50],
    },
    error: { main: tertiaryColors[500] },

    /* Закомментированы старые объекты в палитре
    gray: gray,
    dark: dark,
    blue: blue,
    white: white,
    red: red,
    */

    // Новые объекты палитры
    primaryColors: primaryColors,
    secondaryColors: secondaryColors,
    neutralColors: neutralColors,
    textColors: textColors,
    tertiaryColors: tertiaryColors,
    strokeColors: strokeColors,
    backgroundColor: backgroundColor,
  },
  typography: {
    fontFamily: `"Manrope", sans-serif`,
    fontSize10: 10,
    fontSize14: 14,
    fontSize16: 16,
    fontSize18: 18,
    fontSize20: 20,
    fontSize32: 32,
    fontSize36: 36,
    fontSize38: 38,
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
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: false },
      styleOverrides: {
        root: ({ theme }) => ({
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: theme.spacing(0, 6),
          "@media (min-width:1440px)": { padding: theme.spacing(0, 8) },
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.spacing(2),
          padding: theme.spacing(4, 8),
          height: 52,
          textTransform: "none",
          fontWeight: theme.typography.fontWeight800,
          fontSize: theme.typography.fontSize16,
          color: theme.palette.white[50],
          background: `linear-gradient(161deg, ${blue[50]} 0%, ${blue[700]} 100%)`,
          whiteSpace: "nowrap",
          "&:hover": {
            background: `linear-gradient(167deg, ${blue[500]} 28.37%, ${blue[900]} 100%)`,
          },
        }),
      },
    },
    MuiTextField: { defaultProps: { fullWidth: true } },
    MuiAppBar: {
      defaultProps: { elevation: 0, position: "static" },
      styleOverrides: {
        root: {
          backgroundColor: dark[200],
          backgroundImage: `linear-gradient(180deg, ${dark[300]} 0%, rgba(19, 27, 46, 0) 100%)`,
        },
      },
    },
    MuiToolbar: {
      defaultProps: { disableGutters: true },
      styleOverrides: {
        root: { minHeight: 48, justifyContent: "space-between" },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
  },
});
