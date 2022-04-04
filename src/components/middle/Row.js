import React from "react";
import Slider from "react-slick";

import { settings } from "./settings";
import "./Row.css";

import Card from "./Card";

const Row = ({ heading, data }) => {
  // console.log(data);
  return (
    <div className="row">
      <div className="heading">{heading}</div>

      <div className="wrapper">
        <Slider {...settings}>
          {data.map((mov) => (
            <Card mov={mov} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Row;
