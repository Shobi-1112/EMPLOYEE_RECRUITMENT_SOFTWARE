import React, { useState } from 'react'
import Input from "../InputTag/index"
import Button from "../Button/index"
import axios from 'axios';
import "../Bulkdata/Bulkdata.scss"
import excel from "../../assets/exel.png" 
import { BiCloudUpload } from "react-icons/bi";
function Bulkdata({classname}) {
    const [file,setFile]=useState();
    const [img,setImg]=useState(null)
    const formdata=async()=>{
        try {
            const formData = new FormData();
            formData.append('file', file[0]); 
            const response = await axios.post('https://cdef-106-51-80-105.ngrok-free.app/api/v1/questions/mcq/file',formData);
            console.log(response.data); 
          } catch (error) {
            console.error('Error:', error);
          }
       console.log(file)
    }

    const handleFileChange = (event) => {
        const selectedFile = event.target.files;
        setFile(selectedFile);
        setImg(excel);
    }

  return (
    <div className={classname}>
      <h1>ATTACH FILE</h1>
        <div className='uploadContainer'>
            {img?<img src={img} alt="bulkdata" className='fileimg'/>:<BiCloudUpload  className='uploadicons' />}
      <Input type={"file"} onChange={(data)=>handleFileChange(data)} className={"fileupload"} />
      <p style={{color:"gray"}}>Upload only .xlsx file</p>
        </div>
        <div className='uploadbuttonContainer'>
        <Button onClick={()=>formdata()} text={"Upload"} className={"uploadbutton"}></Button>
          </div>
      </div>
    
  )
}

export default Bulkdata
