import i18n from "i18next";
import heResource from './app/languages/he.json';
import enResource from './app/languages/en.json';
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: enResource
    },
    he: {
        translation: heResource
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;