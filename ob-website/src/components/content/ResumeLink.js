import React from 'react';
import Resume from './Resume.png';
import "./Content.scss";
import ModalImage from "react-modal-image";


const ResumeLink = () => {

  return <div className='resumeIcon'>
  
  <ModalImage
    className="sizeSmall"
    small={Resume}
    large={Resume}
  />
  Resume
  </div>;
};

export default ResumeLink