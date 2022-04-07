import React, { useState, useEffect, useCallback } from "react";

import Favorites from "./Favorites";

import "./Right.css";
import InputArea from "./InputAres";

const Right = ({ wishlist, removeWish, type }) => {
  // useEffect(() => {
  //   fetchSearch();
  // }, [searchText]);
  console.log(type);

  return (
    <div className="right">
      <InputArea />
      <Favorites wishlist={wishlist} removeWish={removeWish} type={type} />
    </div>
  );
};

export default Right;
