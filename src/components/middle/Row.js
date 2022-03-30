import React from "react";
import Slider from "react-slick";
import { BsPlusLg } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { settings } from "./settings";
import "./Row.css";

const Row = () => {
  return (
    <div className="row">
      <div className="heading">Trending Now</div>

      <div className="wrapper">
        <Slider {...settings}>
          <div className="card">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
              alt="demo"
            />
            <div className="card-content">
              <div className="plus">
                <BsPlusLg />
              </div>
              <div className="info">
                <div className="card-name">Lucifer</div>
                <div className="card-rating">
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
              alt="demo"
            />
            <div className="card-content">
              <div className="plus">
                <BsPlusLg />
              </div>
              <div className="info">
                <div className="card-name">Lucifer</div>
                <div className="card-rating">
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
              alt="demo"
            />
            <div className="card-content">
              <div className="plus">
                <BsPlusLg />
              </div>
              <div className="info">
                <div className="card-name">Lucifer</div>
                <div className="card-rating">
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
              alt="demo"
            />
            <div className="card-content">
              <div className="plus">
                <BsPlusLg />
              </div>
              <div className="info">
                <div className="card-name">Lucifer</div>
                <div className="card-rating">
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
              alt="demo"
            />
            <div className="card-content">
              <div className="plus">
                <BsPlusLg />
              </div>
              <div className="info">
                <div className="card-name">Lucifer</div>
                <div className="card-rating">
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                  <AiFillStar style={{ color: "yellow" }} />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Row;
