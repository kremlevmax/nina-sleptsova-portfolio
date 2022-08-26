import React from "react";
import LanguageSelector from "./LanguageSelector";
import "./SecondMenu.css";

const SecondMenu = ({ setLanguage }) => {
  return (
    <div className='second-menu'>
      <LanguageSelector setLanguage={setLanguage} />
    </div>
  );
};

export default SecondMenu;
