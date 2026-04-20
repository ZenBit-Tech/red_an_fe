import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import DeidentifyPage from "@/pages/deidentify";
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
        path: "/deidentify",
        element: <DeidentifyPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "*",
        element: (
          <div style={{ padding: "100px", textAlign: "center" }}>
            Page not found (404)
          </div>
        ),
      },
    ],
  },
]);
