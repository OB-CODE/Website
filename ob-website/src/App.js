import './App.css';
import SideNav from "./components/Nav/SideNav.js";
import Socials from "./components/Nav/Socials.js";
import About from "./components/about/About.js";
import Contact from "./components/contact/Contact.js";
import Project from "./components/projects/Project.js";
import ResumeLink from "./components/content/ResumeLink.js";
import LandingHeader from "./components/landing/LandingHeader.js";
import BackgroundAnimations from "./components/landing/BackgroundAnimations.js";
// import { Hidden } from '@mui/material';


function App() {

  return (
    <div className='page'>
      
      <BackgroundAnimations />
      <ResumeLink />
      <Socials />
      <LandingHeader />
      <SideNav />
      <Project />
      <About />
      <Contact />
      
    </div>

  );
}

export default App;
