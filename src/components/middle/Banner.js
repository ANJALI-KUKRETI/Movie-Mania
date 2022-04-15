import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
// import { BsPlusLg } from "react-icons/bs";
import axios from "../axios/axios";
import { AiFillStar } from "react-icons/ai";
import "./Middle.css";

const Banner = ({ banner, setFav }) => {
  const [movieTrailer, setMovieTrailer] = useState([]);
  const type = banner.media_type;
  useEffect(() => {
    async function getVideo() {
      const request = await axios.get(
        `/${type}/${banner.id}/videos?api_key=0c44ec8e26aea5702eb3cb2e20f8938d`
      );

      setMovieTrailer(
        request.data.results.filter(
          (mov) =>
            mov.name.includes("Official Trailer") ||
            mov.name.includes("Main Trailer") ||
            mov.name === "'Official Trailer [Subtitled]'"
        )[0].key
      );
    }
    getVideo();
    return movieTrailer;
  }, [banner.id, movieTrailer, type]);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${banner.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="help"></div>
        <div className="content">
          <div className="name">{banner.title || banner.name}</div>
          <div className="inner-content">
            <div className="vote">
              IMDb {banner.vote_average}
              <AiFillStar style={{ color: "yellow", marginLeft: "5px" }} />
            </div>
          </div>
          <div className="description">{truncate(banner.overview, 150)}</div>
          <div className="btns">
            <button className="watch">
              <a
                href={`https://www.youtube.com/watch?v=${movieTrailer}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaPlay /> <span> PLAY</span>
              </a>
            </button>
            {/* <button className="add" onClick={() => setFav({ banner, type })}>
              <BsPlusLg /> <span> MY LIST</span>
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
