import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import axios from "../axios/axios";
import requests from "../axios/Requests";
import HomePage from "../../pages/HomePage";
import "./Middle.css";
import CategoryPage from "../../pages/CategoryPage";
import DetailPage from "../../pages/DetailPage";

const Middle = ({ setFav }) => {
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
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              trending={trendingMovie}
              top={topMovie}
              banner={bannerMovie}
              setFav={setFav}
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
            />
          }
        />
        <Route path="/:category" element={<CategoryPage setFav={setFav} />} />
        <Route
          path="/detailPage/:id"
          element={<DetailPage setFav={setFav} />}
        />
      </Routes>
    </div>
  );
};

export default Middle;
