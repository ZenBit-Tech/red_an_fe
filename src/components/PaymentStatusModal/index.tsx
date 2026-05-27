import { useSearchParams } from "react-router-dom";
import { CheckCircle, PriorityHigh } from "@mui/icons-material";
import {
  BILLING_PLAN_TIER,
  useCreateCheckoutSessionMutation,
} from "@/common/api/billingApi";
import { STORAGE_KEYS } from "@/constants";
import * as S from "./styles";
import { useTranslation } from "react-i18next";

const PaymentStatusModal = () => {
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();
  const [createSession, { isLoading }] = useCreateCheckoutSessionMutation();

  const payment = searchParams.get("payment");
  if (payment !== "success" && payment !== "failed") return null;

  const closeModal = () => {
    searchParams.delete("payment");
    setSearchParams(searchParams, { replace: true });
  };

  const handleContinue = () => {
    localStorage.removeItem(STORAGE_KEYS.PENDING_PLAN);
    closeModal();
  };

  const handleTryAgain = async () => {
    try {
      const { url } = await createSession({
        targetPlan: BILLING_PLAN_TIER.PROFESSIONAL,
      }).unwrap();
      if (url) {
        localStorage.setItem(STORAGE_KEYS.PENDING_PLAN, "professional");
        window.location.href = url;
      } else {
        closeModal();
      }
    } catch (e) {
      console.error("Stripe session error", e);
      closeModal();
    }
  };

  const isSuccess = payment === "success";

  return (
    <S.Overlay>
      <S.ModalBox status={isSuccess ? "success" : "error"}>
        <S.IconCircle status={isSuccess ? "success" : "error"}>
          {isSuccess ? <CheckCircle /> : <PriorityHigh />}
        </S.IconCircle>

        <S.Title>{isSuccess ? "Payment Successful" : "Payment Failed"}</S.Title>

        <S.Text>
          {isSuccess
            ? t("subscriptionPlan.successMessage")
            : t("subscriptionPlan.unseccessMessage")}
        </S.Text>

        {isSuccess ? (
          <S.ContinueButton status="success" onClick={handleContinue}>
            Continue
          </S.ContinueButton>
        ) : (
          <S.ButtonsRow>
            <S.ContinueButton status="error" onClick={handleContinue}>
              Continue
            </S.ContinueButton>
            <S.TryAgainButton onClick={handleTryAgain} disabled={isLoading}>
              {isLoading ? "Redirecting…" : "Try again"}
            </S.TryAgainButton>
          </S.ButtonsRow>
        )}
      </S.ModalBox>
    </S.Overlay>
  );
};

export default PaymentStatusModal;
