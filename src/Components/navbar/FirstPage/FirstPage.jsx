import React from "react";
import "/home/divum/Desktop/hiring platform/hiring-platform-frontend/src/Components/navbar/Switching.scss";
import Contestcard from "./Contestcard";
// import { IoIosNotificationsOutline, IoIosClose } from "react-icons/io";
// import { FaCircleUser } from "react-icons/fa6";

const FirstPage = () => {
  
  const test1 = [
    { name: "Contest Name :", des: "Contest_1" },
    { name: "Round No :", des: "3" },
    { name: "Round Name :", des: "Technical HR" },
    { name: "Round Date :", des: "20-01-2024" },
    { name: "Round Timing :", des: "9:00 Am to 10:00 Am" },
  ]
  const test2=[
    { name1: "HR Name :", des1: "Shobika P" },
    { name1: "HR Preferred Date :", des1: "27.01.2024" },
    { name1: "HR Preferred Timing :", des1: "12:00 Pm to 1:00 Pm" },
  ]
  const test3=[
    { name2: "Start Date & Time :", des2: "hi" },
    { name2: "Duration :", des2: "hello" },
  ];

  return (
    // <>
    //   <div className="Details">
    //     <div className="column">
    //       <div className="Contestdet">
    //         <div className="Title">Contest Details</div>
    //         <div className="form">
    //           {test1.map((item, index) => (
    //             <Contestcard key={index} sub={item.name} des={item.des} />
    //           ))}
    //         </div>
    //       </div>
    //       <div className="Reschedule">
    //         <div className="Title">Reschedule</div>
    //         <div className="form">
    //           {test1.map((item, index) => (
    //             <Contestcard key={index} sub={item.name2} des={item.des2} />
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="hrdet">
    //       <div className="Title2">HR Details</div>
    //       <div className="form2">
    //         {test1.map((item, index) => (
    //           <Contestcard key={index} sub={item.name1} des={item.des1} />
    //         ))}
    //       </div>
    //     </div>
        
    //   </div>
    // </>
    <>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}> 
      <div>
        <h2>contest info</h2>
        {test1.map(f=>(
        <Contestcard heading={f.name} content={f.des} />
        ))}
        </div>
        <div>
        <h2>contest info</h2>
       {test2.map(f=>(
        <Contestcard heading={f.name1} content={f.des1} />
        ))}
        </div>
    </div>
        <div style={{marginLeft:"16.5rem"}}>
        <h2>contest info</h2>
      {test3.map(f=>(
        <Contestcard heading={f.name2} content={f.des2} />
        ))}
        </div>    
    </>
  );
};

export default FirstPage;
