import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <img className = "logo" src="./public/logo192.png" alt="" />
                <ul>
                    <li>
                        <a className="menu-item" href="#profile">Home</a>
                    </li>

                    <li>
                        <a className="menu-item" href="#work-experince">Work Experince</a>
                    </li>

                    <li>
                        <a className="menu-item" href="#skills">Skills</a>
                    </li>


                    <li>
                        <a className="menu-item" href="#projects">Projects</a>
                    </li>

                    <li>
                        <a className="menu-item" href="#contact-me">Contact Me</a>
                    </li>
                    
                </ul>
            </div>


        </nav>
    )
}
export default Navbar