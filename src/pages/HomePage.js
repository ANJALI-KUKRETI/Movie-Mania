import React from "react";
import Banner from "../components/middle/Banner";
import Row from "../components/middle/Row";

const HomePage = ({ top, trending, banner }) => {
  return (
    <div>
      <Banner banner={banner} />
      <Row heading={"Trending Now"} data={trending} />
      <Row heading={"Top Rated"} data={top} />
    </div>
  );
};

export default HomePage;
