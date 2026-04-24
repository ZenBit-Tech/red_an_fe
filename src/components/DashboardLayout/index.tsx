import { Outlet } from "react-router-dom";

import Sidebar from "@/components/sidebar/index";
import TopBar from "@/components/TopBar/index";
import { useDashboardLayout } from "@/components/DashboardLayout/hooks/useDashboardLayout";
import {
  BodyWrapper,
  LayoutWrapper,
  MainContent,
  RightContent,
} from "@/components/DashboardLayout/styles";

export const DashboardLayout = () => {
  const { activeNav, setActiveNav, userEmail } = useDashboardLayout();

  return (
    <LayoutWrapper>
      <BodyWrapper>
        <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
        <RightContent>
          <TopBar userEmail={userEmail} />
          <MainContent>
            <Outlet />
          </MainContent>
        </RightContent>
      </BodyWrapper>
    </LayoutWrapper>
  );
};

export default DashboardLayout;
