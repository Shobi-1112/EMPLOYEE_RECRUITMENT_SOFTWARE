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
    </div>
  );
}
export default App;
