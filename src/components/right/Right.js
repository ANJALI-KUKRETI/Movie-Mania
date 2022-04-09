import Favorites from "./Favorites";

import "./Right.css";
import InputArea from "./InputAres";

const Right = ({ wishlist, removeWish, type, getSearch }) => {
  return (
    <div className="right">
      <InputArea getSearch={getSearch} />
      <Favorites wishlist={wishlist} removeWish={removeWish} type={type} />
    </div>
  );
};

export default Right;
