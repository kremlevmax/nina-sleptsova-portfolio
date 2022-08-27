import React from "react";
import LanguageSelector from "./LanguageSelector";
import ProjectDescription from "./ProjectDescription";
import "./SecondMenu.css";
import { useLocation } from "react-router-dom";

const SecondMenu = ({ docs, projectNumber, language, setLanguage }) => {
  const pathname = useLocation().pathname;
  return (
    <div className='second-menu'>
      {pathname === "/projects" && (
        <ProjectDescription
          docs={docs}
          projectNumber={projectNumber}
          language={language}
        />
      )}
      <LanguageSelector language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default SecondMenu;
