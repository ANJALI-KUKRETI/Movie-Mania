import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import axios from "../axios/axios";
import requests from "../axios/Requests";
import { AiFillStar } from "react-icons/ai";
import "./Middle.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [movieTrailer, setMovieTrailer] = useState([]);

  useEffect(async () => {
    async function fetchDetail() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ];
    }

    const data = await fetchDetail();

    async function getVideo() {
      const request = await axios.get(
        `/movie/${data.id}/videos?api_key=4a0eac3b6692e4c56952182a8412654a`
      );
      // console.log(request);
      setMovieTrailer(
        request.data.results.filter((mov) => mov.name === "Official Trailer")[0]
          .key
      );
    }
    getVideo();
    return movieTrailer;
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="content">
          <div className="name">{movie.title || movie.name}</div>
          <div className="inner-content">
            <div className="vote">
              IMDb {movie.vote_average}
              <AiFillStar style={{ color: "yellow", marginLeft: "5px" }} />
            </div>
          </div>
          <div className="description">{truncate(movie.overview, 150)}</div>
          <div className="btns">
            <button className="watch">
              <a
                href={`https://www.youtube.com/watch?v=${movieTrailer}`}
                target="_blank"
              >
                <FaPlay /> <span> PLAY</span>
              </a>
            </button>
            <button className="add">
              <BsPlusLg /> <span> MY LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
