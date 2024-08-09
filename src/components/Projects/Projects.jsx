import React, {useRef} from "react";
import './Projects.css'; 
import { PROJECTS } from "../../utils/data";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import Slider from "react-slick"; 

const Projects = () => {

const sliderRef = useRef();

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

    return (
        <section className="projects-container">
        <h1>Projects</h1>
        <div className="projects-content">

            
            <Slider ref={sliderRef} {...settings}>
                {PROJECTS.map((item) => (
                    <ProjectsCard key={item.title} details={item} />
                ))}
            </Slider>
            
        </div>
      </section>
    )

}

export default Projects



