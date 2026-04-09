import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import DeidentifyPage from "@/pages/deidentify";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/Dashboard";
import VerifyPage from "@/pages/VerifyPage/VerifyPage";

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
        path: "/auth/verify",
        element: <VerifyPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
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
