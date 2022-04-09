import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import uuid from "react-uuid";

import Card from "../components/middle/Card";
import "./CategoryPage.css";
import axios from "../components/axios/axios";
import Spinner from "../components/Spinner/Spinner";

const CategoryPage = ({ setFav, wishlist }) => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const cName = params.category;
  const type = params.type;

  async function getGenre(type) {
    setLoading(true);
    const res = await axios.get(
      `/genre/${type}/list?api_key=4a0eac3b6692e4c56952182a8412654a&language=en-US`
    );
    setLoading(false);
    return res.data.genres;
  }
  useEffect(() => {
    setPage(1);
  }, [cName, type]);
  useEffect(() => {
    async function outer() {
      const genres = await getGenre(type);
      const genreId = genres.find(({ name }) => name.split(" ")[0] === cName);

      async function getData() {
        setLoading(true);
        const res = await axios.get(
          `/discover/${type}?api_key=4a0eac3b6692e4c56952182a8412654a&with_genres=${genreId.id}&page=${page}`
        );

        setTotalPage(res.data.total_pages);
        setData(res.data.results);
        setLoading(false);
      }
      getData();
    }
    outer();
  }, [cName, page, type]);

  return (
    <div className="category">
      <div className="header">
        <div>
          <NavLink
            to={`/${cName}/movie`}
            className={(navdata) => (navdata.isActive ? "active" : "link")}
          >
            Movies
          </NavLink>
        </div>

        <div>
          <NavLink
            to={`/${cName}/tv`}
            className={(navdata) => (navdata.isActive ? "active" : "link")}
          >
            TV Series
          </NavLink>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="cardHolder">
            {data.map((dt) => (
              <div className="inn" key={uuid()}>
                <Card
                  mov={dt}
                  key={uuid()}
                  setFav={setFav}
                  type={type}
                  wishlist={wishlist}
                />
              </div>
            ))}
          </div>
          <div className="loadMore">
            <div>
              {page > 1 && (
                <div className="btn" onClick={() => setPage(page - 1)}>
                  <div className="btnIn">Prev </div>
                </div>
              )}
            </div>
            <div>
              {page < totalPage && (
                <div className="btn" onClick={() => setPage(page + 1)}>
                  <div className="btnIn">Next </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryPage;
