import React from "react";
import './ProjectsCard.css'; 

//project-language replaces work-duration.
const ProjectsCard = ({details}) => {
    return (
        <div className="projects-card">
        <h6>{details.title}</h6>
  
        <div className="project-language">{details.language}</div> 
  
        <ul>
          {details.description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

    )
}

export default ProjectsCard;