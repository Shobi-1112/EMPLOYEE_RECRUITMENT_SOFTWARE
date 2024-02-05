import React from 'react'
import "/home/divum/Desktop/hiring platform/hiring-platform-frontend/src/Components/navbar/Buttons.scss";
import { MdArrowBackIos } from "react-icons/md";
import { GrNext } from "react-icons/gr";
const Buttons = () => {
  return (
    <div>
        <button className='previous' > 
        <div className='prevcontent'><MdArrowBackIos className='previcon'/>
         PREVIOUS</div>
         </button>
         <button className='next'>
         <div className='nextcontent'>
        <p className='nexttext'>NEXT</p> <GrNext /></div>
         </button>
         <button className='submit'>SUBMIT</button>
         <button className='compile'>COMPILE</button>
    </div>   
  )
}

export default Buttons;