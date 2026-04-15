import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { router } from "./router";
import { store } from "./store";
import theme from "@/common/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
