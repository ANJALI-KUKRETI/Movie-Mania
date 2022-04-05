import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "../components/middle/Banner";
import Row from "../components/middle/Row";
import "../components/middle/Middle.css";

const HomePage = ({ top, trending, banner, setFav }) => {
  return (
    <div style={{ padding: "2.3rem 1.5rem" }}>
      <div className="header">
        <div>
          <NavLink
            to="/"
            className={(navdata) => (navdata.isActive ? "active" : "link")}
          >
            Movies
          </NavLink>
        </div>

        <div>
          <NavLink
            to="/tv"
            className={(navdata) => (navdata.isActive ? "active" : "link")}
          >
            TV Series
          </NavLink>
        </div>
      </div>
      <Banner banner={banner} setFav={setFav} />
      <Row heading={"Trending Now"} data={trending} setFav={setFav} />
      <Row heading={"Top Rated"} data={top} setFav={setFav} />
    </div>
  );
};

export default HomePage;
