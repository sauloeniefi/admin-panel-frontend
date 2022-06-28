import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./single.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Single = (props) => {
  const location = useLocation();

  // useEffect(() => {
  //   console.log("Location from all players", location);
  // }, [location]);

  const [playerDataById, setPlayerDataById] = useState({});


  useEffect(() => {
    const fetchPlayer = async () => {
      const response = await fetch(
        `http://192.168.163.128:3003/api/players/${location.state.playerData.Id}`
      );
      const playerData = await response.json();
      setPlayerDataById(playerData);
    };
    fetchPlayer();
  },);


  function test() {
    document.getElementById('name').defaultValue=playerDataById.Name;
  }

 

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">{playerDataById.Name}</h1>
          <div className="item"></div>
        </div>

        <div className="bottom">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="name"
                label="Name"
                defaultValue={playerDataById.Name}
              />
              <TextField
                disabled
                id="outlined-disabled"
                label="Password"
                defaultValue="********"
              />
              <TextField
                required
                id="outlined-required"
                label="Access"
                defaultValue={playerDataById.Access}
              />

              <TextField
                required
                id="outlined-required"
                label="Title"
                defaultValue={playerDataById.Title}
              />

              <TextField
                required
                id="outlined-required"
                label="Level"
                defaultValue={playerDataById.Level}
              />

              <TextField
                required
                id="outlined-required"
                label="Exp"
                defaultValue={location.state.playerData.NAME}
              />

              <TextField
                required
                id="outlined-required"
                label="Gender"
                defaultValue={location.state.playerData.NAME}
              />

              <TextField
                required
                id="outlined-required"
                label="Gold"
                defaultValue={location.state.playerData.NAME}
              />

              <TextField
                required
                id="outlined-required"
                label="Coins"
                defaultValue={location.state.playerData.NAME}
              />

              <TextField
                required
                id="outlined-required"
                label="Crystals"
                defaultValue={location.state.playerData.NAME}
              />
            </div>

            <div>
              <TextField
                required
                id="outlined-required"
                label="HairID"
                defaultValue={location.state.playerData.NAME}
              />

              <TextField
                required
                id="outlined-required"
                label="ColorHair"
                defaultValue={location.state.playerData.NAME}
              />

              <TextField
                required
                id="outlined-required"
                label="ColorSkin"
                defaultValue={location.state.playerData.NAME}
              />

              <TextField
                required
                id="outlined-required"
                label="ColorEye"
                defaultValue={location.state.playerData.NAME}
              />

              <TextField
                required
                id="outlined-required"
                label="ColorBase"
                defaultValue={location.state.playerData.NAME}
              />

              <TextField
                required
                id="outlined-required"
                label="ColorTrim"
                defaultValue={location.state.playerData.NAME}
              />

              <TextField
                required
                id="outlined-required"
                label="ColorAccessory"
                defaultValue={location.state.playerData.NAME}
              />

              <TextField
                required
                id="outlined-required"
                label="NameColor"
                defaultValue={location.state.playerData.NAME}
              />
            </div>
            <div>
              <TextField
                required
                id="outlined-required"
                label="CpBoostExpire"
                defaultValue={location.state.playerData.NAME}
              />
              <TextField
                required
                id="outlined-required"
                label="RepBoostExpire"
                defaultValue={location.state.playerData.NAME}
              />
              <TextField
                required
                id="outlined-required"
                label="GoldBoostExpire"
                defaultValue={location.state.playerData.NAME}
              />
              <TextField
                required
                id="outlined-required"
                label="ExpBoostExpire"
                defaultValue={location.state.playerData.NAME}
              />
              <TextField
                required
                id="outlined-required"
                label="UpgradeExpire"
                defaultValue={location.state.playerData.NAME}
              />
              <TextField
                required
                id="outlined-required"
                label="UpgradeDays"
                defaultValue={location.state.playerData.NAME}
              />

              <TextField
                required
                id="outlined-required"
                label="Upgraded"
                defaultValue={location.state.playerData.NAME}
              />
            </div>

            <div>
              <TextField
                required
                id="outlined-required"
                label="KillCount"
                defaultValue={location.state.playerData.NAME}
              />
              <TextField
                required
                id="outlined-required"
                label="DeathCount"
                defaultValue={location.state.playerData.NAME}
              />

              <TextField
                required
                id="outlined-required"
                label="Score"
                defaultValue={location.state.playerData.NAME}
              />

              <TextField
                required
                id="outlined-required"
                label="ArenaPoints"
                defaultValue={location.state.playerData.NAME}
              />
              <TextField
                required
                id="outlined-required"
                label="PvPRank"
                defaultValue={location.state.playerData.NAME}
              />
              <TextField
                required
                id="outlined-required"
                label="PopularRank"
                defaultValue={location.state.playerData.NAME}
              />
              <TextField
                required
                id="outlined-required"
                label="PRank"
                defaultValue={location.state.playerData.NAME}
              />
              <TextField
                required
                id="outlined-required"
                label="ARank"
                defaultValue={location.state.playerData.NAME}
              />
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Single;
