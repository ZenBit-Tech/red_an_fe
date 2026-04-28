import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar/index";
import TopBar from "@/components/TopBar/index";
import { useDashboardLayout } from "@/components/DashboardLayout/hooks/useDashboardLayout";
import * as S from "@/components/DashboardLayout/styles";

export const DashboardLayout = () => {
  const { activeNav, setActiveNav, userEmail } = useDashboardLayout();

  return (
    <S.LayoutWrapper>
      <S.BodyWrapper>
        <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
        <S.RightContent>
          <TopBar userEmail={userEmail} />
          <S.MainContent>
            <Outlet />
          </S.MainContent>
        </S.RightContent>
      </S.BodyWrapper>
    </S.LayoutWrapper>
  );
};

export default DashboardLayout;
