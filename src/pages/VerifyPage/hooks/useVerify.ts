import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { apiClient } from "@/common/api/apiClient";
import { APP_ROUTES, STORAGE_KEYS, API_ENDPOINTS } from "@/constants/index";

export const useVerify = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");
  const hasFetched = useRef(false);

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        navigate(APP_ROUTES.SIGN_IN);
        return;
      }

      if (hasFetched.current) return;
      hasFetched.current = true;

      try {
        const response = await apiClient.get<{ accessToken: string }>(
          `${API_ENDPOINTS.MAGIC_LINK_CALLBACK}?token=${token}`,
        );

        const accessToken = response.data.accessToken;
        localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken);

        try {
          const payloadBase64 = accessToken.split(".")[1];
          const decodedPayload = JSON.parse(atob(payloadBase64));
          localStorage.setItem(
            STORAGE_KEYS.USER,
            JSON.stringify({ email: decodedPayload.email }),
          );
        } catch (e) {
          console.error("Failed to parse token payload", e);
        }

        const pendingPlan = localStorage.getItem("pendingPlan");
        const pendingPriceId = localStorage.getItem("pendingPriceId");

        console.log("[verify] pendingPlan:", pendingPlan);
        console.log("[verify] pendingPriceId:", pendingPriceId);

        if (pendingPlan === "professional" && pendingPriceId) {
          try {
            const stripeRes = await fetch(
              `${import.meta.env.VITE_API_URL}/billing/create-checkout-session`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify({ priceId: pendingPriceId }),
              },
            );

            console.log("[verify] stripe response status:", stripeRes.status);

            if (!stripeRes.ok) {
              throw new Error(`Stripe API error: ${stripeRes.status}`);
            }

            const stripeData = await stripeRes.json();
            console.log("[verify] stripe data:", stripeData);

            if (stripeData.url) {
              localStorage.removeItem("pendingPlan");
              window.location.href = stripeData.url;
              return;
            }
          } catch (e) {
            console.error("[verify] Failed to create Stripe session", e);
          }
        }

        localStorage.removeItem("pendingPlan");
        localStorage.removeItem("pendingPriceId");
        navigate(APP_ROUTES.DASHBOARD);
      } catch (error) {
        console.error("[verify] Error verifying token", error);
        navigate(APP_ROUTES.SIGN_IN);
      }
    };

    verifyToken();
  }, [token, navigate]);
};
