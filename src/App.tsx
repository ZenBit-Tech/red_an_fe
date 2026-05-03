import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "@/common/theme/theme";
import { store } from "./store";
import { router } from "./router";

function App() {
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
