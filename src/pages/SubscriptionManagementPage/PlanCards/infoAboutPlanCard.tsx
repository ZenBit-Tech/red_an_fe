import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useCancelSubscriptionMutation,
  useGetSubscriptionQuery,
  useCreateCheckoutSessionMutation,
  BILLING_PLAN_TIER,
} from "@/common/api/billingApi";
import { CancelPaymentModal } from "../CancelPaymentModal";
import * as S from "../styles";

type ModalStatusType = "idle" | "loading" | "success" | "error";

export const InfoPlanCard = () => {
  const { t } = useTranslation("subscriptionManagement");
  const [modalStatus, setModalStatus] = useState<ModalStatusType>("idle");

  const { data: subscription, refetch } = useGetSubscriptionQuery();
  const [cancelSubscription] = useCancelSubscriptionMutation();
  const [createCheckoutSession] = useCreateCheckoutSessionMutation();

  const handleCancelSubscription = async () => {
    setModalStatus("loading");
    try {
      await cancelSubscription().unwrap();
      setModalStatus("success");
    } catch (error) {
      console.error(error);
      setModalStatus("error");
    }
  };

  const handleCloseModal = () => {
    setModalStatus("idle");

    if (modalStatus === "success") {
      refetch();
    }
  };

  const handleSubscribeAgain = async () => {
    setModalStatus("loading");
    try {
      const response = await createCheckoutSession({
        targetPlan: BILLING_PLAN_TIER.PROFESSIONAL,
      }).unwrap();

      if (response?.url) {
        window.location.href = response.url;
      } else {
        setModalStatus("error");
      }
    } catch (error) {
      console.error(error);
      setModalStatus("error");
    }
  };

  if (!subscription || subscription.status === "unpaid") {
    return null;
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const isSubscribedButCanceled =
    subscription.cancelAtPeriodEnd || subscription.status === "canceled";

  const isTrialPeriod = subscription.status === "trialing";

  const isRegularPaid =
    subscription.status === "active" && !subscription.cancelAtPeriodEnd;

  const isMutationLoading = modalStatus === "loading";

  return (
    <>
      <S.InfoPlanBox>
        <S.InfoPlanCardString>
          {t("infoPlanCard.status")}: <span>{t("infoPlanCard.active")}</span>
        </S.InfoPlanCardString>

        {isSubscribedButCanceled && (
          <S.InfoPlanCardString>
            {t("infoPlanCard.accessUntil")}:{" "}
            <span>
              {subscription.currentPeriodEnd
                ? formatDate(subscription.currentPeriodEnd)
                : "End of period"}
            </span>
          </S.InfoPlanCardString>
        )}
        {isSubscribedButCanceled && (
          <S.CancelButton
            variant="contained"
            onClick={handleSubscribeAgain}
            disabled={isMutationLoading}
          >
            {t("infoPlanCard.SubscribeAgain")}
          </S.CancelButton>
        )}

        {isTrialPeriod && (
          <S.InfoPlanCardString>
            {t("infoPlanCard.trial")}:{" "}
            <span>{formatDate(subscription.currentPeriodEnd)}</span>
          </S.InfoPlanCardString>
        )}
        {isTrialPeriod && (
          <S.InfoPlanCardString>
            {t("infoPlanCard.firstPay")}:{" "}
            <span>{formatDate(subscription.currentPeriodEnd)}</span>
          </S.InfoPlanCardString>
        )}
        {isTrialPeriod && (
          <S.CancelButton
            variant="contained"
            onClick={handleCancelSubscription}
            disabled={isMutationLoading}
          >
            {t("infoPlanCard.CancelSubscription")}
          </S.CancelButton>
        )}

        {isRegularPaid && (
          <S.InfoPlanCardString>
            {t("infoPlanCard.nextPayment")}:{" "}
            <span>{formatDate(subscription.currentPeriodEnd)}</span>
          </S.InfoPlanCardString>
        )}
        {isRegularPaid && (
          <S.CancelButton
            variant="contained"
            onClick={handleCancelSubscription}
            disabled={isMutationLoading}
          >
            {t("infoPlanCard.CancelSubscription")}
          </S.CancelButton>
        )}
      </S.InfoPlanBox>

      <CancelPaymentModal status={modalStatus} onClose={handleCloseModal} />
    </>
  );
};
