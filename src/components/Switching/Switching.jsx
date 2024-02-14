import React, { useState } from "react";
import "../Switching/Switching.scss";

const Switching = ({ Arrayofvalue, children,renderContent,className }) => {
  const [selectedOption, setSelectedOption] = useState(Arrayofvalue[0]);

  const handleCheck = (value) => {
    setSelectedOption(value);
    renderContent(value);
  };
  

  return (
    <>
      <div className="switchbox">
        {Arrayofvalue.map((f) => (
          <div
            key={f}
            style={{
              borderBottom:
                selectedOption === f ? "4px green solid" : "none",
              cursor: "pointer"
            }}
            onClick={() => {
              handleCheck(f);
            }}
            className={className}
          >
            {f}
          </div>
        ))}
      </div>
      {children && children[selectedOption]} 
    </>
  );
};

export default Switching;
