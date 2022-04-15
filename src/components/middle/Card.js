import React, { useState, useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import "./Row.css";
import { Link } from "react-router-dom";

const Card = ({ mov, setFav, type, wishlist }) => {
  const [red, setRed] = useState(false);
  // console.log(mov);
  useEffect(() => {
    // if (!wishlist) return;
    if (wishlist.find((wish) => wish.mov.id === mov.id)) {
      setRed(true);
    } else {
      setRed(false);
    }
  }, [wishlist, mov.id]);
  function setAsFavorite() {
    setFav({
      mov,
      type,
    });
  }

  return (
    <div className="card">
      <Link to={`/detailPage/${mov.id}/${type}`}>
        {mov.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${mov.poster_path}`}
            alt="demo"
          />
        ) : (
          <img
            src=" https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
            alt="notFound"
          />
        )}
      </Link>
      <div className="card-content">
        <div className={red ? "newPlus" : "plus"} onClick={setAsFavorite}>
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
