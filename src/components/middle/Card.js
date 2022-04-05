import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import "./Row.css";
import { Link } from "react-router-dom";

const Card = ({ mov, setFav }) => {
  function setAsFavorite() {
    // console.log(mov.id);
    setFav(mov);
  }
  return (
    <div className="card">
      <Link to={`/detailPage/${mov.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${mov.poster_path}`}
          alt="demo"
        />
      </Link>
      <div className="card-content">
        <div className="plus" onClick={setAsFavorite}>
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
