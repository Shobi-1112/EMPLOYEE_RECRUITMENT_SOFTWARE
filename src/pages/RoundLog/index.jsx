import React from "react";
import "./RoundLog.scss";
import Table from "../../components/Table";
import { MdOutlineEdit } from "react-icons/md";
import Button from "../../components/Button";
import { MdDeleteOutline } from "react-icons/md";

const RoundLog = ({array,index,handleDeletemcq}) => {
       console.log(array)
      const verbal=array.part[0][0].Easy+array.part[0][0].Medium+array.part[0][0].Hard;
      const aptitude=array.part[0][1].Easy+array.part[0][1].Medium+array.part[0][1].Hard;
      const logical=array.part[0][2].Easy+array.part[0][2].Medium+array.part[0][2].Hard;
      const tecnical=array.part[0][3].Easy+array.part[0][3].Medium+array.part[0][3].Hard;
    
      const sampleData = {
      roundNumber: index+1,
      category: array.roundnumber,
      passPercentage: array.PassPercentage,
      startDate: array.StartDateTime,
      endDate:array.EndDateTime,
      questions: [
        { Category: array.part[0][0].category.category, Easy:array.part[0][0].Easy,Medium:array.part[0][0].Medium,Hard:array.part[0][0].Hard, QuestionCount:verbal, Duration:15 },
        { Category: array.part[0][1].category.category,   Easy:array.part[0][1].Easy,Medium:array.part[0][1].Medium,Hard:array.part[0][1].Hard, QuestionCount:aptitude, Duration:15  },
        { Category: array.part[0][2].category.category,  Easy:array.part[0][2].Easy,Medium:array.part[0][2].Medium,Hard:array.part[0][2].Hard, QuestionCount:logical, Duration:15  },
        { Category: array.part[0][3].category.category,  Easy:array.part[0][3].Easy,Medium:array.part[0][3].Medium,Hard:array.part[0][3].Hard, QuestionCount:tecnical, Duration:15  },

      ]
    };

  const { roundNumber, category, passPercentage, startDate, endDate, questions } = sampleData;

  return (
    <div className="RoundLog">
      <h2> Round {roundNumber} </h2>
      <div className="Container">
        <h2 className="RoundHeading">{category}</h2>
        <div className="Basicinfo">
          <div className="Tablecontent">
            <Table data={questions} className="Table" isPopupUp={false} />
          <div className="Passpercentage">
            <p><span>Pass Percentage :</span> {passPercentage}</p>
            <p><span>Start Date and time : </span>{startDate}</p>
            <p><span>End Date and time :</span>{endDate}</p>
            </div>
          </div>
          <div className="Buttons">
            <Button text={"Edit"} icon={<MdOutlineEdit style={{color:"white"}} />} className={"editDeleteicon"} style={{background:"#3c65c3"}}></Button>
            <Button text={"Delete"} icon={<MdDeleteOutline style={{color:"white"}}/>} className={"editDeleteicon"} style={{background:"rgba(195,60,60,1)"}} onClick={()=>{handleDeletemcq(index)}}></Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundLog;
