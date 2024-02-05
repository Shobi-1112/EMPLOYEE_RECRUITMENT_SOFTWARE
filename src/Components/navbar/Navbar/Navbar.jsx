import React, { useState } from "react";
import logo from "/home/divum/Desktop/hiring platform/hiring-platform-frontend/src/assets/Divum LOGO 2022.svg";
import { BsPersonCircle } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import "./Navbar.scss";


const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navcontent">
        <img className="logoimg" src={logo} alt="/" />
        <div className="Heading"> Divum Hiring Platform</div>
        <div className="profile">
          <BsPersonCircle className="icon" />
          <div className="usercontent">
            <div className={`dropdown ${isDropdownOpen ? "open" : ""}`} onClick={toggleDropdown}>
              <p className="dropdown__text">Username</p>

              {isDropdownOpen && (
                <div className="dropdown-content">
                  username@gmail.com
                  
                  <a href="/" className="logout"> <FiLogOut className="logouticon"/>Log Out</a>
                </div>
              )}

              <RiArrowDropDownLine className="dropicon" />
            </div>
          </div>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
