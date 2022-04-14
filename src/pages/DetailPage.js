import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
// import { BsPlusLg } from "react-icons/bs";
import axios from "../components/axios/axios";
import Slider from "react-slick";
import uuid from "react-uuid";
import { settingsTwo } from "../components/middle/settings";
import "./DetailPage.css";
import Spinner from "../components/Spinner/Spinner";

const DetailPage = ({ setFav }) => {
  const [detail, setDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const [casts, setCasts] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const dataId = params.id;
  const type = params.type;

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const res = await axios.get(
        `/${type}/${dataId}?api_key=26ba5e77849587dbd7df199727859189&language=en-US`
      );

      setDetail(res.data);
      setGenres(res.data.genres);
      setLoading(false);
    }
    getData();
    async function getCasts() {
      setLoading(true);
      const res = await axios.get(
        `/${type}/${dataId}/credits?api_key=26ba5e77849587dbd7df199727859189&language=en-US`
      );
      setCasts(res.data.cast.slice(1, 15));
      setLoading(false);
    }
    getCasts();
    async function getTrailer() {
      setLoading(true);
      const request = await axios.get(
        `/${type}/${dataId}/videos?api_key=4a0eac3b6692e4c56952182a8412654a`
      );
      setTrailer(
        request.data.results.filter(
          (mov) => mov.name === "Official Trailer" || mov.type === "Trailer"
        )[0].key
      );
      setLoading(false);
    }
    getTrailer();
  }, [dataId, type]);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div
            className="detailPage"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${detail.backdrop_path}")`,
              backgroundPosition: "center center",
            }}
          >
            <div className="layout">
              <div className="image">
                <img
                  src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
                  alt="detailImage"
                />
              </div>
              <div className="detailsIn">
                <h1 className="title">{detail.title || detail.name}</h1>
                <div className="tagLine">{detail.tagline}</div>
                <div className="imdbIn">
                  <span>IMDb</span>
                  {detail.vote_average}/10
                </div>
                <div className="genres">
                  {genres.map((genre) => (
                    <div key={uuid()}>{genre.name}</div>
                  ))}
                </div>
                <div className="descrip">{truncate(detail.overview, 150)}</div>
                <div className="btns">
                  <a
                    href={`https://www.youtube.com/watch?v=${trailer}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="watch">
                      <FaPlay /> PLAY
                    </button>
                  </a>
                  {/* <button
                    className="add"
                    onClick={() => setFav({ detail, type })}
                  >
                    <BsPlusLg /> <span> MY LIST</span>
                  </button> */}
                </div>
              </div>
            </div>
            <div className="fadeBottom"></div>
          </div>
          <div className="wrapperIn">
            <h2>CAST</h2>
            <Slider {...settingsTwo}>
              {casts.map((cast) => (
                <div key={uuid()} className="cast">
                  <div>
                    {cast.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                        alt="profile"
                      />
                    ) : (
                      <img
                        className="noImage"
                        src="https://www.irits.org/wp-content/uploads/2021/09/Neutral-Silhouette.jpg"
                        alt="noImage"
                      />
                    )}
                  </div>
                  <div className="about">
                    <div className="oName">{cast.name}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPage;
