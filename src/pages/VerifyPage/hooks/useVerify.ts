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

        const data = response.data;
        localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.accessToken);

        try {
          const payloadBase64 = data.accessToken.split(".")[1];
          const decodedPayload = JSON.parse(atob(payloadBase64));
          localStorage.setItem(
            STORAGE_KEYS.USER,
            JSON.stringify({ email: decodedPayload.email }),
          );
        } catch (e) {
          console.error("Failed to parse token payload", e);
        }

        navigate(APP_ROUTES.DASHBOARD);
      } catch (error) {
        console.error("Error verifying token", error);
        navigate(APP_ROUTES.SIGN_IN);
      }
    };

    verifyToken();
  }, [token, navigate]);
};
