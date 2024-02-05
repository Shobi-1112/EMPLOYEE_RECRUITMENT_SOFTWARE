import React, { useEffect } from "react";
import SideBar from "../containers/AdminSideBar";
import { Outlet,useNavigate } from "react-router-dom";
const Layout = () => {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("home");
  }
  useEffect(()=>{
    if(window.location.pathname.endsWith("/admin")){
      toHome();
    }
    else if(window.location.pathname.endsWith("/admin/")){
      toHome();
    }
  },[])
  return (
    <div className="Layout" style={{display: "flex"}}>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Layout;
