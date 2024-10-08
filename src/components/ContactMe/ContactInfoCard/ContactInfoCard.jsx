import React, { useState } from "react";
import "./ContactInfoCard.css";

// ContactInfoCard component to display contact details with an icon
const ContactInfoCard = ({ iconUrl, link, email }) => {
  // State to toggle the visibility of the email
  const [showEmail, setShowEmail] = useState(false);

  // Function to handle email click and toggle visibility
  const handleEmailClick = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div className="contact-details-card">
      <div className="icon" onClick={email ? handleEmailClick : null}>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={iconUrl} alt="icon" />
          </a>
        ) : (
          <img src={iconUrl} alt="email icon" />
        )}
      </div>
      {/* Conditionally render the email text based on showEmail state */}
      {email && showEmail && <p className="email-text">{email}</p>}
    </div>
  );
};

export default ContactInfoCard;
