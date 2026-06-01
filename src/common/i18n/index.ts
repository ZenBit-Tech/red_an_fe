import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import enTranslation from "./locales/en/translation.json";
import enDashboard from "./locales/en/dashboard.json";
import enLogin from "./locales/en/login.json";
import aboutUsEn from "./locales/en/aboutUs.json";
import contactUsEn from "./locales/en/contactUs.json";
import subscriptionManagementEN from "./locales/en/subscriptionManagement.json";

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...enTranslation,
        ...enDashboard,
        ...enLogin,
        compliance: {
          ...enTranslation.compliance,
        },
      },
      aboutUs: aboutUsEn,
      contactUs: contactUsEn,
      subscriptionManagement: subscriptionManagementEN,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
