import React, { useState } from "react";
import uuid from "react-uuid";
import { NavLink } from "react-router-dom";
import { RiMovie2Fill } from "react-icons/ri";
import { BsFillHeartFill } from "react-icons/bs";
import InputArea from "../right/InputAres";
import "./Left.css";
import "../middle/Middle.css";
import Favorites from "../right/Favorites";

const Left = ({ getSearch, wishlist, removeWish, type }) => {
  const [showWishList, setShowWishList] = useState(false);
  const catArr = [
    "Action",
    "Comedy",
    "Drama",
    "Family",
    "War",
    "Documentary",
    "Crime",
    "Mystery",
    "Animation",
    "Western",
  ];
  const showWishHandler = () => {
    setShowWishList(!showWishList);
  };
  return (
    <div className="left">
      <div className="logo">
        <span className="icon">
          <RiMovie2Fill />
        </span>
        Movie Mania
      </div>
      {/* ================Responsive SearchBar and wishlist icon================= */}
      <div className="resp">
        <div className="searchBar searchBarR">
          <InputArea getSearch={getSearch} />
        </div>
        <div className="iconH iconR" onClick={showWishHandler}>
          <BsFillHeartFill />
          <div className="num">{wishlist.length}</div>
        </div>
        <div className="menu">
          <div>
            <NavLink
              to="/"
              className={(navdata) => (navdata.isActive ? "activeL" : "link")}
            >
              Home
            </NavLink>
          </div>
          {catArr.map((cat) => (
            <div key={uuid()}>
              <NavLink
                to={`/${cat}/movie`}
                className={(navdata) => (navdata.isActive ? "activeL" : "link")}
              >
                {cat}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      {showWishList && (
        <div className="favR">
          <Favorites wishlist={wishlist} removeWish={removeWish} type={type} />
        </div>
      )}
    </div>
  );
};

export default Left;
