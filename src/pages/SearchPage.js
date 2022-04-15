import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { API_KEY } from "../components/axios/Requests";
import { GoAlert } from "react-icons/go";
import uuid from "react-uuid";
import Card from "../components/middle/Card";
import Spinner from "../components/Spinner/Spinner";
import axios from "../components/axios/axios";
import "./SearchPage.css";

const SearchPage = ({ searchText, setFav, wishlist }) => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const params = useParams();

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/${params.type}?api_key=${API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
        );
        setContent(data.results);
        setLoading(false);
        setTotalPage(data.total_pages);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [searchText, params.type, page]);
  useEffect(() => {
    setPage(1);
  }, [searchText, params.type]);

  return (
    <div className="searchPage">
      <div className="header">
        <div>
          <NavLink
            to="/searchPage/movie"
            className={(navdata) => (navdata.isActive ? "active" : "link")}
          >
            Movies
          </NavLink>
        </div>

        <div>
          <NavLink
            to="/searchPage/tv"
            className={(navdata) => (navdata.isActive ? "active" : "link")}
          >
            TV Series
          </NavLink>
        </div>
      </div>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="cardHolder">
            {content.length > 0 ? (
              content.map((dt) => (
                <div className="inn" key={uuid()}>
                  <Card
                    mov={dt}
                    key={uuid()}
                    setFav={setFav}
                    type={params.type}
                    wishlist={wishlist}
                  />
                </div>
              ))
            ) : (
              <div className="notFound">
                <div className="alert">
                  <GoAlert />
                </div>
                <div> Not Found!</div>
              </div>
            )}
          </div>
        )}
        <div className="loadMore">
          <div>
            {page > 1 && (
              <div className="btn" onClick={() => setPage(page - 1)}>
                <div className="btnIn">Prev</div>
              </div>
            )}
          </div>
          <div>
            {totalPage > 1 && page <= totalPage && (
              <div className="btn" onClick={() => setPage(page + 1)}>
                <div className="btnIn">Next</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
