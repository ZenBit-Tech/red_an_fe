import { Box, CircularProgress, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import * as styles from "./styles";
import { useVerify } from "./hooks/useVerify";
const VerifyPage = () => {
  useVerify();
  const { t } = useTranslation();
  return (
    <Box sx={styles.container}>
      <CircularProgress sx={styles.spinner} />
      <Typography sx={styles.text}>{t("verify.verifying")}</Typography>
    </Box>
  );
};

export default VerifyPage;
