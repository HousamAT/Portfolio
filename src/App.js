import './App.css'; 
import Navbar from './components/Navbar/Navbar'; 
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience.jsx';
import ContactMe from './components/ContactMe/ContactMe.jsx';
import Projects from './components/Projects/Projects.jsx';

// Main App component
function App() {
  return (
    <>
      <Navbar /> {/* Rendering the navigation bar */}

      <div className='container'> {/* Main container for the sections */}
        <section id="profile"> {/* Profile section */}
          <Profile /> {/* Rendering the Profile component */}
        </section>

        <section id="work-experience"> {/* Work Experience section */}
          <WorkExperience /> {/* Rendering the WorkExperience component */}
        </section>

        <section id="skills"> {/* Skills section */}
          <Skills /> {/* Rendering the Skills component */}
        </section>

        <section id="projects"> {/* Projects section */}
          <Projects /> {/* Rendering the Projects component */}
        </section>

        <section id="contact-me"> {/* Contact Me section */}
          <ContactMe /> {/* Rendering the ContactMe component */}
        </section>
      </div>
    </>
  );
}

export default App; 
