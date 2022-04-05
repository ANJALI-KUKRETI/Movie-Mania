import React from "react";
import Banner from "../components/middle/Banner";
import Row from "../components/middle/Row";

const HomePage = ({ top, trending, banner, setFav }) => {
  return (
    <div>
      <Banner banner={banner} setFav={setFav}/>
      <Row heading={"Trending Now"} data={trending} setFav={setFav} />
      <Row heading={"Top Rated"} data={top} setFav={setFav} />
    </div>
  );
};

export default HomePage;
