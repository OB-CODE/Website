import React from 'react'
import StyledSpeedDial, { SpeedDialProps } from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import './Socials.scss';
import actions from "./linkDetails";

import { Box } from '@mui/system';




const Socials = () => {

  // const [direction, setDirection] = React.useState('up');


  // const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const handleDirectionChange = (event) => {
  //   setDirection(event.target.value);

  // };

  
  return (
    <div className="stay">
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
    </div>
  )
}

export default Socials

