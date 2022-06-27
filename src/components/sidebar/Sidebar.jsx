import React from "react";

import "./sidebar.scss";
import GroupIcon from "@mui/icons-material/Group";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import MapIcon from "@mui/icons-material/Map";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span className="logo">admin panel</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Players</p>
          <Link to={"/players"} style={{ textDecoration: "none" }}>
            <li>
              <GroupIcon className="icon" />

              <span>Players</span>
            </li>
          </Link>

          <p className="title">Monsters</p>
          <li>
            <SmartToyIcon className="icon" />
            <span>Monsters</span>
          </li>

          <p className="title">Maps</p>
          <li>
            <MapIcon className="icon" />
            <span>Maps</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
