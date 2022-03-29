import React from "react";
import { FaPlay } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import "./Middle.css";

const Middle = () => {
  return (
    <div className="middle">
      <div className="header">
        <div>TV Series</div>
        <div>Movies</div>
      </div>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/t7I942V5U1Ggn6OevN75u3sNYH9.jpg")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="content">
          <div className="name">DEADPOOL</div>
          <div className="inner-content">
            <div className="release">2016</div>
            <div className="rating">Rating: 8</div>
          </div>
          <div className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
            sed incidunt dolores ea ex odit, aliquid nemo cumque tempora numquam
          </div>
          <div className="btns">
            <button className="watch">
              <FaPlay /> <span> PLAY</span>
            </button>
            <button className="add">
              <BsPlusLg /> <span> MY LIST</span>
            </button>
          </div>
        </div>
        {/* <div className="fadeBottom"></div> */}
      </div>
    </div>
  );
};

export default Middle;
