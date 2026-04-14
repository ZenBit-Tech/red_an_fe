import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { LayoutWrapper, MainContent } from "./styles";

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
