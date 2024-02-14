import React from 'react';
import "./Popup.scss";
import { RxCross2 } from "react-icons/rx";

function Popup({ trigger, setTrigger, children }) {
  return trigger ? (
    <div className='popup-background'>
      <div className='popup-container'>
        <div className='popup-header'>
          <button className='close-btn' onClick={() => setTrigger(false)}>
            <RxCross2 />
          </button>
        </div>
        <div className='popup-content'>{children}</div>
      </div>
    </div>
  ) : null;
}

export default Popup;