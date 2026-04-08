import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import DeidentifyPage from "@/pages/deidentify";
import HomePage from "@/pages/HomePage";

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
        path: "*",
        element: (
          <div style={{ padding: "100px", textAlign: "center" }}>
            Page not found (404)
          </div>
        ),
      },
      // { path: "/success", element: <YourPlan success /> },
      // { path: "/reject", element: <YourPlan reject /> },
    ],
  },
]);
