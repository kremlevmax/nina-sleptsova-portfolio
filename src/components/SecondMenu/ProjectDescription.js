import React from "react";
import "./ProjectDescription.css";

const ProjectDescription = ({ docs, projectNumber, language }) => {
  return (
    <div className='project-desc__container'>
      <div className='project-title'>{docs[projectNumber].name[language]}</div>
      <div className='project-desc'>
        {docs[projectNumber].desc[language]} Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Aut nisi similique commodi ullam dolorum,
        inventore veniam necessitatibus quos natus illo enim voluptatem, ea quo
        deleniti harum? Consequuntur ad sapiente obcaecati.
      </div>
    </div>
  );
};

export default ProjectDescription;
