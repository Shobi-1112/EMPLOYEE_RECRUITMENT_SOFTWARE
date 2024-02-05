import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.jsx";
import LoginPage from "./components/Loginpage/LoginPage.jsx";
import Resetpassword from "./components/ResetPassword/ResetPassword.jsx";
import QuestionSet from "./components/Questionset/QuestionSet.jsx";
import QuestionBar from "./components/Questionbar/QuestionBar.jsx";
// import CountDown from "./components/Countdown/CountDown.jsx"
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
      </div>
    </Router>
  );
}

export default App;
