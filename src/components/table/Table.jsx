import React from "react";

import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
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
          </TableRow>
        </TableHead>
        <TableBody>
          {props.dados.map((player, index) => (
            <TableRow key={player.ID} className='tableRow'>
              <TableCell component="th" scope="row">
                {player.ID}
              </TableCell>
              <TableCell className="tableCell" component="th">
                {player.NAME}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {player.PASSWORD}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {player.LEVEL}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {player.GOLD}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {player.COINS}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {checkCargo(player.ACCESS)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableC;
