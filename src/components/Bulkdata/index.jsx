import React, { useState } from 'react'
import Input from "../InputTag/index"
import Button from "../Button/index"
import axios from 'axios';
import Popup from "../Popup/index"
import "../Bulkdata/Bulkdata.scss"
import excel from "../../assets/exel.png" 
function Bulkdata() {
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
        setImg();
    }


    
  return (

    <Popup trigger={true}>
        <div className='uploadContainer'>
            {}
            <img src={excel}/>
      <Input type={"file"} onChange={(data)=>handleFileChange(data)}/>
        </div>
        <Button onClick={()=>formdata()} text={"upload"}></Button>
    </Popup>
    
  )
}

export default Bulkdata
