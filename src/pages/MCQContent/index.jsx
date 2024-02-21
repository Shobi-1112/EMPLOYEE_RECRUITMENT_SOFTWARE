import React, { useEffect, useState } from "react";
import "../MCQContent/MCQContent.scss";
import { Rounds1 } from "../../helpers/RoundList";
import InputTag from "../../components/InputTag";
import WeightageCard from "../../components/WeightageCard";
import { Percentageinfo } from "../../components/WeightageCard/PercentagetimeInfo";
import Button from "../../components/Button";

const MCQContent = ({setTotalCountDisplay, totalCountDisplay,setCategoryTitle,contestInfo,getinfovalue,setPopup}) => {
  const [active, setActive] = useState({
    Verbal: false,
    Aptitude: false,
    Logical: false,
    Technical: false,
  });
 
  const [mcqround, setMcqround] = useState([]);
  const [percentages,setPercentages]=useState()

  const toggleActive = (type, checked) => {
    setActive((prevState) => ({
      ...prevState,
      [type]: checked,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { checked, value } = event.target;
    toggleActive(value, checked);
  };
  const addMcqRoundData = (roundType, partData, assignedTime, sumOfWeightages, title) => {
    setTotalCountDisplay(sumOfWeightages);
    setCategoryTitle(title)
    setMcqround(previous => {
        const newArray = [...previous];
        newArray[partData?.category?.categoryId] = partData;
        return newArray;
    });
};
  const percentage =(percentagevalue)=>{
    setPercentages(percentagevalue);
  }

  const updatevalue=()=>{
    getinfovalue(mcqround,"MCQ",percentages)
    setPopup(false) 
  }

  return (
    <div>
      <div className="CodingContent">
        {Rounds1.map((item, index) => (
          <InputTag
            type="checkbox"
            Process={item}
            key={index}
            value={item}
            onChange={handleCheckboxChange}
            checkboxHeading={item}
          />
        ))}
      </div>
      <div style={{ display: "flex" }}>
        {Object.entries(active).map(([key, value]) => (
          <WeightageCard
            key={key}
            active={value}
            title={key.toUpperCase()}
            add={addMcqRoundData}
            roundNumber={1}
          />
        ))}
      </div>
      <Percentageinfo percentage={percentage}/>
      <Button
          text={"Submit"}
          className={"CreateContestSubmitbutton"}
          onClick={()=>{updatevalue()}}
        />
    </div>
  );
};

export default MCQContent;
