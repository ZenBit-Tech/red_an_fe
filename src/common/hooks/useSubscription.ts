import { useCallback, useState } from "react";
import { useCreateCheckoutSessionMutation } from "@/common/api/billingApi";
import { STORAGE_KEYS } from "@/constants/index";
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
      const isAuth = !!localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

      if (plan.id === "free") {
        if (isAuth) {
          window.location.href = "/dashboard";
          return;
        }
        localStorage.setItem("pendingPlan", "free");
        window.location.href = "/signin";
        return;
      }

      if (plan.id === "professional" && plan.stripePriceId) {
        localStorage.setItem("pendingPriceId", plan.stripePriceId);

        if (isAuth) {
          setLoadingPlanId(plan.id);
          try {
            const { url } = await createSession({
              priceId: plan.stripePriceId,
            }).unwrap();
            if (url) {
              window.location.href = url;
              return;
            }
          } catch (e) {
            console.error("Stripe session error", e);
            setLoadingPlanId(null);
          }
          return;
        }

        localStorage.setItem("pendingPlan", "professional");
        window.location.href = "/signin";
        return;
      }
    },
    [createSession],
  );

  const error = rtkError
    ? "status" in rtkError
      ? `Checkout failed (status ${rtkError.status})`
      : (rtkError.message ?? "Unknown error")
    : null;

  return { handleSelectPlan, isLoading, loadingPlanId, error };
};
