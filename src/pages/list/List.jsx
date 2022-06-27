import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/table/Table";
import "./list.scss";

const List = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://192.168.163.128:3003/api/players");
      const content = await response.json();
      setPlayers(content);
    })();
  });

  return (
    <div className="home">
      <Sidebar />

      <div className="homeContainer">
        <Navbar />

        <div className="listContainer">
          <div className="listTitle">Players</div>
          <Table dados={players} />
        </div>
      </div>
    </div>
  );
};

export default List;
