import { useTranslation } from "react-i18next";
import { TableBody } from "@mui/material";
import * as S from "./styles"; // Імпортуємо стилі з твого файлу стилів

export const PaymentHistoryTable = () => {
  const { t } = useTranslation("subscriptionManagement");

  const paymentHistory = [
    {
      id: "inv-001",
      invoice: "#INV-1234",
      date: "May 10, 2026",
      amount: "$49.00",
      status: "Paid",
    },
    {
      id: "inv-002",
      invoice: "#INV-5678",
      date: "Apr 10, 2026",
      amount: "$49.00",
      status: "Paid",
    },
    {
      id: "inv-003",
      invoice: "#INV-9012",
      date: "Mar 10, 2026",
      amount: "$49.00",
      status: "Paid",
    },
  ];

  return (
    <S.HistoryTableContainer>
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
          {paymentHistory.map((row) => (
            <S.HistoryTableRow key={row.id}>
              <S.HistoryTdCell>{row.invoice}</S.HistoryTdCell>
              <S.HistoryTdCell>{row.date}</S.HistoryTdCell>
              <S.HistoryTdCell>{row.amount}</S.HistoryTdCell>
              <S.HistoryTdCell>{row.status}</S.HistoryTdCell>

              <S.HistoryTdCell align="right">
                <S.ActionButton size="small">
                  <svg width="20" height="20">
                    <use href="/subscription/icons.svg#download" />
                  </svg>
                </S.ActionButton>
              </S.HistoryTdCell>
            </S.HistoryTableRow>
          ))}
        </TableBody>
      </S.HistoryTable>
    </S.HistoryTableContainer>
  );
};
