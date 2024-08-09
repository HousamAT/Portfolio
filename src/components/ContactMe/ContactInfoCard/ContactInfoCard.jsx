import React, { useState } from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, link, email }) => {
  const [showEmail, setShowEmail] = useState(false);

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
      {email && showEmail && <p className="email-text">{email}</p>}
    </div>
  );
};

export default ContactInfoCard;
