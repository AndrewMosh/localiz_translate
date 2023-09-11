import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        welcome: "Добро пожаловать в мое приложение!",
      },
    },
    en: {
      translation: {
        welcome: "Welcome to my app!",
      },
    },
    fr: {
      translation: {
        welcome: "Bienvenue dans mon application!",
      },
    },
  },
  lng: "ru", // Устанавливаем язык по умолчанию
  fallbackLng: "ru", // Язык по умолчанию, если перевод не найден
  interpolation: {
    escapeValue: false, // Не экранировать строки в переводах
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
