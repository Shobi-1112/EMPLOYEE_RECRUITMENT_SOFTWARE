import React, { useState } from "react";
import "./sidebar.scss";
import assets from "../../assets/index";
import Button from "../../components/Button";
import { SideBarNavigation } from "../../helpers/sidebarList";
import { MdAccountCircle } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoPower } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function SideBar() {
  const [accountAction, setAccountAction] = useState(false);

  const handleAccountClick = () => {
    setAccountAction(!accountAction);
  };

  const adminAccessAction = () => {
    alert("button is been pressed !");
    setAccountAction(!accountAction);
  };

  return (
    <div className="SideBar">
      <div className="sideBarNavigationSection">
        <img src={assets.Logo} alt="Divum" />

        <div className="SideBarNavigationIconSection">
          {SideBarNavigation.map(({ image, text,path }, NaviIndex) => {
            return (
              <NavLink to={path} className="navigationButton" key={NaviIndex}>
                {image}
                <Button text={text} className="NavLinksIcons" />
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="AccountInfo" onClick={handleAccountClick}>
        {accountAction && (
          <div className="AccountActionSection">
            <Button
              text="admin@gmail.com"
              icon={<MdAccountCircle />}
              className="adminAccountAction"
              onClick={() => {
                adminAccessAction();
              }}
            />

            <Button
              text="Change Password"
              className="adminAccountAction"
              onClick={() => {
                adminAccessAction();
              }}
            />
            <Button
              text="Logout"
              icon={<IoPower />}
              className="adminAccountAction"
              onClick={() => {
                adminAccessAction();
              }}
            />
          </div>
        )}
        <MdAccountCircle />
        <Button text={"Admin Access"} className="accountTitle" />
        {accountAction ? (
          <FaChevronUp className="fs-14" />
        ) : (
          <FaChevronDown className="AccountActionBTN" />
        )}
      </div>
    </div>
  );
}

export default SideBar;
