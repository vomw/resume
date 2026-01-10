import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import resumeEN from './assets/resume_en.b64?raw';
import resumeZH from './assets/resume_zh.b64?raw';

const parseResumeData = (b64: string): { data: any | null; error: Error | null } => {
  try {
    const byteString = atob(b64);
    const bytes = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      bytes[i] = byteString.charCodeAt(i);
    }
    const decodedString = new TextDecoder().decode(bytes);
    return { data: JSON.parse(decodedString), error: null };
  } catch (e) {
    console.error("Failed to parse resume data:", e);
    return { data: null, error: e as Error };
  }
};

const enResult = parseResumeData(resumeEN);
const zhResult = parseResumeData(resumeZH);

export const resumeLoadingError = enResult.error || zhResult.error;

const resources = {
  en: {
    translation: enResult.data || {},
  },
  zh: {
    translation: zhResult.data || {},
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ['en', 'zh'],
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['navigator', 'querystring', 'cookie', 'localStorage', 'sessionStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
