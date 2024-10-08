import React from "react";
import "./ContactMe.css"; 
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard"; // Importing the ContactInfoCard component

// ContactMe component to display contact information
const ContactMe = () => {
  return (
    <div>
      <section className="contact-container">
        <h5>Contact Me</h5> {/* Header for the contact section */}
        <div className="contact-content">
          {/* ContactInfoCard for email */}
          <ContactInfoCard
            iconUrl="./email-icon.png" // Path to the email icon
            email="hishamtarrash@gmail.com" // Email address to display
          />
          {/* ContactInfoCard for GitHub profile */}
          <ContactInfoCard
            iconUrl="./git.png" // Path to the GitHub icon
            link="https://github.com/HousamAT" // Link to the GitHub profile
          />
          {/* ContactInfoCard for LinkedIn profile */}
          <ContactInfoCard
            iconUrl="./linkedin.png" // Path to the LinkedIn icon
            link="https://www.linkedin.com/in/housam-tarrach-3b7812189/" // Link to the LinkedIn profile
          />
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
