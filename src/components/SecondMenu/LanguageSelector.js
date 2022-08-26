import React from "react";
import "./LanguageSelector.css";

const LanguageSelector = ({ setLanguage }) => {
  return (
    <div className='select-language'>
      <span className='language-option' onClick={() => setLanguage("eng")}>
        English
      </span>{" "}
      /{" "}
      <span className='language-option' onClick={() => setLanguage("skh")}>
        Саха тыла
      </span>{" "}
      /{" "}
      <span className='language-option' onClick={() => setLanguage("ru")}>
        Русский
      </span>
    </div>
  );
};

export default LanguageSelector;
