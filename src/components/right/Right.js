import React from "react";
import Favorites from "./Favorites";
import "./Right.css";

const Right = () => {
  return (
    <div className="right">
      <div className="searchBar">
        <input type="text" className="seacrh" placeholder="Search" />
      </div>
      <Favorites />
    </div>
  );
};

export default Right;
