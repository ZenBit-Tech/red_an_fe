import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en/translation.json";
import enCapabilities from "./locales/en/capabilities.json";
import enHero from "./locales/en/hero.json";
import enCompliance from "./locales/en/compliance.json";
import enFooter from "./locales/en/footer.json";

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
      capabilities: enCapabilities,
      hero: enHero,
      compliance: enCompliance,
      footer: enFooter,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
