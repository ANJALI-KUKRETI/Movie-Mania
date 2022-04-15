import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "../components/middle/Banner";
import Row from "../components/middle/Row";
import "../components/middle/Middle.css";
import Spinner from "../components/Spinner/Spinner";
import "../components/middle/Middle.css";
import "../components/middle/Row.css";

const HomePage = ({
  top,
  trending,
  banner,
  setFav,
  type,
  loading,
  wishlist,
}) => {
  return (
    <div className="homepage">
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
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Banner banner={banner} setFav={setFav} />
          <Row
            heading={"Trending Now"}
            data={trending}
            setFav={setFav}
            type={type}
            wishlist={wishlist}
          />
          <Row
            heading={"Top Rated"}
            data={top}
            setFav={setFav}
            type={type}
            wishlist={wishlist}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
