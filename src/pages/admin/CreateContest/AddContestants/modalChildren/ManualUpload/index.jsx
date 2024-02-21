import React, { useState } from 'react';
import "./ManualUpload.scss";
import Button from "../../../../../../components/Button/index"
import CollegeAddConatiner from './CollegeaddContainer';

const ManualUpload = () => {
  const [addCounter, setAddCounter] = useState(1); 
  const [removelement,setRemovelement]=useState()
  const [constinfo,setConstinfo]=useState([])
  const [removecollege,setRemovecollege]=useState()
  const handleAddClick = () => {
    setAddCounter(addCounter + 1);   
  };
    
  const contestinfo = (value) => {
    value.forEach((newValue) => {
      const existingIndex = constinfo.findIndex(item => item.name === newValue.name || item.email === newValue.email);
      if (existingIndex !== -1) {
        const updatedConstinfo = [...constinfo];
        updatedConstinfo[existingIndex] = { ...updatedConstinfo[existingIndex], ...newValue };
        setConstinfo(updatedConstinfo);
      } else {
        setConstinfo(prevConstinfo => [...prevConstinfo, newValue]);
      }
    });
  };

   const removedetail=(value,collegename)=>{
    setAddCounter(addCounter-1)
    setRemovelement(value)
    setRemovecollege(collegename)
  }
  
  console.log(constinfo,"info")
   
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
