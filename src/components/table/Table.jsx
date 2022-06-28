import React from "react";
import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Paper from "@mui/material/Paper";

import "./table.scss";

const TableC = (props) => {
  function checkCargo(cargo) {
    switch (cargo) {
      case 0:
        return "Banido";
      case 1:
        return "Player";
      case 2:
        return "Helper";
      case 3:
        return "Wiki";
      case 40:
        return "Moderador";
      case 60:
        return "Administrador";
      default:
        return "Player";
    }
  }

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell" align="right">
              Username
            </TableCell>
            <TableCell className="tableCell" align="right">
              Password
            </TableCell>
            <TableCell className="tableCell" align="right">
              Level
            </TableCell>
            <TableCell className="tableCell" align="right">
              Gold
            </TableCell>
            <TableCell className="tableCell" align="right">
              AWCoins
            </TableCell>
            <TableCell className="tableCell" align="right">
              Cargo
            </TableCell>
            <TableCell className="tableCell" align="right">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.dados.map((player, index) => (
            <TableRow key={player.id} className="tableRow">
              <TableCell component="th" scope="row">
                {player.id}
              </TableCell>
              <TableCell className="tableCell" component="th" align="right">
                {player.Name}
              </TableCell>
              <TableCell className="tableCell" align="right">
                ********
              </TableCell>
              <TableCell className="tableCell" align="right">
                {player.Level}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {player.Gold}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {player.Coins}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {checkCargo(player.Access)}
              </TableCell>

              <TableCell className="tableCell" align="right">
                <Link to={`/players/${player.id}`} state={{from:'all players', playerData:player}}>Edit</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableC;
