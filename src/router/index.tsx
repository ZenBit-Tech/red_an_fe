import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExamplePage from "../pages/exampleHomePage";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ExamplePage />} />
    </Routes>
  </BrowserRouter>
);
