import React, { useState } from 'react'
import "./QuestionPage.scss"
import InputTag from '../InputTag/InputTag'
import { IoIosSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import Table from '../Table/Table';
import { table,questionContent } from '../../List';
import Popup from '../Popup/Popup';
const QuestionPage = () => {
    const [headingClick,setHeadingClick]=useState(true)
    const [searchchar,setSeachchar]=useState("")
    const [addbutton,setAddbutton]=useState(false)
    
  return (
    <div>
       <Popup trigger={addbutton} style={{width:"60%"}}>
             {/* <div className='mcq-type'>
                <h3>MCQ TYPE :</h3>
                <InputTag type={"radio"} Process={"Logical"} name={"mcqtype"} style={{marginLeft:"5%"}}/>
                <InputTag type={"radio"} Process={"Verbal"} name={"mcqtype"}/>
                <InputTag type={"radio"} Process={"Aptitude"} name={"mcqtype"}/> 
               </div>
               <div className='mcq-type'>
                <h3>WEIGHTAGE :</h3>
                <InputTag type={"radio"} Process={"Easy"} name={"weight"} style={{marginLeft:"3%"}}/>
                <InputTag type={"radio"} Process={"Medium"} name={"weight"}/>
                <InputTag type={"radio"} Process={"Hard"} name={"weight"}/> 
               </div> */}
               <div className='mcq-type'>
                <h3>QUESTION :</h3>   
                <textarea style={{marginLeft:"5%",width:"70%",height:"10rem"}}></textarea>
               </div>
             </Popup>
      <div className='questionContainer'   >
        <div className='sidebar'>asa</div>
        <div className='questionType'>
            <div className='QuestionHeading'>
                <h2 style={{textDecoration:headingClick?"underline":"none",color:headingClick?"green":"black"}} onClick={()=>setHeadingClick(true)}>MCQ</h2>
                <h2  style={{textDecoration:headingClick?"none":"underline",color:headingClick?"black":"green"}} onClick={()=>setHeadingClick(false)}>CODING</h2>
            </div>
            <div className='filteroptions'>
            <div className='SearchOption'>
              <InputTag type={"text"} className={"filerSerch"} style={{width:"90%"}} onChange={(data)=>setSeachchar(data.target.value)}/>
              <IoIosSearch style={{marginLeft:"10%"}} />
            </div>
            <CiFilter style={{fontSize:"2rem"}}/>
            <InputTag type={"button"} className={"addButton"} value={"+ ADD NEW"} style={{marginLeft:"50%"}} onClick={()=>setAddbutton(!addbutton)}/>
            </div>
            
             <Table headings={table} content={questionContent} searchop={searchchar} />



        </div>
      </div>
    
    </div>
  )
}

export default QuestionPage