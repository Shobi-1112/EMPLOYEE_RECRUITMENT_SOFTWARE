import React, { useState } from 'react';
import Page1 from '/home/divum/Desktop/hiring platform/hiring-platform-frontend/src/Components/navbar/FirstPage.jsx'; // Import your first page component
import Page2 from '/home/divum/Desktop/hiring platform/hiring-platform-frontend/src/Components/navbar/SecondPage.jsx'; // Import your second page component
import '/home/divum/Desktop/hiring platform/hiring-platform-frontend/src/Components/navbar/Switching.scss';
import NotificationSlideBar from './NotificationSlideBar';

const Switching = () => {
  const [activeSwitch, setActiveSwitch] = useState('reschedule');

  const handleSwitchChange = (switchValue) => {
    setActiveSwitch(switchValue);
  };

  return (
    <>
    <div className='switchbox'>
     <NotificationSlideBar/>

      <div
        className={`firstswitch ${activeSwitch === 'reschedule' ? 'active' : ''}`}
        onClick={() => handleSwitchChange('reschedule')}
      >
        Reschedule
      </div>
      <div
        className={`secondswitch ${activeSwitch === 'rescheduleAssign' ? 'active' : ''}`}
        onClick={() => handleSwitchChange('rescheduleAssign')}
      >
        Reschedule Assign
      </div>
        
    
    </div>
    {activeSwitch === 'reschedule' ? <Page1 /> : <Page2 />}

    </>
  );
};

export default Switching;
