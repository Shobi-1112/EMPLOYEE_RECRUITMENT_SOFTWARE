import React from 'react';
import "/home/divum/Desktop/hiring platform/hiring-platform-frontend/src/Components/navbar/Resetpassword.scss";

const Resetpassword = () => {
  return (
    <div className='Resetpasswordbox'>
        <h1 className='heading' >RESET PASSWORD</h1>
        <div className='Resetpasswordcontent'>
      
      <div className='passwordchange'>
      <p className='labelname'>CURRENT PASSWORD :</p>
      <input type='password' placeholder='current password' className='inputbox'></input>
      </div>
      <div className='newpassword'>
      <p className='labelname'>NEW PASSWORD :</p>
      <input type='password' placeholder='new password' className='inputbox'></input>
      </div>
      <div className='newpassword'>
      <p className='labelname'>CONFIRM PASSWORD :</p>
      <input type='password' placeholder='confirm password' className='inputbox'></input>
      </div>
      <button className='Resetbutton'>Reset</button>
      </div>
    </div>
  )
}

export default Resetpassword;