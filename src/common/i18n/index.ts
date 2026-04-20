import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import enTranslation from "./locales/en/translation.json";
import aboutUsEn from "./locales/en/aboutUs.json";
import contactUsEn from "./locales/en/contactUs.json";

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
      aboutUs: aboutUsEn,
      contactUs: contactUsEn,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
