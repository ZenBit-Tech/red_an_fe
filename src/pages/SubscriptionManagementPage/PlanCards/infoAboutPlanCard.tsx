import { useTranslation } from "react-i18next";
import {
  useCancelSubscriptionMutation,
  useGetSubscriptionQuery,
} from "@/common/api/billingApi";
import * as S from "../styles";

export const InfoPlanCard = () => {
  const { t } = useTranslation("subscriptionManagement");

  const [cancelSubscription, { isLoading }] = useCancelSubscriptionMutation();
  const { refetch } = useGetSubscriptionQuery();
  const handleCancelSubscription = async () => {
    try {
      await cancelSubscription().unwrap();
      setTimeout(() => {
        refetch();
      }, 1500);
      console.log("Canceled");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.InfoPlanBox>
      <S.InfoPlanCardString>{t("infoPlanCard.status")}</S.InfoPlanCardString>
      <S.InfoPlanCardString>{t("infoPlanCard.trial")}</S.InfoPlanCardString>
      <S.InfoPlanCardString>{t("infoPlanCard.firstPay")}</S.InfoPlanCardString>
      <S.CancelButton
        variant="contained"
        onClick={handleCancelSubscription}
        disabled={isLoading}
      >
        {t("infoPlanCard.CancelSubscription")}
      </S.CancelButton>
    </S.InfoPlanBox>
  );
};
