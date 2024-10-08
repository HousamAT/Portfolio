import React from "react";
import './Navbar.css';

// Navbar component definition
const Navbar = () => {
    return (
        <nav className="nav-wrapper"> {/* Main navigation wrapper */}
            <div className="nav-content"> 
                <img className="logo" src="./public/logo192.png" alt="" /> 

                <ul> {/* Unordered list for navigation items */}
                    <li> {/* List item for Home link */}
                        <a className="menu-item" href="#profile">Home</a> {/* Link to the profile section */}
                    </li>

                    <li> 
                        <a className="menu-item" href="#work-experince">Work Experience</a> {/* Link to work experience section */}
                    </li>

                    <li> 
                        <a className="menu-item" href="#skills">Skills</a> {/* Link to skills section */}
                    </li>

                    <li> 
                        <a className="menu-item" href="#projects">Projects</a> {/* Link to projects section */}
                    </li>

                    <li> {/* List item for Resume link */}
                        <a className="menu-item" 
                           href="https://drive.google.com/file/d/1LTjnTrWFnBCHNVN56VfrU8w1s6WvOYcl/view?usp=drive_link"
                           target="_blank" //opens link in a new window
                           rel="noopener noreferrer">Resume</a> {/* Link to resume */}
                    </li>

                    <li> 
                        <a className="menu-item" href="#contact-me">Contact Me</a> {/* Link to contact section */}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
