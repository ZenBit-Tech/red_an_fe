import { useState, useCallback } from "react";
import { useCreateCheckoutSessionMutation } from "@/common/api/billingApi";
import type { SubscriptionPlan } from "@/constants/subscriptionPlans";

type UseSubscriptionReturn = {
  handleSelectPlan: (plan: SubscriptionPlan) => Promise<void>;
  isLoading: boolean;
  loadingPlanId: string | null;
  error: string | null;
};

export const useSubscription = (): UseSubscriptionReturn => {
  const [createSession, { isLoading, error: rtkError }] =
    useCreateCheckoutSessionMutation();
  const [loadingPlanId, setLoadingPlanId] = useState<string | null>(null);

  const handleSelectPlan = useCallback(
    async (plan: SubscriptionPlan) => {
      if (isLoading) return;

      if (!plan.stripePriceId) {
        window.location.href = "/register";
        return;
      }

      setLoadingPlanId(plan.id);

      try {
        const { url } = await createSession({
          priceId: plan.stripePriceId,
        }).unwrap();
        if (!url) throw new Error("Missing Stripe checkout URL");
        window.location.href = url;
      } catch {
        setLoadingPlanId(null);
      }
    },
    [isLoading, createSession],
  );

  const error = rtkError
    ? "status" in rtkError
      ? `Checkout failed (status ${rtkError.status})`
      : (rtkError.message ?? "Unknown error")
    : null;

  return { handleSelectPlan, isLoading, loadingPlanId, error };
};
