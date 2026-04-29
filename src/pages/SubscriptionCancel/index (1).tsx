import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SubscriptionCancel = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div>
      <h1>{t("subscription.cancel.title")}</h1>
      <p>{t("subscription.cancel.message")}</p>
      <button onClick={() => navigate("/#subscription-plan")}>
        {t("subscription.cancel.backToPlans")}
      </button>
    </div>
  );
};

export default SubscriptionCancel;
