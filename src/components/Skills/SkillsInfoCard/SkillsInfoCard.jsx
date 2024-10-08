import React from "react";
import"./SkillsInfoCard.css";

// SkillsInfoCard component definition
const SkillsInfoCard = ({ heading, skills }) => {
    return (
        <div className="skills-info-card"> {/* Main container for the skills information card */}
            <h6>{heading}</h6> 

            <div className="skills-info-content"> 
                {skills.map((item, index) => ( // Mapping over the skills array to display each skill's information
                    <React.Fragment key={`skill_${index}`}> {/* Using React Fragment to group elements without adding extra nodes */}
                        <div className="skill-info">
                            <p>{item.skill}</p> {/* Displaying the skill name */}
                            <p className="percentage">{item.percentage}</p> {/* Displaying the skill percentage */}
                        </div>
                        <div className="skill-progress-bg"> {/* Background for the progress bar */}
                            <div
                                className="skill-progress"
                                style={{ width: item.percentage }} // Dynamically setting the width based on the skill percentage
                            ></div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default SkillsInfoCard; 