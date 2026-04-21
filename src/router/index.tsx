import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import DashboardLayout from "@/components/DashboardLayout";
import DeidentifyPage from "@/pages/Deidentify";
import { ContactUsPage } from "@/pages/ContactUsPage";
import HomePage from "@/pages/HomePage";
import { AboutUsPage } from "@/pages/AboutUSPage";

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
        path: "/contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/deidentify",
        element: <DeidentifyPage />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div style={{ padding: "100px", textAlign: "center" }}>
        Page not found (404)
      </div>
    ),
  },
]);
