import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExamplePage from "../pages/exampleHomePage";
import LoginPage from "../pages/LoginPage";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ExamplePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);
