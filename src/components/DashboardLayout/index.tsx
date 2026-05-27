import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  BILLING_PLAN_TIER,
  useGetBillingStatusQuery,
} from "@/common/api/billingApi";
import Sidebar from "@/components/Sidebar/index";
import TopBar from "@/components/TopBar/index";
import TrialBanner from "@/components/TrialBanner/index";
import SupportModal from "@/components/SupportModal/index";
import { useDashboardLayout } from "@/components/DashboardLayout/hooks/useDashboardLayout";
import * as S from "@/components/DashboardLayout/styles";

export const DashboardLayout = () => {
  const { activeNav, setActiveNav, userEmail } = useDashboardLayout();
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const { data: billingStatus, isLoading: isBillingStatusLoading } =
    useGetBillingStatusQuery();

  const shouldShowTrialBanner =
    !isBillingStatusLoading &&
    isBannerVisible &&
    billingStatus?.planTier === BILLING_PLAN_TIER.FREE &&
    billingStatus.canUpgrade;

  return (
    <S.LayoutWrapper>
      <S.BodyWrapper>
        {shouldShowTrialBanner && (
          <TrialBanner onDismiss={() => setIsBannerVisible(false)} />
        )}
        <S.ContentRow>
          <Sidebar
            activeNav={activeNav}
            setActiveNav={setActiveNav}
            onSupportClick={() => setIsSupportModalOpen(true)}
          />
          <S.RightContent>
            <S.StickyHeader>
              <TopBar userEmail={userEmail} />
            </S.StickyHeader>
            <S.MainContent>
              <Outlet />
            </S.MainContent>
          </S.RightContent>
        </S.ContentRow>
      </S.BodyWrapper>
      <SupportModal
        open={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />
    </S.LayoutWrapper>
  );
};

export default DashboardLayout;
