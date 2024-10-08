
import React from "react";
import "./Profile.css";

const Profile = () => {
    return (
        <section className="profile-container">
            <div className="profile-content">
                <h2>Housam Tarrach</h2>
                    <p>
                    About Me: Born and raised in Syria, lived in Turkey for 3 years, 
                    now a Canadian citizen residing in Canada.
                    </p>
                    
                    <p>
                    Software Developer | 4th-year Computer Science student at UVic. 
                    Passionate about web and mobile development.
                    </p>
            </div>
            <div className="profile-img">
                <img src="./my-image.png" alt="Housam Tarrach"/>
            </div>
        </section>
    );
};

export default Profile;

