<<<<<<< HEAD
import React from "react";
import Switching from "./Components/Switching/Switching";
// import NotificationSlideBar from "./Components/navbar/NotificationSlideBar";
// import FirstPage from "./Components/navbar/FirstPage";
// import SecondPage from "./Components/navbar/SecondPage";
// import Navbar from "/home/divum/Desktop/hiring platform/hiring-platform-frontend/src/Components/navbar/Navbar.jsx";
// import Sidebar from "./Components/navbar/Sidebar";
// import Buttons from "/home/divum/Desktop/hiring platform/hiring-platform-frontend/src/Components/navbar/Buttons.jsx";
// import Resetpassword from "/home/divum/Desktop/hiring platform/hiring-platform-frontend/src/Components/navbar/Resetpassword.jsx";
// import Forgetpassword from "./Components/navbar/Forgetpassword";
import AdminRouter from "./routers/AdminRouter";
// import Landingpage from "./pages/LandingPage";
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Sidebar/> */}
      {/* <Buttons/> */}
      {/* <Resetpassword/> */}
      {/* <Forgetpassword/> */}
      <Switching />
      {/* <NotificationSlideBar/> */}
      {/* <NotificationBar/> */}
      {/* <FirstPage/> */}
      {/* <SecondPage/> */}
      <AdminRouter />
      {/* <Landingpage /> */}
=======
import React ,{useState} from "react";
import "./App.css";
// import CodingTest from "./components/CodingTest";
// import Piechart from "./components/Piechart";
// import AdminRouter from "./routers/AdminRouter";
import Bulkdata from "./components/Bulkdata";

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
      <Bulkdata/>
      
     {/* <Piechart chartData={chartData}/> */}
>>>>>>> frontend
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
