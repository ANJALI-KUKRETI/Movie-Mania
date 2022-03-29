import React from "react";
import { RiMovie2Fill } from "react-icons/ri";
import "./Left.css";

const Left = () => {
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
        <div>Home</div>
        <div>Top Rated</div>
        <div>Popular</div>
        <div>Upcoming</div>
      </div>
      <div className="categories">
        <h3>CATEGORIES</h3>
        <div>Action</div>
        <div>Comedy</div>
        <div>Romance</div>
        <div>Drama</div>
        <div>Horror</div>
        <div>Family</div>
        <div>Thriller</div>
      </div>
    </div>
  );
};

export default Left;
