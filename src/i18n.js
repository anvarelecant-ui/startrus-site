import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uzTranslation from './locales/uz.json';
import ruTranslation from './locales/ru.json';
import enTranslation from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: uzTranslation },
      ru: { translation: ruTranslation },
      en: { translation: enTranslation }
    },
    lng: "uz", // default language is Uzbek as requested!
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
