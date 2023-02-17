import React from 'react'
import StyledSpeedDial, { SpeedDialProps } from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';


//Icons
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/system';
import zIndex from '@mui/material/styles/zIndex';

const actions = [
    { icon: <EmailIcon />, name: 'Gmail', url: 'https://mail.google.com/' },
    { icon: <TwitterIcon />, name: 'Twitter', url: 'https://twitter.com/Mitch_OB_CODE' },
    { icon: <GitHubIcon />, name: 'GitHub', url: 'https://github.com/OB-CODE' },
    { icon: <LinkedInIcon />, name: 'LinkedIn', url: 'www.linkedin.com/in/mitchellobriense01' },
  ]
const Socials = () => {

  // const [direction, setDirection] = React.useState('up');


  // const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const handleDirectionChange = (event) => {
  //   setDirection(event.target.value);

  // };

  
  return (
    <Box sx={{ mt: 0, height: 0, transform: 'translateZ(10px)', flexGrow: 1 }}>
      < StyledSpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: -315, right: 30 }}
        icon={<SpeedDialIcon />}
        direction='down'
        // onChange={handleDirectionChange}

      >
      {actions.map((action) => (
        <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
        href={action.url}
          />
      ))}
      </StyledSpeedDial>
    </Box>
  )
}

export default Socials

