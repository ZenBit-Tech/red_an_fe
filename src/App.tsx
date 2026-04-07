// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { ThemeProvider, CssBaseline } from "@mui/material";
// import { store } from "@/store";
// import { theme } from "@/common/themes/theme";
// import { AppRouter } from "@/router";

// function App() {
//   return (
//     <Provider store={store}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <BrowserRouter>
//           <AppRouter />
//         </BrowserRouter>
//       </ThemeProvider>
//     </Provider>
//   );
// }

// export default App;

import { Provider } from "react-redux";
import { store } from "./store";

import { ThemeProvider } from "@mui/material/styles";

import { RouterProvider } from "react-router-dom";

import { theme } from "@/common/themes/theme";
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
