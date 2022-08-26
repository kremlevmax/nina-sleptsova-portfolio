import React from "react";
import { Link } from "react-router-dom";

const MainMenu = ({ language }) => {
  const projectsTitle =
    language === "eng"
      ? "Projects"
      : language === "skh"
      ? "Бырайыактар"
      : "Проекты";
  return (
    <div className='menu__container'>
      <ul className='menu'>
        <li className='menu__item'>
          <Link to='/projects' className='menu__item-link'>
            {projectsTitle}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
