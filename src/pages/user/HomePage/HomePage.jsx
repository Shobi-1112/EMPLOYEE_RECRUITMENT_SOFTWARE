import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Container from '../../../components/BgContainer';
import axios from 'axios';
import './HomePage.scss';
import { useNavigate } from 'react-router';
const HomePage = () => {
  const [roundsData, setRoundsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [roundNames, setRoundNames] = useState([]);
  const navigate=useNavigate();
  useEffect(() => { 
    const fetchUserData = async () => {
      try {
        const userDataResponse = await axios.get(`http://localhost:8081/api/v1/user/${sessionStorage.getItem("userId")}`);
        const roundsData = userDataResponse.data.object; 
        console.log(roundsData, "hhhhhh");
      
       
        if (!roundsData || !Array.isArray(roundsData)) {
          throw new Error('Invalid data format received from the server');
        }

        setRoundsData(roundsData);

      
        const names = roundsData.flatMap(contest => contest.round.map(round => round.roundName));
        console.log(names);
        setRoundNames(names);

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setIsLoading(false);
      }
    };

    fetchUserData(); 
  }, []);

  const mapRoundName = (name) => {
    if (name === "TECHNICAL_INTERVIEW"|| name==="PERSONAL_INTERVIEW") {
      return "HR";
    }
    return name;
  };
 const handleClickContest=(roundName)=>{
  navigate(`/user/test-instruction/${roundName}`)
 }
  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <Sidebar roundNames={roundNames} />
      {isLoading ? ( 
        <div>Loading...</div>
      ) : (
        roundsData.map((contest, index) => (
          <div key={index} className='red'>
            {contest.round.map((round, roundIndex) => (
            <Container 
            key={roundIndex} 
            heading={mapRoundName(round.roundName)}
            path={`/user/test-instruction/${round.roundName}`}
            mcqpath={round.status !== "LOCKED" ? "/user/test-instruction" : null}
            codingpath={round.status !== "LOCKED" ? "/user/test-instruction" : null}

            hrpath={round.status !== "LOCKED" ? "/user/Resume-upload" : null}
            locked={round.status === "LOCKED"} 
            onclick={()=>handleClickContest(round.roundName)}
        />
        
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default HomePage;

