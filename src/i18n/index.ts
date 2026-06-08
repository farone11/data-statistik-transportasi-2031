import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import id from './id.json';
import en from './en.json';
import jp from './jp.json';
import zh from './zh.json';

i18n.use(initReactI18next).init({
  resources: {
    id: { translation: id },
    en: { translation: en },
    jp: { translation: jp },
    zh: { translation: zh },
  },
  lng: 'id',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
