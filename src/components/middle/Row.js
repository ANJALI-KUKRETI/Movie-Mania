import React from "react";
import Slider from "react-slick";
import { BsPlusLg } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { settings } from "./settings";
import "./Row.css";

const Row = ({ heading, data }) => {
  console.log(data);
  return (
    <div className="row">
      <div className="heading">{heading}</div>

      <div className="wrapper">
        <Slider {...settings}>
          {data.map((mov) => (
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/original/${mov.poster_path}`}
                alt="demo"
              />
              <div className="card-content">
                <div className="plus">
                  <BsPlusLg />
                </div>
                <div className="info">
                  <div className="card-name">{mov.title || mov.name}</div>
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
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Row;
