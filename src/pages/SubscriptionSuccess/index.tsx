import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import { CircularProgress, Box } from "@mui/material";
import { useGetCheckoutSessionQuery } from "@/common/api/billingApi";

type SessionStatus = "paid" | "unpaid" | "pending";

const SubscriptionSuccess = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");

  const mockStatus = import.meta.env.DEV
    ? (params.get("mock") as SessionStatus | null)
    : null;

  const { data, isLoading, isError } = useGetCheckoutSessionQuery(
    sessionId ?? "",
    {
      skip: !sessionId || Boolean(mockStatus),
    },
  );

  const effectiveStatus: SessionStatus | undefined = mockStatus ?? data?.status;
  const effectiveLoading = isLoading && !mockStatus;

  useEffect(() => {
    if (effectiveLoading || !effectiveStatus) return;

    if (effectiveStatus === "paid") {
      enqueueSnackbar(t("subscription.toast.success"), { variant: "success" });
      const timer = setTimeout(() => navigate("/dashboard"), 7000);
      return () => clearTimeout(timer);
    }

    if (effectiveStatus === "pending") {
      enqueueSnackbar(t("subscription.toast.pending"), { variant: "info" });
      return;
    }

    enqueueSnackbar(t("subscription.toast.failed"), { variant: "error" });
    const timer = setTimeout(() => navigate("/#subscription-plan"), 5000);
    return () => clearTimeout(timer);
  }, [
    effectiveStatus,
    effectiveLoading,
    isLoading,
    navigate,
    enqueueSnackbar,
    t,
  ]);

  useEffect(() => {
    if (isError && !mockStatus) {
      enqueueSnackbar(t("subscription.toast.checkFailed"), {
        variant: "error",
      });
    }
  }, [isError, mockStatus, enqueueSnackbar, t]);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box textAlign="center" py={8}>
      <h1>{t("subscription.success.title")}</h1>
      <p>{t("subscription.success.message")}</p>
    </Box>
  );
};

export default SubscriptionSuccess;
