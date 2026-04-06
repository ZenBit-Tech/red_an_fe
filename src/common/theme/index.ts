import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // 1. Кольорова палітра (Primary, Secondary і т.д.)
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#f5f5f5",
    },
  },

  // 2. Глобальні налаштування відступів (крок 8px за замовчуванням)
  spacing: 8,

  // 3. Кастомні налаштування для компонентів
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Дублюємо або розширюємо ресети з main.css
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "borderBox",
        },
        html: {
          width: "100%",
          height: "100%",
        },
        body: {
          width: "100%",
          height: "100%",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingBottom: 0,
          paddingTop: 0,
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
      defaultProps: {
        disableGutters: true,
      },
    },
  },
});

export default theme;
