import React, { useState } from "react";

import { Link } from "react-router-dom";

const InputArea = ({ getSearch }) => {
  const [searchText, setSearchText] = useState("");

  const fetchSearch = async (e) => {
    e.preventDefault();
    getSearch(searchText);
    setSearchText("");
  };

  return (
    <div className="searchBar">
      <form onSubmit={fetchSearch}>
        <Link to={"/searchPage/movie"}>
          <input
            type="text"
            className="seacrh"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Link>
      </form>
    </div>
  );
};

export default InputArea;
