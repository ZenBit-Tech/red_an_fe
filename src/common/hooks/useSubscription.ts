import { useCallback } from "react";
import { useCreateCheckoutSessionMutation } from "@/common/api/billingApi";
import type { SubscriptionPlan } from "@/constants/subscriptionPlans";

type UseSubscriptionReturn = {
  handleSelectPlan: (plan: SubscriptionPlan) => Promise<void>;
  isLoading: boolean;
  loadingPlanId: string | null;
  error: string | null;
};

export const useSubscription = (): UseSubscriptionReturn => {
  const [, { isLoading, error: rtkError }] = useCreateCheckoutSessionMutation();

  const handleSelectPlan = useCallback(async (plan: SubscriptionPlan) => {
    if (plan.id === "free") {
      localStorage.setItem("pendingPlan", "free");
      window.location.href = "/signin";
      return;
    }

    if (plan.id === "professional" && plan.stripePriceId) {
      localStorage.setItem("pendingPlan", "professional");
      localStorage.setItem("pendingPriceId", plan.stripePriceId);
      window.location.href = "/signin";
      return;
    }
  }, []);

  const error = rtkError
    ? "status" in rtkError
      ? `Checkout failed (status ${rtkError.status})`
      : (rtkError.message ?? "Unknown error")
    : null;

  return { handleSelectPlan, isLoading, loadingPlanId: null, error };
};
