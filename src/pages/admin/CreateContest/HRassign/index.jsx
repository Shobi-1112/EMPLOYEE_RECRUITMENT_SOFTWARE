import React, { useState } from 'react';
import Button from '../../../../components/Button';
import "./HRassign.scss";
import { RiDeleteBin5Line } from "react-icons/ri";
import RadioTag from '../../../../components/RadioButton';

const HRassign = () => {
  const [containervalue, setContainervalue] = useState([]);
  const [radivalue, setRadiovalue] = useState("")
  const [length, setLength] = useState(2);
  const radioHeading=["Technical HR","Personal HR"]

  const handleAddRound = (process) => {
    const newRound = { round: `Round ${length + 1}`, process };
    setContainervalue([...containervalue, newRound]);
    setLength(length + 1)
  };

  const handleDeleteRound = (index) => {
    const newRounds = [...containervalue];
    newRounds.splice(index, 1);
    setContainervalue(newRounds);
    setLength(length - 1)
  };

  return (
    <div className='Hraddcontainer'>
      <h1 className='headings'>Add HR Round </h1>
      <div className='radiobuttons'>
        <Button text={"Add +"} className={"HRAddbutton"} onClick={() => handleAddRound(radivalue)} isDisabled={radivalue?false:true} style={{cursor:radivalue?"pointer":"not-allowed"}}/>
        {radioHeading.map(data=>(
          <RadioTag  name={"radio"} className={"inputdiv"} key={data} lable={data} onChange={() => { setRadiovalue(data) }} />
        ))}
      </div>
      {containervalue.map((round, index) => (
        <div className='RoundisplayContainer'>
          <div key={index} className='roundinfo'>
            <h2 style={{color:"#543cc7"}}>{round.round}</h2>
            <p>{round.process}</p>
          </div>
          <RiDeleteBin5Line className='dustbin' onClick={() => handleDeleteRound(index)} />
        </div>
      ))}
    </div>
  );
};

export default HRassign;
