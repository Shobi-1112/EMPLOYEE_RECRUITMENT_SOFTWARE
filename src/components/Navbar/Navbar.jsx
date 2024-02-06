import React, { useState } from "react";
import "./Navbar.scss"; 
import logo from "/home/divum/hiring_platform/hiring-platform-frontend/src/assets/Divum LOGO 2022.svg";
import { BsPersonCircle } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";


const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleResetPassword=()=>{
    // window.location.href="/count-down"
  }

  return (
    <div className="navbar">
      <div className="navcontent">
        <div>
          <img className="logoimg" src={logo} alt="/" />
        </div>
        <div className="Heading">DIVUM HIRING PLATFORM</div>
        <div className="profile">
          <BsPersonCircle className="icon" />
          <div className="usercontent">
            <div className={`dropdown ${isDropdownOpen ? "open" : ""}`} onClick={toggleDropdown}>
              <p className="dropdown__text">Username</p>
              {isDropdownOpen && (
              <div className="dropdown-content">
              <div className="dropdown-item">username@gmail.com</div>
              <div className="dropdown-item" onClick={handleResetPassword}>Reset Password</div>
              <div className="dropdown-item" >
                 <FiLogOut className="logouticon"/> Log Out
             </div>
           </div>
            )}<RiArrowDropDownLine className="dropicon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
