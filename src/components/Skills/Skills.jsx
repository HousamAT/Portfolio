import React, {useState} from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";

// Skills component definition
const Skills = () => {
  // State to track the currently selected skill, initialized to the first skill
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  // Function to handle skill selection
  const handleSelectSkill = (data) => {
      setSelectedSkill(data); // Update the selected skill in state
  };

  return (
      <section className="skills-container"> {/* Main container for skills section */}
          <h5>Technical Proficiency</h5>
          <div className="skills-content"> 
              <div className="skills">
                  {SKILLS.map((item) => ( // Mapping over the SKILLS array to create SkillCards
                      <SkillCard
                          key={item.title} // Unique key for each SkillCard
                          iconUrl={item.icon} // Icon URL for the SkillCard
                          title={item.title} // Title for the SkillCard
                          isActive={selectedSkill.title === item.title} // Checks if this card is the active one
                          onClick={() => { 
                              handleSelectSkill(item); // Call to update selected skill
                          }}
                      />
                  ))}
              </div>
              <div className="skills-info"> {/* Container for the selected skill's info */}
                  <SkillsInfoCard
                      heading={selectedSkill.title} // Heading displays the title of the selected skill
                      skills={selectedSkill.skills} // Skills details passed to the SkillsInfoCard
                  />
              </div>
          </div>
      </section>
  );
};

export default Skills;
