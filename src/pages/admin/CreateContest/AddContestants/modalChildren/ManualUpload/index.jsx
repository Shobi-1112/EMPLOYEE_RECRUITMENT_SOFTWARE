import React, { useState } from 'react';
import "./ManualUpload.scss";
import Button from "../../../../../../components/Button/index"
import CollegeAddConatiner from './CollegeaddContainer';

const ManualUpload = () => {
  const [addCounter, setAddCounter] = useState(1); 
  const [removelement,setRemovelement]=useState()
  const [constinfo,setConstinfo]=useState([])
  const handleAddClick = () => {
    setAddCounter(addCounter + 1);   
  };
    
   const contestinfo=(value)=>{
    setConstinfo([...constinfo,...value])
   }

   const removedetail=(value)=>{
    setAddCounter(addCounter-1)
    setRemovelement(value)
    console.log(value)
  }
  
   
  return (
    <div className='manualuploadcontainer'>
      {[...Array(addCounter)].map((_, index) => (
         index !== removelement && (
          <CollegeAddConatiner 
              key={index} 
              className={"CollegeAddConatiner"} 
              addcontestdetail={contestinfo} 
              index={index} 
              removevalue={removedetail}
          />
      )
        ))}
        <Button text={"Add College"} className={"addbutton"} onClick={handleAddClick} />
    </div>
  );
};

export default ManualUpload;
