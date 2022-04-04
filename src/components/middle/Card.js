import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import uuid from "react-uuid";
import "./Row.css";
import { Link } from "react-router-dom";

const Card = ({ mov }) => {
  return (
    <div className="card" key={uuid()}>
      <Link to="/detailPage">
        <img
          src={`https://image.tmdb.org/t/p/original/${mov.poster_path}`}
          alt="demo"
        />
      </Link>
      <div className="card-content">
        <div className="plus">
          <BsPlusLg />
        </div>
        <div className="info">
          <div className="card-name">{mov.title || mov.name}</div>
          <div className="card-rating">
            <AiFillStar
              style={{
                color: "yellow",
                marginRight: "5px",
              }}
            />
            <div>{mov.vote_average}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
