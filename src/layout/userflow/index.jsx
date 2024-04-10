import React, { useEffect } from "react";

import Navbar from "../../components/NavBar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";


const UserLayout = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const checkPath = () => {
      if (window.location.pathname.endsWith("/user")) {
        navigate("home");
      } else if (window.location.pathname.endsWith("/user/")) {
        navigate("home");
      }
    };

    checkPath();
  }, [navigate]);

  return (
    <div className="Layout">
      <Navbar />
      <div className="Outlet">
        <Outlet />
      </div>
    </div>

  );

};



export default UserLayout;