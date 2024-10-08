import React from 'react';
import './SkillCard.css';

// SkillCard component definition
const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div 
      className={`skills-card ${isActive ? "active" : ""}`} // Conditional class assignment for active state
      onClick={() => onClick()} // Click event handler to trigger the onClick function passed as a prop
    >
      <div className="skill-icon"> 
        <img src={iconUrl} alt={title} /> {/* Image displaying the skill icon */}
      </div>
      <span>{title}</span> 
    </div>
  );
};

export default SkillCard;
