import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./single.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Single = (props) => {
  
  const location = useLocation();

  useEffect(()=>{
    console.log("Location from all players", location)
  },[location])

  return <div className="single">
    <Sidebar />
    <div className="singleContainer">
      <Navbar />
      <div className="top">
        <h1 className="title">{location.state.playerData.NAME}</h1>
        <div className="item"></div>
      </div>
      <div className="bottom"></div>
      single
    </div>
  </div>;
};

export default Single;
