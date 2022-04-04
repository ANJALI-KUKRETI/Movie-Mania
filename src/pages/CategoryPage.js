import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import uuid from "react-uuid";
import Card from "../components/middle/Card";
import "./CategoryPage.css";
import axios from "../components/axios/axios";
import requests from "../components/axios/Requests";

const CategoryPage = ({ trending }) => {
  // console.log(trending);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const params = useParams();
  const cName = params.category;
  useEffect(() => {
    async function outer() {
      async function getGenre() {
        const res = await axios.get(requests.getGenreList);
        return res.data.genres;
      }
      const genres = await getGenre();
      console.log(genres);
      const genreId = genres.find(({ name }) => name === cName);
      // setGenre(genreId.id);
      async function getData() {
        const res = await axios.get(
          `/discover/movie?api_key=4a0eac3b6692e4c56952182a8412654a&with_genres=${genreId.id}&page=1`
        );
        console.log(res.data.results);
        setData(res.data.results);
      }
      getData();
      function loadMoreData() {
        const temp = page + 1;
        setPage(temp);
      }
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
  }, [cName]);
  useEffect(() => {
    async function outer() {
      async function getGenre() {
        const res = await axios.get(requests.getGenreList);
        return res.data.genres;
      }
      const genres = await getGenre();
      console.log(genres);
      const genreId = genres.find(({ name }) => name === cName);
      // setGenre(genreId.id);
      async function getData() {
        const res = await axios.get(
          `/discover/movie?api_key=4a0eac3b6692e4c56952182a8412654a&with_genres=${genreId.id}&page=${page}`
        );
        console.log(res.data.results);
        setData(res.data.results);
      }
      getData();
    }
    outer();
  }, [page]);

  // console.log(genre);
  return (
    <div className="category">
      <div className="cardHolder">
        {data.map((dt) => (
          <div className="inn" key={uuid()}>
            <Card mov={dt} />
          </div>
        ))}
      </div>
      <div className="loadMore">
        <button onClick={() => setPage(page + 1)}>Prev</button>
        <button onClick={() => setPage(page - 1)}>Next</button>
      </div>
    </div>
  );
};

export default CategoryPage;
