import React from "react";
import './ProjectsCard.css'; 

// ProjectsCard component receives project details as props
const ProjectsCard = ({ details }) => {
  return (
    <div className="projects-card"> {/* Main container for the project card */}
      <h6>{details.title}</h6> 
  
      <div className="project-language">{details.language}</div> {/* Display the programming language used */}
  
      <ul> {/* list for project descriptions */}
        {details.description.map((item) => ( // Map through the description array
          <li key={item}>{item}</li> // Render each description item as a list element
        ))}
      </ul>
    </div>
  );
};


export default ProjectsCard;