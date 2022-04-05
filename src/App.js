import { useState } from "react";
import "./App.css";
import Left from "./components/left/Left";
import Middle from "./components/middle/Middle";
import Right from "./components/right/Right";

function App() {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  const saveToLocalStorage = (items) => {
    localStorage.setItem("wishlist", JSON.stringify(items));
  };
  function setFav(mov) {
    const alreadyWishlisted = wishlist.find((wish) => wish.id === mov.id);
    if (alreadyWishlisted) return;
    const temp = [mov, ...wishlist];
    setWishlist(temp);
    saveToLocalStorage(temp);
  }

  // function removeWishHandler(id) {
  //   console.log(id);
  // }
  const removeWishHandler = (id) => {
    const temp = wishlist.filter((tmp) => tmp.id !== id);
    setWishlist(temp);
    saveToLocalStorage(temp);
  };
  return (
    <div className="App">
      <Left />
      <Middle setFav={setFav} />
      <Right wishlist={wishlist} removeWish={removeWishHandler} />
    </div>
  );
}

export default App;
