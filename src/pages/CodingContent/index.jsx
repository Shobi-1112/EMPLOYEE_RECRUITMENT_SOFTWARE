import React, { useEffect,useState } from 'react';
import { Rounds2 } from '../../helpers/RoundList';
import '../CodingContent/CodingContest.scss';
import InputTag from '../../components/InputTag';
import WeightageCard from '../../components/WeightageCard';
import { Percentageinfo } from '../../components/WeightageCard/PercentagetimeInfo';
import Button from '../../components/Button';

const CodingContent = ({setTotalCountDisplay, totalCountDisplay,setCategoryTitle,getinfovalue,setPopup}) => {
    const [codeactive, setCodeactive] = useState({
        DS: false,
        Mathematics: false,
        Strings: false,
        Pattern: false,
    });
  const [addata,setAddata]=useState()
    
  const [codinground, setcodinground] = useState([]);
  const[Codingpercentage,setCodingpercentage]=useState([]);

    const toggleCodeactive = (type, checked) => {
        setCodeactive(prevState => ({
            ...prevState,
            [type]: checked,
        }));
    };

    const handleCodeCheckboxChange = (event) => {
        const { checked, value } = event.target;
        toggleCodeactive(value, checked);
    };


    const addRoundData = (roundType, partData, assignedTime, sumOfWeightages, title) => {
        setTotalCountDisplay(sumOfWeightages)
        setCategoryTitle(title)
        setcodinground(previous => {
            const newArray = [...previous];
            newArray[partData?.category?.categoryId] = partData;
            return newArray;
        });
    };

    const Codingpercentages =(percentagevalue)=>{
       setCodingpercentage(percentagevalue);
      }
    
    
      const updatevalue=()=>{
        getinfovalue(codinground,"Coding",Codingpercentage)
        setPopup(false) 
      }
    
    return (
        <div>
            <div className="CodingContent">
                {Rounds2.map((item, index) => (
                    <InputTag
                        type="checkbox"
                        Process={item}
                        key={index}
                        value={item}
                        onChange={handleCodeCheckboxChange}
                        checkboxHeading={item}
                    />
                ))}
            </div>
            <div style={{ display: "flex" }}>
                {Object.entries(codeactive).map(([key, value]) => (
                    <WeightageCard
                        key={key}
                        active={value}
                        title={key.toUpperCase()}
                        add={addRoundData}
                        roundNumber={2} 
                        />
                      ))}
            </div>
            <Percentageinfo percentage={Codingpercentages} />
            <Button
          text={"Submit"}
          className={"CreateContestSubmitbutton"}
          onClick={()=>{updatevalue()}}
        />
        </div>
    );
};

export default CodingContent;
