import { Provider } from "react-redux";
import { store } from "./store";

import { ThemeProvider } from "@mui/material/styles";

import { RouterProvider } from "react-router-dom";

import { theme } from "./common/theme/theme";
import { router } from "./router";
import { CssBaseline } from "@mui/material";

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
