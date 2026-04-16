import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import DeidentifyPage from "@/pages/deidentify";
import { ContactUsPage } from "@/pages/ContactUsPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/Dashboard";
import VerifyPage from "@/pages/VerifyPage/VerifyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/deidentify",
        element: <DeidentifyPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
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
