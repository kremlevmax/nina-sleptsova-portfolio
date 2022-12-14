import React from "react";
import { Link } from "react-router-dom";
import ProjectList from "../ProjectsList/ProjectList";
import MainMenu from "./MainMenu";
import "./Menu.css";
import SocialLinks from "./SocialLinks";

const Menu = ({ projectNumber, language, docs, setProjectNumber }) => {
  const logo = language === "eng" ? "Nina Sleptsova" : "Нина Слепцова";
  return (
    <nav>
      <div className='logo__container'>
        <Link to='/nina-sleptsova-portfolio/' className='logo'>
          {logo}
        </Link>
      </div>
      <MainMenu language={language} />
      <ProjectList
        projectNumber={projectNumber}
        docs={docs}
        language={language}
        setProjectNumber={setProjectNumber}
      />
      <SocialLinks />
    </nav>
  );
};

export default Menu;
