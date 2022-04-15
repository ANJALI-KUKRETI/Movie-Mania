import React from "react";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import "./favorites.css";

const Favorites = ({ wishlist, removeWish, type }) => {
  return (
    <div className="favorites">
      <div className="head">
        <h2>My WatchList</h2>
        <div className="iconH">
          <BsFillHeartFill />
          <div className="num">{wishlist.length}</div>
        </div>
      </div>
      <div className="favorites-wrapper">
        {wishlist.map((wish) => (
          <div className="fav-card" key={uuid()}>
            <Link to={`/detailPage/${wish.mov.id}/${wish.type}`}>
              {wish.mov.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original/${wish.mov.poster_path}`}
                  alt="side"
                />
              ) : (
                <img
                  src=" https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
                  alt="test"
                />
              )}
            </Link>
            <div className="details">
              <div>
                <div className="name-side">
                  {wish.mov.title || wish.mov.name}
                </div>
              </div>
              <div className="ratings">
                <div className="ratings-in">
                  <div className="imdb">IMDb</div>
                  <div className="point">{wish.mov.vote_average}</div>
                </div>
                <div className="delete" onClick={() => removeWish(wish.mov.id)}>
                  <IoIosRemoveCircleOutline style={{ color: "white" }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
