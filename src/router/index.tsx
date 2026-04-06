import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
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
