import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import uuid from "react-uuid";

import Card from "../components/middle/Card";
import "./CategoryPage.css";
import axios from "../components/axios/axios";
import Spinner from "../components/Spinner/Spinner";

const CategoryPage = ({ setFav }) => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const cName = params.category;
  const type = params.type;
  console.log(type);
  useEffect(() => {
    async function outer() {
      async function getGenre() {
        setLoading(true);
        const res = await axios.get(
          `/genre/${type}/list?api_key=4a0eac3b6692e4c56952182a8412654a&language=en-US`
        );
        setLoading(false);
        return res.data.genres;
      }
      const genres = await getGenre();
      const genreId = genres.find(({ name }) => name.split(" ")[0] === cName);
      console.log(genres);
      async function getData() {
        setLoading(true);
        const res = await axios.get(
          `/discover/${type}?api_key=4a0eac3b6692e4c56952182a8412654a&with_genres=${genreId.id}&page=${page}`
        );
        console.log(res.data.total_pages);
        setTotalPage(res.data.total_pages);
        setData(res.data.results);
        setLoading(false);
      }
      getData();
    }
    outer();
  }, [cName, page, type]);

  console.log(totalPage);

  console.log(page);
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
                <Card mov={dt} key={uuid()} setFav={setFav} type={type} />
              </div>
            ))}
          </div>
          <div className="loadMore">
            <div>
              {page > 1 && (
                <div className="btn" onClick={() => setPage(page - 1)}>
                  <div className="btnIn">Prev {page - 1}</div>
                </div>
              )}
            </div>
            <div>
              {page < totalPage && (
                <div className="btn" onClick={() => setPage(page + 1)}>
                  <div className="btnIn">Next {page + 1}</div>
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
