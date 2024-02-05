import React from "react";
import "../Switching/Switching.scss";
import Contestcard from "../Contestcard/index.jsx";

const FirstPage = () => {
  const test1 = [
    { name: "Contest Name :", des: "Contest_1" },
    { name: "Round No :", des: "3" },
    { name: "Round Name :", des: "Technical HR" },
    { name: "Round Date :", des: "20-01-2024" },
    { name: "Round Timing :", des: "9:00 Am to 10:00 Am" },
  ];
  const test2 = [
    { name: "HR Name :", des: "Shobika P" },
    { name: "HR Preferred Date :", des: "27.01.2024" },
    { name: "HR Preferred Timing :", des: "12:00 Pm to 1:00 Pm" },
  ];
  const test3 = [
    { name: "Start Date & Time :", des: "hi" },
    { name: "Duration :", des: "hello" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      <div>
        <h2>Contest Info</h2>
        {test1.map((item, index) => (
          <Contestcard key={index} heading={item.name} content={item.des} />
        ))}
      </div>
      <div>
        <h2>HR Details</h2>
        {test2.map((item, index) => (
          <Contestcard key={index} heading={item.name} content={item.des} />
        ))}
      </div>
      <div style={{ marginLeft: "16.5rem" }}>
        <h2>Additional Info</h2>
        {test3.map((item, index) => (
          <Contestcard key={index} heading={item.name} content={item.des} />
        ))}
      </div>
    </div>
  );
};

export default FirstPage;
