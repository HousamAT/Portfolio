import React from "react"; 
import "./WorkExperience.css"; 
import { WORK_EXPERIENCE } from "../../utils/data"; // Importing work experience data
import ExperienceCard from "./ExperienceCard/ExperienceCard"; // Importing the ExperienceCard component

// WorkExperience component
const WorkExperience = () => {
  return (
    <section className="experience-container"> {/* Main container for work experience */}
      <h5>Work Experience</h5> 

      <div className="experience-content"> {/* Container for individual experience cards */}
        {WORK_EXPERIENCE.map((item) => ( // Mapping through WORK_EXPERIENCE data
          <ExperienceCard key={item.title} details={item} /> // Rendering ExperienceCard for each item
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
