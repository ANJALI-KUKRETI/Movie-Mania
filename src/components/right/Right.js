import React, { useState, useEffect, useCallback } from "react";

import Favorites from "./Favorites";

import "./Right.css";
import InputArea from "./InputAres";

const Right = ({ wishlist, removeWish }) => {
  // useEffect(() => {
  //   fetchSearch();
  // }, [searchText]);

  return (
    <div className="right">
      <InputArea />
      <Favorites wishlist={wishlist} removeWish={removeWish} />
    </div>
  );
};

export default Right;
