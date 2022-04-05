import React, { useState, useEffect } from "react";
import { API_KEY } from "../axios/Requests";
import Favorites from "./Favorites";
import axios from "../axios/axios";

import "./Right.css";

const Right = ({ wishlist, removeWish }) => {
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState("");

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`
      );
      setContent(data.results);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  // useEffect(() => {
  //   fetchSearch();
  // }, [searchText]);

  return (
    <div className="right">
      <div className="searchBar">
        {/* <form onSubmit={fetchSearch()}> */}
        <input
          type="text"
          className="seacrh"
          placeholder="Search"
          // value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {/* </form> */}
      </div>
      <Favorites wishlist={wishlist} removeWish={removeWish} />
    </div>
  );
};

export default Right;
