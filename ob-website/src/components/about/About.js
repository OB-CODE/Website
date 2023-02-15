import React from "react";
import './About.scss';

import profile from '../../assets/MitchBoard.jpeg';


const About = () => {
  const greetings = "Hello there!";

  const aboutme = `I'm Mitchell O'Brien. I am a software engineering student and I have a passion for problem solving and working with others. With continuous learning as one of my core values, I am seeking an opportunity to utilise my skills developed as an educator with my natural aptitude for analytical and innovative thinking.`;

  const extendedAboutme = `Throughout General Assembly’s Software Engineering Immersive course, I have learnt what an ‘engineering mindset’ means and how to apply this way of thinking to full-stack development. My current skills include JavaSciprt, HTML/CSS, Ruby, SQL/PostgreSQL, Git and a wide range of workplace tech such as cloud resources. I am looking forward to extending my learning in the areas of Python and Java.`;

  return (
    <section id="about">
      <div className='mainAbout'>
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
          <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <div component='span'> Send me a message.</div>
            </a>
            <div component='h2' variant="h5">
              <div text={`${greetings}`} />
            </div>
            <p className="aboutme">
              {aboutme}
              <p className="larger">
                {extendedAboutme}
              </p>
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;