import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./single.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

const Single = (props) => {
  const location = useLocation();

  // useEffect(() => {
  //   console.log("Location from all players", location);
  // }, [location]);

  const [playerData, setPlayerDataById] = useState({});

  // useEffect(() => {
  //   const fetchPlayer = async () => {
  //     const response = await fetch(
  //       `http://192.168.163.128:3003/api/players/${location.state.playerData.Id}`
  //     );
  //     const playerData = await response.json();
  //     setPlayerDataById(playerData);
  //   };
  //   fetchPlayer();
  // },);

  function formatDate(date) {
    const dataFormatada = new Date(date)
      .toISOString()
      .replace(/T/, " ")
      .replace(/\..+/, "");
    return dataFormatada;
  }

  const [access, setAccess] = React.useState(location.state.playerData.Access);

  const handleChange = (event) => {
    setAccess(event.target.value);
  };

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">{location.state.playerData.Name}</h1>
          <div className="item"></div>
        </div>

        <div className="bottom">
          <Box
            component="form"
            width="250px"
            noValidate
            autoComplete="off"
            className="box-form"
          >
            <div>
              <div className="title">Character</div>
              <div className="content">
                <TextField
                  required
                  id="name"
                  label="Name"
                  defaultValue={location.state.playerData.Name}
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Password"
                  defaultValue="********"
                />
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={access}
                  label="Access"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Player</MenuItem>
                  <MenuItem value={2}>Helper</MenuItem>
                  <MenuItem value={3}>Wiki</MenuItem>
                  <MenuItem value={40}>Moderador</MenuItem>
                  <MenuItem value={60}>Administrador</MenuItem>
                </Select>

                <TextField
                  required
                  id="outlined-required"
                  label="Title"
                  defaultValue={location.state.playerData.Title}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="Level"
                  defaultValue={location.state.playerData.Level}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="Exp"
                  defaultValue={location.state.playerData.Exp}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="Gender"
                  defaultValue={location.state.playerData.Gender}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="Gold"
                  type="number"
                  defaultValue={location.state.playerData.Gold}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="Coins"
                  defaultValue={location.state.playerData.Coins}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="Crystals"
                  defaultValue={location.state.playerData.Crystals}
                />
              </div>
            </div>

            <div>
              <div className="title">Misc</div>
              <div className="content">
                <TextField
                  required
                  id="outlined-required"
                  label="HairID"
                  defaultValue={location.state.playerData.HairID}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="ColorHair"
                  defaultValue={location.state.playerData.ColorHair}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="ColorSkin"
                  defaultValue={location.state.playerData.ColorSkin}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="ColorEye"
                  defaultValue={location.state.playerData.ColorEye}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="ColorBase"
                  defaultValue={location.state.playerData.ColorBase}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="ColorTrim"
                  defaultValue={location.state.playerData.ColorTrim}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="ColorAccessory"
                  defaultValue={location.state.playerData.ColorAccessory}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="NameColor"
                  defaultValue={location.state.playerData.NameColor}
                />
              </div>
            </div>

            <div>
              <div className="title">Ranking</div>
              <div className="content">
                <TextField
                  required
                  id="outlined-required"
                  label="KillCount"
                  defaultValue={location.state.playerData.KillCount}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="DeathCount"
                  defaultValue={location.state.playerData.DeathCount}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="Score"
                  defaultValue={location.state.playerData.Score}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="ArenaPoints"
                  defaultValue={location.state.playerData.ArenaPoints}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="PvPRank"
                  defaultValue={location.state.playerData.PvPRank}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="PopularRank"
                  defaultValue={location.state.playerData.PopularRank}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="PRank"
                  defaultValue={location.state.playerData.PRank}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="ARank"
                  defaultValue={location.state.playerData.ARank}
                />
              </div>
            </div>

            <div>
              <div className="title">Timers</div>
              <div className="content">
                <TextField
                  required
                  id="outlined-required"
                  label="CpBoostExpire"
                  type="datetime-local"
                  defaultValue={formatDate(
                    location.state.playerData.CpBoostExpire
                  )}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="RepBoostExpire"
                  type="datetime-local"
                  defaultValue={formatDate(
                    location.state.playerData.RepBoostExpire
                  )}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="GoldBoostExpire"
                  type="datetime-local"
                  defaultValue={formatDate(
                    location.state.playerData.GoldBoostExpire
                  )}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="ExpBoostExpire"
                  type="datetime-local"
                  defaultValue={formatDate(
                    location.state.playerData.ExpBoostExpire
                  )}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="UpgradeExpire"
                  type="datetime-local"
                  defaultValue={formatDate(
                    location.state.playerData.UpgradeExpire
                  )}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="UpgradeDays"
                  type="number"
                  defaultValue={location.state.playerData.UpgradeDays}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="UpgradeDays"
                  type="number"
                  defaultValue={location.state.playerData.UpgradeDays}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="BanTime"
                  type="datetime-local"
                  defaultValue={formatDate(location.state.playerData.BanTime)}
                />
              </div>
            </div>
          </Box>
          <div className="editButton">Salvar</div>
        </div>
      </div>
    </div>
  );
};

export default Single;
