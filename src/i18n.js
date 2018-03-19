import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './lang/en-us.json';
import gibberish from './lang/gibberish.json';

i18n
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: true,
    returnObjects: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    resources: {
      en: {
        translation: en
      },
      gibberish: {
        translation: gibberish
      }
    },

    // react i18next special options (optional)
    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
  });


export default i18n;