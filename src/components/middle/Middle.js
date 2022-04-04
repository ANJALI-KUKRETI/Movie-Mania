import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import axios from "../axios/axios";
import requests from "../axios/Requests";
import HomePage from "../../pages/HomePage";
import "./Middle.css";
import CategoryPage from "../../pages/CategoryPage";
import DetailPage from "../../pages/DetailPage";

const Middle = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [topMovie, setTopMovie] = useState([]);
  const [trendingShow, setTrendingShow] = useState([]);
  const [topShow, setTopShow] = useState([]);
  const [bannerMovie, setBannerMovie] = useState([]);
  const [bannerShow, setBannerShow] = useState([]);

  useEffect(() => {
    async function temp() {
      async function getTrending() {
        const res = await axios.get(requests.fetchTrendingMovie);
        setTrendingMovie(res.data.results);
        return res.data.results;
      }
      getTrending();
      async function getTop() {
        const res = await axios.get(requests.fetchTopRatedMovie);
        setTopMovie(res.data.results);
      }
      getTop();
      async function getTrendingShow() {
        const res = await axios.get(requests.fetchTrendingShow);
        setTrendingShow(res.data.results);
        return res.data.results;
      }
      getTrendingShow();
      async function getTopShow() {
        const res = await axios.get(requests.fetchTopRatedShow);
        setTopShow(res.data.results);
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

  return (
    <div className="middle">
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
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              trending={trendingMovie}
              top={topMovie}
              banner={bannerMovie}
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
            />
          }
        />
        <Route
          path="/:category"
          element={<CategoryPage trending={trendingShow} />}
        />
        <Route path="/detailPage" element={<DetailPage />} />
      </Routes>
    </div>
  );
};

export default Middle;
