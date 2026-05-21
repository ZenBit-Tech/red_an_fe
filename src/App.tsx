import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { theme } from "@/common/theme/theme";
import { store } from "./store";
import { router } from "./router";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out",
    });
  }, []);
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </SnackbarProvider>
  );
}

export default App;
