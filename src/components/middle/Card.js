import React, { useState, useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import "./Row.css";
import { Link, useParams } from "react-router-dom";

const Card = ({ mov, setFav, type }) => {
  // const [type, setType] = useState("movie");
  function setAsFavorite() {
    // setFav(mov);
    setFav({
      mov,
      type,
    });
  }

  // useEffect(() => {
  //   if (window.location.pathname.split("/").includes("tv")) {
  //     setType("tv");
  //     console.log(type);
  //   }
  // }, [type]);

  return (
    <div className="card">
      <Link to={`/detailPage/${mov.id}/${type}`}>
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
