
//for the email
import React from "react";
import "./ContactMe.css";

import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";

const ContactMe = () => {
  return (
    <div>
      <section className="contact-container">
        <h5>Contact Me</h5>
        <div className="contact-content">
          <ContactInfoCard
            iconUrl="./email-icon.png"
            email="hishamtarrash@gmail.com"
          />
          <ContactInfoCard
            iconUrl="./git.png"
            link="https://github.com/HousamAT"
          />
          <ContactInfoCard
            iconUrl="./linkedin.png"
            link="https://www.linkedin.com/in/housam-tarrach-3b7812189/"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactMe;



