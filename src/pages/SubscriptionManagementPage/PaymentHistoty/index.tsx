import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { TableBody } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  useGetPaymentHistoryQuery,
  useGetInvoiceUrlMutation,
  useGetSubscriptionQuery,
} from "@/common/api/billingApi";
import * as S from "./styles";
import { PaymentHistoryTitle } from "../styles";

export const PaymentHistoryTable = () => {
  const { t } = useTranslation("subscriptionManagement");
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  const tableWrapperRef = useRef<HTMLDivElement>(null);
  const extScrollRef = useRef<HTMLDivElement>(null);
  const [tableAtRightEnd, setTableAtRightEnd] = useState(false);
  const [tableScrollWidth, setTableScrollWidth] = useState(0);

  const { data: paymentHistory = [], isLoading: isHistoryLoading } =
    useGetPaymentHistoryQuery();
  const { data: subscription, isLoading: isSubscriptionLoading } =
    useGetSubscriptionQuery();
  const [getInvoiceUrl, { isLoading: isDownloading }] =
    useGetInvoiceUrlMutation();

  useEffect(() => {
    if (!isTablet) return;
    const el = tableWrapperRef.current;
    if (!el) return;
    const update = () => setTableScrollWidth(el.scrollWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isTablet, paymentHistory]);

  const handleTableScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const gap = el.scrollWidth - el.scrollLeft - el.clientWidth;
    setTableAtRightEnd((prev) => {
      if (!prev && gap <= 4) return true;
      if (prev && gap > 14) return false;
      return prev;
    });
    if (extScrollRef.current) extScrollRef.current.scrollLeft = el.scrollLeft;
  };

  const handleExtScroll = () => {
    if (extScrollRef.current && tableWrapperRef.current) {
      tableWrapperRef.current.scrollLeft = extScrollRef.current.scrollLeft;
    }
  };

  const scrollHorizontal = (amount: number) => {
    if (tableWrapperRef.current) {
      tableWrapperRef.current.scrollLeft += amount;
    }
    if (extScrollRef.current) {
      extScrollRef.current.scrollLeft += amount;
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
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

  const tableContent = (
    <S.HistoryTable>
      <S.HistoryTableHead>
        <S.HistoryTableRow>
          <S.HistoryThCell>
            {t("paymentHistory.columns.invoice")}
          </S.HistoryThCell>
          <S.HistoryThCell>{t("paymentHistory.columns.date")}</S.HistoryThCell>
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
                  {t(`paymentHistory.statuses.${translationKey}`) || row.status}
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
  );

  return (
    <S.HistoryTableContainer>
      <PaymentHistoryTitle>{t("paymentHistory.title")}</PaymentHistoryTitle>
      {isTablet ? (
        <>
          <S.HistoryTabletWrapper
            ref={tableWrapperRef}
            atRightEnd={tableAtRightEnd}
            onScroll={handleTableScroll}
          >
            {tableContent}
          </S.HistoryTabletWrapper>
          <S.HistoryHScrollBox>
            <S.HistoryHScrollArrow onClick={() => scrollHorizontal(-100)}>
              <ChevronLeftIcon fontSize="small" />
            </S.HistoryHScrollArrow>
            <S.HistoryHScrollTrack
              ref={extScrollRef}
              onScroll={handleExtScroll}
            >
              <S.HistoryHScrollInner sx={{ width: tableScrollWidth }} />
            </S.HistoryHScrollTrack>
            <S.HistoryHScrollArrow onClick={() => scrollHorizontal(100)}>
              <ChevronRightIcon fontSize="small" />
            </S.HistoryHScrollArrow>
          </S.HistoryHScrollBox>
        </>
      ) : (
        tableContent
      )}
    </S.HistoryTableContainer>
  );
};
