import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ExampleWorkButton from "../../components/exampleComponent";

const ExampleHomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography>{t("hello")}</Typography>
      <ExampleWorkButton label="Click me" />
    </div>
  );
};

export default ExampleHomePage;
