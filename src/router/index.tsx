import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import DeidentifyPage from "@/pages/deidentify";
import LoginPage from "@/pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/deidentify",
        element: <DeidentifyPage />,
      },
      {
        path: "*",
        element: (
          <div style={{ padding: "100px", textAlign: "center" }}>
            Page not found (404)
          </div>
        ),
      },
      {
        path: "/signin",
        element: <LoginPage />,
      },
    ],
  },
]);
