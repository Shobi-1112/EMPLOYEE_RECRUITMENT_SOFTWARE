import React, { useEffect, useState } from 'react';
import "../../components/WeightageCard/WeightageCard.scss";
import { Weightage } from '../../helpers/RoundList';
import InputTag from '../InputTag';

const WeightageCard = ({ active, title, add, roundNumber }) => {
    const [weightages, setWeightages] = useState([]);      
    const [duration, setDuration] = useState(0);
    const sumOfWeightages = Object.values(weightages).filter(value => !isNaN(value)).reduce((acc, curr) => acc + curr, 0);
    const handleWeightageChange = (item, value, title) => {
        const parsedValue = value.trim() !== '' ? parseInt(value) : 0;
        const id = title === "VERBAL" ? 0 : title === "APTITUDE" ? 1 : title === "LOGICAL" ? 2 :
           title === "DS" ? 0 : title === "MATHEMATICS" ? 1 : title === "STRINGS" ? 2 : 3;
        setWeightages(prevWeightages => ({
            ...prevWeightages,
            ...prevWeightages[title],
            [item]: parsedValue,
            category: {
                categoryId: id,
                category: title,
            },
            assignedTime:duration
        }));   
        
        
    };
    useEffect(()=>{
       add(roundNumber, weightages, duration,sumOfWeightages,title);
    },[sumOfWeightages])


    const handleDurationChange = (value) => {
        setDuration(value);
    };
    

    return (
        <div className='WeightageCard' style={{ height: !active && '0px', overflow: "hidden", padding: !active && "0px", border: !active && "none" }}>
            <h3>{title}</h3>
            {Weightage.map(item => (
                <div className='Weightage-content' key={item}>
                    <p className='weighttitle'>{item}</p>
                    <div className='incdecbutton'>
                        <InputTag type="text" className='weightagecount'  onChange={(e) => handleWeightageChange(item, e.target.value,title)} />
                    </div>
                </div>
            ))}
            <div className='totalvalues'>
                <p className='weighttitle'>Total</p>
                <p style={{ marginLeft: "3.2rem" , marginTop:"0.5rem" }}>{sumOfWeightages}</p>
            </div>
            <div className='totalvalues'>
                <p className='weighttitle'>Duration</p>
                <InputTag type={"text"} className={"durationinfo"} placeholder={"Enter time duration"} onChange={(e)=>{handleDurationChange(e.target.value)}} />
            </div>
        </div>
    );
};

export default WeightageCard;
