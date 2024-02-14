import React, { useState } from "react";
import { FiEyeOff, FiEye, FiMail, FiKey } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./LoginPage.scss";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordVisible: false,
    passwordError: "",
    emailError: "",
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const togglePassword = () => {
    setFormData({ ...formData, passwordVisible: !formData.passwordVisible });
  };

  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(formData.email);
  };

  const handleForgotPassword = () => {
    window.location.href = "/forgot-password";
  };

  const handleLogin = () => {
    if (isEmailValid()) {
      console.log("Email:", formData.email);

      const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
      if (passwordRegex.test(formData.password)) {
        console.log(
          "Password:",
          formData.passwordVisible ? formData.password : "Hidden"
        );
        setFormData({ ...formData, passwordError: "" });
      } else {
        setFormData({
          ...formData,
          passwordError:
            "Password must contain at least one special character and one numeric character, and be at least 8 characters long",
        });
        
      }
    } else {
      setFormData({ ...formData });
      toast.error("Please enter a valid email address", {
        closeButton: true 
      });
    }
  };

  return (
    <div className="LoginPage">
      <ToastContainer className="toast-message" closeButton={false}/> 
      <div>
        <img
          className="image"
          src="https://images.pexels.com/photos/4467739/pexels-photo-4467739.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      </div>
      <div className="login-container">
        <h2>LOGIN</h2>
        <form>
          <label htmlFor="email">Email id:</label>
          <div className="inputBTN">
            <FiMail className="Icon" />
            <input
              placeholder="Email id"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          {formData.emailError && <div className="email-error">{formData.emailError}</div>}
          <label htmlFor="password">Password:</label>
          <div className="input-group">
            <div className="inputBTN">
              <FiKey className="Icon" />
              <input
                type={formData.passwordVisible ? "text" : "password"}
                onChange={handleInputChange}
                value={formData.password}
                name="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="hidebutton" onClick={togglePassword}>
              {formData.passwordVisible ? (
                <FiEye />
              ) : (
                <FiEyeOff />
              )}
            </div>
            {formData.passwordError && <div className="password-error">{formData.passwordError}</div>}
            <div className="forgot-password" onClick={handleForgotPassword}>
              <p>Forgot Password?</p>
            </div>
          </div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
