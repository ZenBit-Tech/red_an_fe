import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar/index";
import TopBar from "@/components/TopBar/index";
import SupportModal from "@/components/SupportModal/index";
import { useDashboardLayout } from "@/components/DashboardLayout/hooks/useDashboardLayout";
import * as S from "@/components/DashboardLayout/styles";

export const DashboardLayout = () => {
  const { activeNav, setActiveNav, userEmail } = useDashboardLayout();
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  return (
    <S.LayoutWrapper>
      <S.BodyWrapper>
        <Sidebar
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          onSupportClick={() => setIsSupportModalOpen(true)}
        />
        <S.RightContent>
          <TopBar userEmail={userEmail} />
          <S.MainContent>
            <Outlet />
          </S.MainContent>
        </S.RightContent>
      </S.BodyWrapper>
      <SupportModal
        open={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />
    </S.LayoutWrapper>
  );
};

export default DashboardLayout;
