import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import uuid from "react-uuid";
import Card from "../components/middle/Card";
import "./CategoryPage.css";
import axios from "../components/axios/axios";
import Spinner from "../components/Spinner/Spinner";

const CategoryPage = ({ setFav }) => {
  // console.log(trending);
  const [page, setPage] = useState(1);
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
      // setGenre(genreId.id);
      async function getData() {
        setLoading(true);
        const res = await axios.get(
          `/discover/${type}?api_key=4a0eac3b6692e4c56952182a8412654a&with_genres=${genreId.id}&page=${page}`
        );
        console.log(res.data.results);
        setData(res.data.results);
        setLoading(false);
      }
      getData();
      // window.onscroll = function () {
      //   if (
      //     window.innerHeight + document.documentElement.scrollTop ===
      //     document.documentElement.offsetHeight
      //   ) {
      //     loadMoreData();
      //   }
      // };
    }
    outer();
  }, [cName, page, type]);
  // useEffect(() => {
  //   async function outer() {
  //     async function getGenre() {
  //       const res = await axios.get(requests.getGenreList);
  //       return res.data.genres;
  //     }
  //     const genres = await getGenre();
  //     console.log(genres);
  //     const genreId = genres.find(({ name }) => name === cName);
  //     console.log(genreId);
  //     // setGenre(genreId.id);
  //     async function getData() {
  //       const res = await axios.get(
  //         `/discover/movie?api_key=4a0eac3b6692e4c56952182a8412654a&with_genres=${genreId.id}&page=${page}`
  //       );
  //       console.log(res.data.results);
  //       setData(res.data.results);
  //     }
  //     getData();
  //   }
  //   outer();
  // }, [page]);

  // console.log(genre);
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
            <button onClick={() => setPage(page + 1)}>Prev</button>
            <button onClick={() => setPage(page - 1)}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryPage;
