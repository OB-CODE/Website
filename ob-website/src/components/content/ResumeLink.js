import React from 'react';
import { Link } from '@mui/material';
import Resume from '../../assets/MOBResume.pdf';
import "./Content.scss";
import icon from "../../assets/resumeIcon.png"

const ResumeLink = () => {

  return <div className='resumeIcon'>
    <Link
      href={Resume}
      key={1}
      target='_blank' //make page open in new windwo
      underline='none'
      color='inherit'
    >
      <div className='iconButton'><div className="iconContainer"><img src={icon} alt="" /> <div>Resume</div></div>
</div>
    </Link>
  </div>;
};

export default ResumeLink