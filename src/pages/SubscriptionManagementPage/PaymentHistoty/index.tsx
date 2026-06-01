import { useTranslation } from "react-i18next";
import { TableBody } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import {
  useGetPaymentHistoryQuery,
  useGetInvoiceUrlMutation,
  useGetSubscriptionQuery,
} from "@/common/api/billingApi";
import * as S from "./styles";
import { PaymentHistoryTitle } from "../styles";

export const PaymentHistoryTable = () => {
  const { t } = useTranslation("subscriptionManagement");

  const { data: paymentHistory = [], isLoading: isHistoryLoading } =
    useGetPaymentHistoryQuery();
  const { data: subscription, isLoading: isSubscriptionLoading } =
    useGetSubscriptionQuery();
  const [getInvoiceUrl, { isLoading: isDownloading }] =
    useGetInvoiceUrlMutation();

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const formatAmount = (amountInCents: number) => {
    return `$${(amountInCents / 100).toFixed(2)}`;
  };

  const handleDownload = async (invoiceId: string) => {
    try {
      const response = await getInvoiceUrl(invoiceId).unwrap();
      if (response?.url) {
        window.open(response.url, "_blank");
      }
    } catch (err) {
      console.error("Error fetching invoice PDF link:", err);
    }
  };

  if (isHistoryLoading || isSubscriptionLoading) {
    return <div>{t("paymentHistory.loading") || "Loading..."}</div>;
  }

  if (paymentHistory.length === 0) {
    return null;
  }

  const isSubscriptionDeadOrDying =
    subscription?.status === "canceled" ||
    subscription?.status === "unpaid" ||
    subscription?.cancelAtPeriodEnd === true;

  return (
    <S.HistoryTableContainer>
      <PaymentHistoryTitle>{t("paymentHistory.title")}</PaymentHistoryTitle>
      <S.HistoryTable>
        <S.HistoryTableHead>
          <S.HistoryTableRow>
            <S.HistoryThCell>
              {t("paymentHistory.columns.invoice")}
            </S.HistoryThCell>
            <S.HistoryThCell>
              {t("paymentHistory.columns.date")}
            </S.HistoryThCell>
            <S.HistoryThCell>
              {t("paymentHistory.columns.amount")}
            </S.HistoryThCell>
            <S.HistoryThCell>
              {t("paymentHistory.columns.status")}
            </S.HistoryThCell>
            <S.HistoryThCell align="right">
              {t("paymentHistory.columns.action")}
            </S.HistoryThCell>
          </S.HistoryTableRow>
        </S.HistoryTableHead>

        <TableBody>
          {paymentHistory.map((row) => {
            const formattedStatusKey = row.status.replace(" ", "_");
            const showCanceledStatus =
              row.status === "paid" && isSubscriptionDeadOrDying;
            const translationKey = showCanceledStatus
              ? "subscriptionCanceled"
              : formattedStatusKey;

            return (
              <S.HistoryTableRow key={row.id}>
                <S.HistoryTdCell>{row.invoiceNumber || "-"}</S.HistoryTdCell>
                <S.HistoryTdCell>{formatDate(row.createdAt)}</S.HistoryTdCell>
                <S.HistoryTdCell>{formatAmount(row.amount)}</S.HistoryTdCell>
                <S.HistoryTdCell>
                  <S.StatusBadge
                    status={
                      showCanceledStatus
                        ? "subscription_canceled"
                        : formattedStatusKey
                    }
                  >
                    {t(`paymentHistory.statuses.${translationKey}`) ||
                      row.status}
                  </S.StatusBadge>
                </S.HistoryTdCell>

                <S.HistoryTdCell align="right">
                  <S.ActionButton
                    size="small"
                    onClick={() => handleDownload(row.id)}
                    disabled={isDownloading}
                  >
                    <DownloadIcon fontSize="small" />
                  </S.ActionButton>
                </S.HistoryTdCell>
              </S.HistoryTableRow>
            );
          })}
        </TableBody>
      </S.HistoryTable>
    </S.HistoryTableContainer>
  );
};
