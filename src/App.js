import React, { useState } from "react";
import "./App.css";
import CodingTest from "./components/CodingTest/CodingTest";
import QuestionPage from "./components/QuestionPage/QuestionPage";
import Piechart from "./components/Piechart/Piechart";

function App() {

  const [chartData, setChartData] = useState({
    labels: [
      `logical: \n easy : ${20} \n medium : ${20} \n hard : ${20}`,
      `verbal: \n easy : ${12} \n medium : ${15} \n hard : ${10}`,
      `aptitude: \n easy : ${20} \n medium : ${30} \n hard : ${17}`
    ],
    datasets: [{
      data: [30, 45, 24],
      backgroundColor: [
        'rgb(211, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      cutout:"50%"
    }]
  });

  return(
    <div>
      {/* <CodingTest/> */}
      <QuestionPage />
     {/* <Piechart chartData={chartData}/> */}
    </div>
  )
}

export default App;
