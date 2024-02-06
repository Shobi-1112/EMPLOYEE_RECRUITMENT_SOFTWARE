import React from 'react'
import "./Popup.scss"
function Popup(props) {
  return (props.trigger)?(
    <div className=' hole-con'>
        <div className='popup-container'>
             <div className='popup-addmcq' style={props.style}>
               {props.children}
             </div>
             </div>
    </div>
  ):"";
}

export default Popup


