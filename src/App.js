import React ,{useState} from "react";
import "./App.css";
import CodingTest from "./components/CodingTest";
import Piechart from "./components/Piechart";
// import AdminRouter from "./routers/AdminRouter";


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
      <CodingTest/>
      
     {/* <Piechart chartData={chartData}/> */}
    </div>
  )
  // return (
  //   <div className="App">
  //     <AdminRouter />
  //     {/* <Landingpage /> */}
  //   </div>
  // );
}

export default App;
