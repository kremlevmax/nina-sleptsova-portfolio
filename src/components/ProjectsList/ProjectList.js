import React from "react";
import { useLocation } from "react-router-dom";
import "./ProjectList.css";

const ProjectList = ({ projectNumber, docs, language, setProjectNumber }) => {
  const pathname = useLocation().pathname;

  const projects = docs.map((item, index) => {
    if (index === projectNumber) {
      return (
        <li className='selected' key={item.id}>
          {item.name[language]}
        </li>
      );
    } else {
      return (
        <li key={item.id} onClick={() => setProjectNumber(index)}>
          {item.name[language]}
        </li>
      );
    }
  });

  return (
    <div className='project-list__wrapper'>
      {pathname === "/projects" && <ul className='project-list'>{projects}</ul>}
    </div>
  );
};

export default ProjectList;
