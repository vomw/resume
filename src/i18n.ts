import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Function to decode Base64
const atob_utf8 = (b64: string) => {
  return decodeURIComponent(
    atob(b64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );
};


i18n
  .use(HttpApi)
  .use(LanguageDetector) // Add LanguageDetector
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'zh'],
    fallbackLng: 'en',
    debug: true,
    backend: {
      loadPath: `${import.meta.env.BASE_URL}resume_{{lng}}.b64`,
      parse: (data: string) => JSON.parse(atob_utf8(data)),
    },
    detection: {
      order: ['navigator', 'querystring', 'cookie', 'localStorage', 'sessionStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
