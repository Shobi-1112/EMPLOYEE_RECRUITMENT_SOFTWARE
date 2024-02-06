import React, { useState } from "react";
import Page1 from "../FirstPage/FirstPage";
import Page2 from "../SecondPage/SecondPage";
import "./Switching.scss";
import NotificationSlideBar from "../NotificationSlider/NotificationSlideBar.jsx";

const Switching = () => {
  const [activeSwitch, setActiveSwitch] = useState("reschedule");

  const handleSwitchChange = (switchValue) => {
    setActiveSwitch(switchValue);
  };
  
  return (
    <>
      <div className="switchbox">
        <NotificationSlideBar />
        <div
          className={`firstswitch ${
            activeSwitch === "reschedule" ? "active" : ""
          }`}
          onClick={() => handleSwitchChange("reschedule")}
        >
          Reschedule
        </div>
        <div
          className={`secondswitch ${
            activeSwitch === "rescheduleAssign" ? "active" : ""
          }`}
          onClick={() => handleSwitchChange("rescheduleAssign")}
        >
          Reschedule Assign
        </div>
      </div>
      {activeSwitch === "reschedule" ? <Page1 /> : <Page2 />}
    </>
  );
};

export default Switching;
