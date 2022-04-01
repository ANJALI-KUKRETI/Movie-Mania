import React from "react";
import "./favorites.css";

const Favorites = () => {
  return (
    <div className="favorites">
      <h2>My WishList</h2>
      <div className="favorites-wrapper">
        <div className="fav-card">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
            alt="side"
          />
          <div className="details">
            <div>
              <div className="name-side">Mad Max</div>
              <div className="genre">Action, Horror</div>
            </div>
            <div className="ratings">
              <div className="imdb">IMDb</div>
              <div className="poimt">7.4</div>
            </div>
          </div>
        </div>
        <div className="fav-card">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
            alt="side"
          />
          <div className="details">
            <div>
              <div className="name-side">Mad Max</div>
              <div className="genre">Action, Horror</div>
            </div>
            <div className="ratings">
              <div className="imdb">IMDb</div>
              <div className="poimt">7.4</div>
            </div>
          </div>
        </div>
        <div className="fav-card">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
            alt="side"
          />
          <div className="details">
            <div>
              <div className="name-side">Mad Max</div>
              <div className="genre">Action, Horror</div>
            </div>
            <div className="ratings">
              <div className="imdb">IMDb</div>
              <div className="poimt">7.4</div>
            </div>
          </div>
        </div>
        <div className="fav-card">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
            alt="side"
          />
          <div className="details">
            <div>
              <div className="name-side">Mad Max</div>
              <div className="genre">Action, Horror</div>
            </div>
            <div className="ratings">
              <div className="imdb">IMDb</div>
              <div className="poimt">7.4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
