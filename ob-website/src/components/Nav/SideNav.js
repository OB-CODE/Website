import React from 'react'
import { useState } from "react";
import "./SideNavBar.scss";


const SideNav = () => {

    const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
    <a href="#" 
      onClick={() => setActiveNav('#')}
      className={activeNav === '#' ? 'active' : ''}
    >Home
    </a>
    <a href="#projects"
      onClick={() => setActiveNav('#projects')}
      className={activeNav === '#projects' ? 'active' : ''}
    >Projects
    </a>
    <a href="#about" 
      onClick={() => setActiveNav('#about')}
      className={activeNav === '#about' ? 'active' : ''}
    > About
    </a>
    <a href="#contact"
      onClick={() => setActiveNav('#contact')}
      className={activeNav === '#contact' ? 'active' : ''}
    > Contact
    </a>
  </nav>
  )
}

export default SideNav
