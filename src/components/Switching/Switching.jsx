import React, { useState } from "react";
import "./Switching.scss";

const Switching = ({ Arrayofvalue, clickinfo }) => {
  const [headingvalue, setHeadingvalue] = useState(Arrayofvalue[0]);

  const handleCheck = (value) => {
    setHeadingvalue(value);
    clickinfo(value);
  };

  return (
    <div className="switchbox">
      {Arrayofvalue.map((f) => (
        <div
          className={headingvalue === f ? "switch-item active" : "switch-item"}
          onClick={() => {
            handleCheck(f);
          }}
          key={f}
          style={{width: "110%"}}
        >
          <p style={{textAlign: "center"}}>{f}</p>
        </div>
      ))}
    </div>
  );
};

export default Switching;
