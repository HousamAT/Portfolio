import React from "react"; 
import './ExperienceCard.css'; 

// ExperienceCard component definition
const ExperienceCard = ({ details }) => {
    return (
      <div className="work-experience-card"> {/* Main container for the experience card */}
        <h6>{details.title}</h6> {/* Grabbing the title of the experience */}

        <div className="work-duration">{details.date}</div> {/* Duration of the work experience */}

        <ul> {/* Unordered list for responsibilities */}
          {details.responsibilities.map((item) => ( // Mapping through responsibilities array
            <li key={item}>{item}</li> // Rendering each responsibility as a list item
          ))}
        </ul>
      </div>
    );
};

export default ExperienceCard;
