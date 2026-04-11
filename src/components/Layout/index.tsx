import { Outlet } from "react-router-dom";
import Header from "../Header";
import { FooterSection } from "../Footer";

export const Layout = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />

      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>

      <FooterSection />
    </div>
  );
};

export default Layout;
