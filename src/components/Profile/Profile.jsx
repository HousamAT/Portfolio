import React from "react";
import "./Profile.css"; 

// Profile component definition
const Profile = () => {
    return (
        <section className="profile-container"> {/* Main container for the profile section */}
            <div className="profile-content">
                <h2>Housam Tarrach</h2>

                <p>
                    About Me: Born and raised in Syria, lived in Turkey for 3 years, 
                    now a Canadian citizen residing in Canada. {/* Personal background information */}
                </p>
                
                <p>
                    Software Developer | 4th-year Computer Science student at UVic. 
                    Passionate about web and mobile development. {/* Professional background and interests */}
                </p>
            </div>

            <div className="profile-img">
                <img src="./my-image.png" alt="Housam Tarrach"/> {/* Profile image with alt text for accessibility */}
            </div>
        </section>
    );
};

export default Profile;
