import React from 'react'
import Contestcard from './Contestcard'
import '/home/divum/Desktop/hiring platform/hiring-platform-frontend/src/Components/navbar/Switching.scss';

const SecondPage = () => {
    const test=[{name:"Contest Name :",des:"Contest_1"},{name:"Round No :",des:"1"},{name:"Round Name :",des:"MCQ"},{name:"Round Date :",des:"23-01-2024"},{name:"Round Timing :",des:"9:00 Am to 10:00 Am"}]
  return (<>
  <div className='SecondPagecontent'> 
    <div className='Title'>Contest Details</div>
    <div className='form'>{
    test.map((item,index)=>{  return <Contestcard sub={item.name} des={item.des}/>})    
    }
    </div>
    </div>
    </>
  )
}

export default SecondPage

