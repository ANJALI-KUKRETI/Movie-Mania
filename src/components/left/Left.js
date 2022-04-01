import React from "react";
import uuid from "react-uuid";
import { NavLink } from "react-router-dom";
import { RiMovie2Fill } from "react-icons/ri";
import "./Left.css";
import "../middle/Middle.css";

const Left = () => {
  const catArr = [
    "action",
    "comedy",
    "romance",
    "Drama",
    "horror",
    "family",
    "thriller",
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
        <h3>MENU</h3>
        <div>
          <NavLink
            to="/"
            className={(navdata) => (navdata.isActive ? "activeL" : "link")}
            z
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/:category"
            className={(navdata) => (navdata.isActive ? "activeL" : "link")}
            z
          >
            Top Rated
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/:category"
            className={(navdata) => (navdata.isActive ? "activeL" : "link")}
            z
          >
            Popular
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/:category"
            className={(navdata) => (navdata.isActive ? "activeL" : "link")}
            z
          >
            Upcoming
          </NavLink>
        </div>
      </div>
      <div className="categories">
        <h3>CATEGORIES</h3>
        {catArr.map((cat) => (
          <div key={uuid()}>
            <NavLink
              to="/:category"
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
