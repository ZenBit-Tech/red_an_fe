import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SubscriptionSuccess = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");

  useEffect(() => {
    // Source of truth for subscription state is the Stripe webhook on the backend.
    // This page is just user-facing confirmation.
    const timer = setTimeout(() => navigate("/dashboard"), 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h1>{t("subscription.success.title")}</h1>
      <p>{t("subscription.success.message")}</p>
      {sessionId && <small>Session: {sessionId}</small>}
    </div>
  );
};

export default SubscriptionSuccess;
