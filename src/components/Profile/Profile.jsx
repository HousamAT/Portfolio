// import React from "react";
// import "./Profile.css";
// import logo from "C:/Users/hisha/OneDrive/Desktop/react project video/react-portfolio/src/logo.svg"

// const Profile = () => {
//     return (

//         <section className="profile-container">
//             <div className="profile-content">
//                 <h2>Housam Tarrach</h2>
//                 <p>
//                     Software Developer | 4th Computer Science Student at UVIC 
//                     Creating Seamless Solutions Across Frontend and Backend Development
//                 </p>
//             </div>
//             <div className="profile-img">
//                 <img src='./my-image.HEIC' alt=""/>
//             </div>
//         </section>
//     );
// };

// export default Profile;


import React from "react";
import "./Profile.css";
import myImage from "C:/Users/hisha/OneDrive/Desktop/react project video/react-portfolio/src/my-image.HEIC";

const Profile = () => {
    return (
        <section className="profile-container">
            <div className="profile-content">
                <h2>Housam Tarrach</h2>
                <p>
                    Software Developer | 4th Computer Science Student at UVIC 
                    Creating Seamless Solutions Across Frontend and Backend Development
                </p>
            </div>
            <div className="profile-img">
                <img src={myImage} alt="Housam Tarrach"/>
            </div>
        </section>
    );
};

export default Profile;

