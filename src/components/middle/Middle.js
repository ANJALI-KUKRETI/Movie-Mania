import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "../axios/axios";
import requests from "../axios/Requests";
import HomePage from "../../pages/HomePage";
import "./Middle.css";
import uuid from "react-uuid";
import { NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import CategoryPage from "../../pages/CategoryPage";
import DetailPage from "../../pages/DetailPage";
import SearchPage from "../../pages/SearchPage";

const Middle = ({ setFav, searchText, wishlist }) => {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [sideNav, setSideNav] = useState(false);
  const [topMovie, setTopMovie] = useState([]);
  const [trendingShow, setTrendingShow] = useState([]);
  const [topShow, setTopShow] = useState([]);
  const [bannerMovie, setBannerMovie] = useState([]);
  const [bannerShow, setBannerShow] = useState([]);
  const [loading, setLoading] = useState(false);

  const catArr = [
    "Action",
    "Comedy",
    "Drama",
    "Family",
    "War",
    "Documentary",
    "Crime",
    "Mystery",
    "Animation",
    "Western",
  ];

  useEffect(() => {
    async function temp() {
      async function getTrending() {
        setLoading(true);
        const res = await axios.get(requests.fetchTrendingMovie);
        setTrendingMovie(res.data.results);
        setLoading(false);
        return res.data.results;
      }
      getTrending();
      async function getTop() {
        setLoading(true);
        const res = await axios.get(requests.fetchTopRatedMovie);
        setTopMovie(res.data.results);
        setLoading(false);
      }
      getTop();
      async function getTrendingShow() {
        setLoading(true);
        const res = await axios.get(requests.fetchTrendingShow);
        setTrendingShow(res.data.results);
        setLoading(false);
        return res.data.results;
      }
      getTrendingShow();
      async function getTopShow() {
        setLoading(true);
        const res = await axios.get(requests.fetchTopRatedShow);
        setTopShow(res.data.results);
        setLoading(false);
      }
      getTopShow();

      //==================================
      const movieForBanner = await getTrending();
      setBannerMovie(
        movieForBanner[Math.floor(Math.random() * movieForBanner.length - 1)]
      );
      const showForBanner = await getTrendingShow();
      setBannerShow(
        showForBanner[Math.floor(Math.random() * showForBanner.length - 1)]
      );
    }
    temp();
  }, []);

  function openSideNav() {
    setSideNav(!sideNav);
  }

  function closeSideNav() {
    setSideNav(false);
  }
  return (
    <div className="middle">
      {!sideNav ? (
        <div className="hamburger" onClick={openSideNav}>
          <GiHamburgerMenu />
        </div>
      ) : (
        <div className="close" onClick={closeSideNav}>
          <ImCross />
        </div>
      )}

      {sideNav && (
        <div className="res">
          <div>
            <div className="menuR">
              <div>
                <NavLink
                  to="/"
                  className={(navdata) =>
                    navdata.isActive ? "activeL" : "link"
                  }
                >
                  Home
                </NavLink>
              </div>
              {catArr.map((cat) => (
                <div key={uuid()}>
                  <NavLink
                    to={`/${cat}/movie`}
                    className={(navdata) =>
                      navdata.isActive ? "activeL" : "link"
                    }
                  >
                    {cat}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              trending={trendingMovie}
              top={topMovie}
              banner={bannerMovie}
              setFav={setFav}
              type="movie"
              loading={loading}
              wishlist={wishlist}
            />
          }
        />
        <Route
          path="/tv"
          element={
            <HomePage
              trending={trendingShow}
              top={topShow}
              banner={bannerShow}
              setFav={setFav}
              type="tv"
              loading={loading}
              wishlist={wishlist}
            />
          }
        />
        <Route
          path="/detailPage/:id/:type"
          element={<DetailPage setFav={setFav} />}
        />
        <Route
          path="/:category/:type"
          element={<CategoryPage setFav={setFav} wishlist={wishlist} />}
        />

        <Route
          path="/searchPage/:type"
          element={
            <SearchPage
              searchText={searchText}
              setFav={setFav}
              wishlist={wishlist}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Middle;
