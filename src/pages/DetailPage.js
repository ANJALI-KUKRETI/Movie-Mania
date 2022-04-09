import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import axios from "../components/axios/axios";
import Slider from "react-slick";
import uuid from "react-uuid";
import { settingsTwo } from "../components/middle/settings";
import "./DetailPage.css";
import Spinner from "../components/Spinner/Spinner";

const DetailPage = ({ setFav }) => {
  console.log(setFav);
  const [detail, setDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const [casts, setCasts] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const dataId = params.id;
  const type = params.type;
  // console.log(detail);
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
      console.log(request);
      // console.log(request.data);
      setTrailer(
        request.data.results.filter(
          (mov) => mov.name === "Official Trailer" || mov.type === "Trailer"
        )[0].key
      );
      setLoading(false);
    }
    getTrailer();
  }, [dataId]);
  // console.log(trailer);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  // console.log(detail, type);
  // function setAsFav() {
  //   e.preventDefault();
  //   console.log(detail, type);
  //   setFav({
  //     detail,
  //     type,
  //   });
  // }
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
              height: "70vh",
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
                <div className="descrip">{truncate(detail.overview, 220)}</div>
                <div className="btns">
                  <a
                    href={`https://www.youtube.com/watch?v=${trailer}`}
                    target="_blank"
                  >
                    <button className="watch">
                      <FaPlay /> PLAY
                    </button>
                  </a>
                  <button className="add" onClick={() => setFav(detail)}>
                    <BsPlusLg /> <span> MY LIST</span>
                  </button>
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
                      />
                    )}
                  </div>
                  <div className="about">
                    <div className="oName">{cast.name}</div>
                    <div>As</div>
                    <div className="character">{cast.character}</div>
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

// https://api.themoviedb.org/3/movie/406759/credits?api_key=26ba5e77849587dbd7df199727859189&language=en-US
// adult: false
// backdrop_path: "/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg"
// belongs_to_collection: null
// budget: 146000000
// genres: (3) [{…}, {…}, {…}]
// homepage: "https://moonfall.movie"
// id: 406759
// imdb_id: "tt5834426"
// original_language: "en"
// original_title: "Moonfall"
// overview: "A mysterious force knocks the moon from its orbit around Earth and sends it hurtling on a collision course with life as we know it."
// popularity: 3215.556
// poster_path: "/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg"
// production_companies: (5) [{…}, {…}, {…}, {…}, {…}]
// production_countries: (2) [{…}, {…}]
// release_date: "2022-02-03"
// revenue: 30000000
// runtime: 130
// spoken_languages: [{…}]
// status: "Released"
// tagline: "Humanity will face the dark side of the Moon."
// title: "Moonfall"
// video: false
// vote_average: 6.5
// vote_count: 471
