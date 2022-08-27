import React from "react";
import "./LanguageSelector.css";

const LanguageSelector = ({ language, setLanguage }) => {
  return (
    <div className='select-language'>
      <span
        className={language === "eng" ? "selected" : "language-option"}
        onClick={() => setLanguage("eng")}
      >
        English
      </span>{" "}
      /{" "}
      <span
        className={language === "skh" ? "selected" : "language-option"}
        onClick={() => setLanguage("skh")}
      >
        Саха тыла
      </span>{" "}
      /{" "}
      <span
        className={language === "ru" ? "selected" : "language-option"}
        onClick={() => setLanguage("ru")}
      >
        Русский
      </span>
    </div>
  );
};

export default LanguageSelector;
