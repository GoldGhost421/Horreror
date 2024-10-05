import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      discoverMore: "Discover More",
      newItems: "New Items",
      summerSale: "Summer Sale",
    },
  },
  bg: {
    translation: {
      discoverMore: "Научи повече",
      newItems: "Нови Продукти",
      summerSale: "Лятна Разпродажба",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("lang") || "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
