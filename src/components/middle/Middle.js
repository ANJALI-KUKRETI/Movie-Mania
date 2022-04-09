import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import axios from "../axios/axios";
import requests from "../axios/Requests";
import HomePage from "../../pages/HomePage";
import "./Middle.css";
import CategoryPage from "../../pages/CategoryPage";
import DetailPage from "../../pages/DetailPage";
import SearchPage from "../../pages/SearchPage";

const Middle = ({ setFav, searchText }) => {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [topMovie, setTopMovie] = useState([]);
  const [trendingShow, setTrendingShow] = useState([]);
  const [topShow, setTopShow] = useState([]);
  const [bannerMovie, setBannerMovie] = useState([]);
  const [bannerShow, setBannerShow] = useState([]);
  const [loading, setLoading] = useState(false);

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
              type="movie"
              loading={loading}
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
            />
          }
        />
        <Route
          path="/detailPage/:id/:type"
          element={<DetailPage setFav={setFav} />}
        />
        <Route
          path="/:category/:type"
          element={<CategoryPage setFav={setFav} />}
        />

        <Route
          path="/searchPage/:type"
          element={<SearchPage searchText={searchText} setFav={setFav} />}
        />
      </Routes>
    </div>
  );
};

export default Middle;
