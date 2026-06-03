import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  BILLING_PLAN_TIER,
  useCreateCheckoutSessionMutation,
  useCreateCustomerPortalSessionMutation,
  useGetBillingStatusOptionalAuthQuery,
} from "@/common/api/billingApi";
import { SUBSCRIPTION_PLANS } from "@/constants/subscriptionPlans";
import { APP_ROUTES, STORAGE_KEYS } from "@/constants/index";
import { Container } from "@mui/material";
import PlanCard from "./PlanCard";
import GradeSecurity from "./GradeSecurity";
import * as S from "./styles";

const SubscriptionPlan = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [loadingPlanId, setLoadingPlanId] = useState<
    "free" | "professional" | null
  >(null);
  const [createCheckoutSession, { isLoading: isCheckoutLoading }] =
    useCreateCheckoutSessionMutation();
  const [createCustomerPortalSession, { isLoading: isPortalLoading }] =
    useCreateCustomerPortalSessionMutation();
  const isAuthenticated = Boolean(
    localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN),
  );
  const {
    data: billingStatus,
    isLoading: isBillingStatusLoading,
    isFetching: isBillingStatusFetching,
    isError: isBillingStatusError,
    refetch,
  } = useGetBillingStatusOptionalAuthQuery(undefined, {
    skip: !isAuthenticated,
    refetchOnMountOrArgChange: true,
  });

  const isBillingActionLoading = isCheckoutLoading || isPortalLoading;

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    const payment = searchParams.get("payment");
    if (payment === "success" || payment === "failed") {
      void refetch();
    }
  }, [isAuthenticated, refetch, searchParams]);

  const handleSelectFreePlan = (): void => {
    const isAuth = Boolean(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN));

    if (isAuth) {
      navigate(APP_ROUTES.DASHBOARD);
      return;
    }

    localStorage.setItem(STORAGE_KEYS.PENDING_PLAN, "free");
    navigate(APP_ROUTES.SIGN_IN);
  };

  const handleUpgradeToProfessional = async (): Promise<void> => {
    const isAuth = Boolean(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN));
    localStorage.setItem(STORAGE_KEYS.PENDING_PLAN, "professional");

    if (!isAuth) {
      navigate(APP_ROUTES.SIGN_IN);
      return;
    }

    setLoadingPlanId("professional");
    try {
      const { url } = await createCheckoutSession({
        targetPlan: BILLING_PLAN_TIER.PROFESSIONAL,
      }).unwrap();

      if (url) {
        window.location.assign(url);
        return;
      }
    } catch (error) {
      console.error("Failed to create checkout session", error);
    }

    setLoadingPlanId(null);
  };

  const handleManageSubscription = async (): Promise<void> => {
    const isAuth = Boolean(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN));
    if (!isAuth) {
      navigate(APP_ROUTES.SIGN_IN);
      return;
    }

    setLoadingPlanId("professional");
    try {
      const { url } = await createCustomerPortalSession().unwrap();

      if (url) {
        window.location.assign(url);
        return;
      }
    } catch (error) {
      console.error("Failed to create customer portal session", error);
    }

    setLoadingPlanId(null);
  };

  const freeStatusNote = useMemo(() => {
    if (!billingStatus || billingStatus.planTier !== BILLING_PLAN_TIER.FREE) {
      return undefined;
    }

    return t("subscriptionPlan.status.freeUsage", {
      used: billingStatus.usedToday,
      remaining: billingStatus.remainingToday ?? 0,
      limit: billingStatus.dailyLimit ?? 0,
    });
  }, [billingStatus, t]);

  const professionalStatusNote = useMemo(() => {
    if (
      !billingStatus ||
      billingStatus.planTier !== BILLING_PLAN_TIER.PROFESSIONAL ||
      !billingStatus.currentPeriodEnd
    ) {
      return undefined;
    }

    const formattedDate = new Date(
      billingStatus.currentPeriodEnd,
    ).toLocaleDateString();

    return t("subscriptionPlan.status.currentPeriodEnd", {
      date: formattedDate,
    });
  }, [billingStatus, t]);

  const getPlanAction = (planId: "free" | "professional") => {
    if (planId === "free") {
      if (billingStatus?.planTier === BILLING_PLAN_TIER.FREE) {
        return {
          label: t("subscriptionPlan.actions.currentPlan"),
          disabled: true,
          onSelect: handleSelectFreePlan,
        };
      }

      return {
        label: t("subscriptionPlan.actions.startFree"),
        disabled: false,
        onSelect: handleSelectFreePlan,
      };
    }

    if (billingStatus?.planTier === BILLING_PLAN_TIER.PROFESSIONAL) {
      if (!billingStatus.canManageSubscription) {
        return {
          label: t("subscriptionPlan.actions.manageUnavailable"),
          disabled: true,
          onSelect: handleManageSubscription,
        };
      }

      return {
        label: t("subscriptionPlan.actions.manageSubscription"),
        disabled: false,
        onSelect: handleManageSubscription,
      };
    }

    if (billingStatus && !billingStatus.canUpgrade) {
      return {
        label: t("subscriptionPlan.actions.upgradeUnavailable"),
        disabled: true,
        onSelect: handleUpgradeToProfessional,
      };
    }

    return {
      label: t("subscriptionPlan.actions.getStarted"),
      disabled: false,
      onSelect: handleUpgradeToProfessional,
    };
  };

  const statusMessage = (() => {
    if (isBillingStatusLoading) {
      return t("subscriptionPlan.status.loading");
    }

    if (isBillingStatusError) {
      return t("subscriptionPlan.status.error");
    }

    if (isBillingStatusFetching) {
      return t("subscriptionPlan.status.refreshing");
    }

    return "";
  })();

  return (
    <Container>
      <S.SubscriptionContainer id="subscription-plan">
        <S.PlanWrapper>
          <S.TitleBlock data-aos="fade-left">
            <S.Title>{t("subscriptionPlan.title")}</S.Title>
            <S.Subtitle>{t("subscriptionPlan.subtitle")}</S.Subtitle>
            {!!statusMessage && <S.Subtitle>{statusMessage}</S.Subtitle>}
          </S.TitleBlock>
          <S.PlansBlock data-aos="zoom-in-up">
            {SUBSCRIPTION_PLANS.map((plan) => {
              const action = getPlanAction(plan.id);
              const statusNote =
                plan.id === "free" ? freeStatusNote : professionalStatusNote;

              return (
                <PlanCard
                  key={plan.id}
                  plan={plan}
                  isLoading={
                    isBillingActionLoading && loadingPlanId === plan.id
                  }
                  actionLabel={action.label}
                  actionDisabled={action.disabled || isBillingStatusLoading}
                  statusNote={statusNote}
                  onSelect={() => {
                    void action.onSelect();
                  }}
                />
              );
            })}
          </S.PlansBlock>
        </S.PlanWrapper>
        <GradeSecurity />
      </S.SubscriptionContainer>
    </Container>
  );
};

export default SubscriptionPlan;
