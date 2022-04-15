import { useState } from "react";
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

  // ===============Save to localStorage====================
  const saveToLocalStorage = (items) => {
    localStorage.setItem("wishlist", JSON.stringify(items));
  };

  // ===================Set as favorite=======================
  function setFav({ mov, type }) {
    console.log(mov, type);
    const alreadyWishlisted = wishlist.find((wish) => wish.mov.id === mov.id);
    if (alreadyWishlisted) return;
    const temp = [{ mov, type }, ...wishlist];
    setWishlist(temp);
    saveToLocalStorage(temp);
    setType(type);
  }

  // ======================Remove from favorite====================
  const removeWishHandler = (id) => {
    const temp = wishlist.filter((tmp) => tmp.mov.id !== id);
    setWishlist(temp);
    saveToLocalStorage(temp);
  };

  // =====================Pass search value to middle component from right========================
  function getSearchHandler(text) {
    setSearchText(text);
  }
  return (
    <div className="App">
      <Left
        getSearch={getSearchHandler}
        wishlist={wishlist}
        removeWish={removeWishHandler}
        type={type}
      />
      <Middle setFav={setFav} searchText={searchText} wishlist={wishlist} />
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
