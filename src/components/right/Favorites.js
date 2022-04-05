import React from "react";
import uuid from "react-uuid";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import "./favorites.css";

const Favorites = ({ wishlist, removeWish }) => {
  console.log(wishlist);
  return (
    <div className="favorites">
      <h2>My WishList</h2>
      <div className="favorites-wrapper">
        {wishlist.map((wish) => (
          <div className="fav-card" key={uuid()}>
            <img
              src={`https://image.tmdb.org/t/p/original/${wish.poster_path}`}
              alt="side"
            />
            <div className="details">
              <div>
                <div className="name-side">{wish.title || wish.name}</div>
              </div>
              <div className="ratings">
                <div className="ratings-in">
                  <div className="imdb">IMDb</div>
                  <div className="point">{wish.vote_average}</div>
                </div>
                <div className="delete" onClick={() => removeWish(wish.id)}>
                  <IoIosRemoveCircleOutline />
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
