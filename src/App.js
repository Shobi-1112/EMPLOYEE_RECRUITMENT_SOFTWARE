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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.jsx";
import LoginPage from "./components/Loginpage/LoginPage.jsx";
import Resetpassword from "./components/ResetPassword/ResetPassword.jsx";
import QuestionSet from "./components/Questionset/QuestionSet.jsx";
import QuestionBar from "./components/Questionbar/QuestionBar.jsx";
// import CountDown from "./components/Countdown/CountDown.jsx"
import AdminRouter from "./routers/AdminRouter";
// import Landingpage from "./pages/LandingPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<Resetpassword />} />
          <Route path="/question-set" element={<QuestionSet />} />
          <Route path="/question-bar" element={<QuestionBar />} />
          {/* <Route path="/count-down" element={<CountDown />} /> */}
        </Routes>
        <AdminRouter />
        {/* <Landingpage /> */}
      </div>
    </Router>
  );
}

export default App;
