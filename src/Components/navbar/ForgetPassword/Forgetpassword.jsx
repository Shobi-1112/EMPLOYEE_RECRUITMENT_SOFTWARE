
import React, { useState } from 'react';
import './Forgetpassword.scss'; 
import MailIcon from '@mui/icons-material/Mail';
import img from '/home/divum/Desktop/hiring platform/hiring-platform-frontend/src/assets/doneicon.png';

const Forgetpassword = () => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleContinue = () => {
    
    setShowPopup(true);
  };

  return (
    <div className='Forgetpasswordbox'>
      <h1 className='heading'>Forget Password? That's okay! Let's change it</h1>
      <div className='emailidbox'>
        <h1 className='labelname'> Email id</h1>
        <input
          type='email'
          placeholder='enter your email'
          className='inputbox'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className='mailicon'><MailIcon/></div>
      </div>
      <button className='Resetbutton' onClick={handleContinue}>
        CONTINUE
      </button>
      <h1 className='backtologin'>Back to Login</h1>
      {showPopup && (
        <div className='popup'>
          <img className='doneicon' src={img} alt='/'></img>
          <p>Woo-hoo. Well done!
             You’ve got an email to reset your password. Let’s make it happen.</p>
         
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Forgetpassword;
