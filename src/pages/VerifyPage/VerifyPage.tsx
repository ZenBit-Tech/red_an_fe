import { useTranslation } from "react-i18next";

import { useVerify } from "@/pages/VerifyPage/hooks/useVerify";
import { Container, Spinner, Text } from "@/pages/VerifyPage/styles";

const VerifyPage = () => {
  useVerify();
  const { t } = useTranslation();
  return (
    <Container>
      <Spinner />
      <Text>{t("verify.verifying")}</Text>
    </Container>
  );
};

export default VerifyPage;
