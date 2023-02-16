import React from "react";
import './About.scss';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import profile from '../../assets/MitchBoard.jpeg';
import o1 from "./assets/ob01.jpeg";
import o2 from "./assets/ob2.jpeg";
import o3 from "./assets/ob02.jpeg";
import o4 from "./assets/ob3.jpeg";
import o5 from "./assets/ob5.png";
import o6 from "./assets/ob6.jpeg";
import o7 from "./assets/ob8.jpeg";
import o8 from "./assets/ob9.jpeg";
import o9 from "./assets/ob11.jpeg";
import o10 from "./assets/ob12.jpeg";


const About = () => {
  const greetings = "Hello there!";

  const aboutme = `I'm Mitchell O'Brien. I am a software engineering student and I have a passion for problem solving and working with others. With continuous learning as one of my core values, I am seeking an opportunity to utilise my skills developed as an educator with my natural aptitude for analytical and innovative thinking.`;

  const extendedAboutme = `Throughout General Assembly’s Software Engineering Immersive course, I have learnt what an ‘engineering mindset’ means and how to apply this way of thinking to full-stack development. My current skills include JavaSciprt, HTML/CSS, Ruby, SQL/PostgreSQL, Git and a wide range of workplace tech such as cloud resources. I am looking forward to extending my learning in the areas of Python and Java.`;

  const images = [ o1, o2, o3, o4, o5, o6, o7, o8, o9, o10 ];

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
      <h1 className="hobbies">Get to know me:</h1>
       <Slide>
              {images.map((image, index) => 
                <div className="each-slide-effect">
                  <div>
                    <img key={index} src={image} alt="" />
                  </div>
                </div>
              )}
        </Slide>
    </section>
  );
};

export default About;