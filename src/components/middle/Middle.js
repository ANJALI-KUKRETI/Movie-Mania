import React from "react";

import "./Middle.css";
import Banner from "./Banner";
import Row from "./Row";

const Middle = () => {
  return (
    <div className="middle">
      <div className="header">
        <div>TV Series</div>
        <div>Movies</div>
      </div>
      <Banner />
      <Row />
      <Row />
    </div>
  );
};

export default Middle;
