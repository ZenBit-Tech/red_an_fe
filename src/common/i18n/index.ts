import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import enTranslation from "./locales/en/translation.json";
import enDeidentify from "./locales/en/deidentify.json";

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...enTranslation,
        ...enDeidentify,
        compliance: {
          ...enTranslation.compliance,
          ...enDeidentify.compliance,
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
