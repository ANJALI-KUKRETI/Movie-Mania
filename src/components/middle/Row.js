import React from "react";
import Slider from "react-slick";
import uuid from "react-uuid";

import { settings } from "./settings";
import "./Row.css";

import Card from "./Card";

const Row = ({ heading, data, setFav }) => {
  // console.log(data);
  return (
    <div className="row">
      <div className="heading">{heading}</div>

      <div className="wrapper">
        <Slider {...settings}>
          {data.map((mov) => (
            <Card mov={mov} key={uuid()} setFav={setFav} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Row;
