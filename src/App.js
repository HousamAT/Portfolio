import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience.jsx';
import ContactMe from './components/ContactMe/ContactMe.jsx';
import Projects from './components/Projects/Projects.jsx';


function App() {

  return (
   <>
  <Navbar/>

  <div className='container'>
  <section id="profile">
    <Profile />
  </section>

  <section id="work-experince">
    <WorkExperience/>
  </section>

  <section id="skills">
    <Skills />
  </section>

  <section id="projects">
    <Projects/>
  </section>

  <section id="contact-me">
  <ContactMe/>
  </section>

  </div>
   </>
  );
}

export default App;
