import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import { apiClient } from "@/common/api/apiClient";

const VerifyPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");
  const hasFetched = useRef(false);

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        navigate("/login");
        return;
      }

      if (hasFetched.current) return;
      hasFetched.current = true;

      try {
        const response = await apiClient.get<{ accessToken: string }>(
          `/auth/magic-link/callback?token=${token}`,
        );

        const data = response.data;
        localStorage.setItem("accessToken", data.accessToken);

        try {
          const payloadBase64 = data.accessToken.split(".")[1];
          const decodedPayload = JSON.parse(atob(payloadBase64));
          localStorage.setItem(
            "user",
            JSON.stringify({ email: decodedPayload.email }),
          );
        } catch (e) {
          console.error("Failed to parse token payload", e);
        }

        navigate("/dashboard");
      } catch (error) {
        console.error("Error verifying token", error);
        navigate("/login");
      }
    };

    verifyToken();
  }, [token, navigate]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#060E20"
    >
      <CircularProgress sx={{ color: "#B0C6FF", mb: 2 }} />
      <Typography color="white" fontFamily="Inter, sans-serif">
        Verifying magic link...
      </Typography>
    </Box>
  );
};

export default VerifyPage;
