import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import DashboardLayout from "@/components/DashboardLayout";
import DeidentifyPage from "@/pages/Deidentify";
import { ContactUsPage } from "@/pages/ContactUsPage";
import HomePage from "@/pages/HomePage";
import { AboutUsPage } from "@/pages/AboutUSPage";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/Dashboard";
import VerifyPage from "@/pages/VerifyPage/VerifyPage";
import { APP_ROUTES } from "@/constants/index";
import SubscriptionPlan from "@/components/SubscriptionPlan";

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
      {
        path: "/subscription-plan",
        element: <SubscriptionPlan />,
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
  {
    path: "/auth/verify",
    element: <VerifyPage />,
  },
  {
    path: "/signin",
    element: <LoginPage />,
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: APP_ROUTES.DASHBOARD,
        element: <DashboardPage />,
      },
      {
        path: APP_ROUTES.DEIDENTIFY,
        element: <DeidentifyPage />,
      },
    ],
  },
]);
