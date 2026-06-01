import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import DashboardLayout from "@/components/DashboardLayout";
import DeidentifyPage from "@/pages/Deidentify";
import SyntheticDataPage from "@/pages/SyntheticData";
import { ContactUsPage } from "@/pages/ContactUsPage";
import HomePage from "@/pages/HomePage";
import { AboutUsPage } from "@/pages/AboutUSPage";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/Dashboard";
import VerifyPage from "@/pages/VerifyPage/VerifyPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { SessionExpiredPage } from "@/pages/SessionExpiredPage";
import { SubscriptionManagementPage } from "@/pages/SubscriptionManagementPage";
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
        path: APP_ROUTES.SESSION_EXPIRED,
        element: <SessionExpiredPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
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
      {
        path: APP_ROUTES.SYNTHETIC_DATA,
        element: <SyntheticDataPage />,
      },
      {
        path: APP_ROUTES.SUBSCRIPTION_MANAGEMENT,
        element: <SubscriptionManagementPage />,
      },
    ],
  },
]);
