import { useState, useEffect } from "react";

import "./App.css";
import Left from "./components/left/Left";
import Middle from "./components/middle/Middle";
import Right from "./components/right/Right";

function App() {
  const [type, setType] = useState("");
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [searchText, setSearchText] = useState("");

  const saveToLocalStorage = (items) => {
    localStorage.setItem("wishlist", JSON.stringify(items));
  };
  function setFav({ mov, type }) {
    console.log(mov, type);
    const alreadyWishlisted = wishlist.find((wish) => wish.id === mov.id);
    if (alreadyWishlisted) return;
    const temp = [mov, ...wishlist];
    setWishlist(temp);
    saveToLocalStorage(temp);
    setType(type);
  }

  const removeWishHandler = (id) => {
    const temp = wishlist.filter((tmp) => tmp.id !== id);
    setWishlist(temp);
    saveToLocalStorage(temp);
  };
  function getSearchHandler(text) {
    setSearchText(text);
    console.log(searchText);
  }
  return (
    <div className="App">
      <Left />
      <Middle setFav={setFav} searchText={searchText} />
      <Right
        wishlist={wishlist}
        removeWish={removeWishHandler}
        type={type}
        getSearch={getSearchHandler}
      />
    </div>
  );
}

export default App;
