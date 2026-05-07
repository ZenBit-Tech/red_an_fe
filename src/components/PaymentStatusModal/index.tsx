import { useNavigate, useSearchParams } from "react-router-dom";
import { CheckCircle, ErrorOutline } from "@mui/icons-material";
import { useCreateCheckoutSessionMutation } from "@/common/api/billingApi";
import { SUBSCRIPTION_PLANS } from "@/constants/subscriptionPlans";
import * as S from "./styles";

const PaymentStatusModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [createSession, { isLoading }] = useCreateCheckoutSessionMutation();

  const payment = searchParams.get("payment");
  if (payment !== "success" && payment !== "failed") return null;

  const closeModal = () => {
    searchParams.delete("payment");
    setSearchParams(searchParams, { replace: true });
  };

  const handleContinue = () => {
    localStorage.removeItem("pendingPlan");
    localStorage.removeItem("pendingPriceId");
    closeModal();
  };

  const handleTryAgain = async () => {
    let priceId = localStorage.getItem("pendingPriceId");
    if (!priceId) {
      const proPlan = SUBSCRIPTION_PLANS.find((p) => p.id === "professional");
      priceId = proPlan?.stripePriceId ?? null;
    }

    console.log("[modal] Try again, priceId:", priceId);

    if (!priceId) {
      closeModal();
      navigate("/#subscription-plan");
      return;
    }

    try {
      const { url } = await createSession({ priceId }).unwrap();
      if (url) {
        localStorage.setItem("pendingPriceId", priceId);
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
      <S.ModalBox variant={isSuccess ? "success" : "error"}>
        <S.IconCircle variant={isSuccess ? "success" : "error"}>
          {isSuccess ? <CheckCircle /> : <ErrorOutline />}
        </S.IconCircle>

        <S.Title>{isSuccess ? "Payment Successful" : "Payment Failed"}</S.Title>

        <S.Text>
          {isSuccess
            ? "Thank you! Your payment was successfully processed"
            : "You can continue with the Free Plan or try your payment again."}
        </S.Text>

        {isSuccess ? (
          <S.ContinueButton onClick={handleContinue}>Continue</S.ContinueButton>
        ) : (
          <S.ButtonsRow>
            <S.ContinueButton onClick={handleContinue}>
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
