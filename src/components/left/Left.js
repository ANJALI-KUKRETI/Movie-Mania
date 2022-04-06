import React from "react";
import uuid from "react-uuid";
import { NavLink } from "react-router-dom";
import { RiMovie2Fill } from "react-icons/ri";
import "./Left.css";
import "../middle/Middle.css";

const Left = () => {
  const catArr = [
    "Action",
    "Comedy",
    "Romance",
    "Drama",
    "Horror",
    "Family",
    "Thriller",
    "Documentary",
    "Crime",
    "Fantasy",
  ];
  return (
    <div className="left">
      <div className="logo">
        <span className="icon">
          <RiMovie2Fill />
        </span>
        Movie Mania
      </div>
      <div className="menu">
        <NavLink
          to="/"
          className={(navdata) => (navdata.isActive ? "activeL" : "link")}
        >
          Home
        </NavLink>
        {catArr.map((cat) => (
          <div key={uuid()}>
            <NavLink
              to={`/${cat}`}
              className={(navdata) => (navdata.isActive ? "activeL" : "link")}
            >
              {cat}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Left;
