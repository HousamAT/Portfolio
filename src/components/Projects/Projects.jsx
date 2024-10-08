import React, {useRef} from "react";
import './Projects.css'; 
import { PROJECTS } from "../../utils/data";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import Slider from "react-slick"; 

const Projects = () => {
  const sliderRef = useRef(); // Create a reference for the slider

  // Configuration settings for the slider
  const settings = {
    dots: false, // Disable navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 2, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    arrows: true, // Enable navigation arrows
    responsive: [ // Responsive settings for different screen sizes
      {
        breakpoint: 769, // When screen width is less than or equal to 769px
        settings: {
          slidesToShow: 1, // Show only one slide
          slidesToScroll: 1, // Scroll one slide at a time
        },
      },
    ],
  };

  return (
    <section className="projects-container"> {/* Main section for projects */}
      <h1>Projects</h1>
      <div className="projects-content"> 
        <Slider ref={sliderRef} {...settings}> {/* Slider component with settings */}
          {PROJECTS.map((item) => ( // Map through the PROJECTS array
            <ProjectsCard key={item.title} details={item} /> // Render a ProjectsCard for each project
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;

