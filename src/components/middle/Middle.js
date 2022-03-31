import React, { useState, useEffect } from "react";

import "./Middle.css";
import Banner from "./Banner";
import Row from "./Row";
import axios from "../axios/axios";
import requests from "../axios/Requests";

const Middle = () => {
  const [trending, setTrending] = useState([]);
  const [top, setTop] = useState([]);

  useEffect(() => {
    async function getTrending() {
      const res = await axios.get(requests.fetchTrending);
      setTrending(res.data.results);
    }
    getTrending();
    async function getTop() {
      const res = await axios.get(requests.fetchTopRated);
      setTop(res.data.results);
    }
    getTop();
  }, []);
  return (
    <div className="middle">
      <div className="header">
        <div>Movies</div>
        <div>TV Series</div>
      </div>
      <Banner />
      <Row heading={"Trending Now"} data={trending} />
      <Row heading={"Top Rated"} data={top} />
    </div>
  );
};

export default Middle;
