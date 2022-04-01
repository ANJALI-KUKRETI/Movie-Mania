const API_KEY = "4a0eac3b6692e4c56952182a8412654a";

const requests = {
  fetchTrendingMovie: `/trending/movie/week?api_key=${API_KEY}`,
  fetchTrendingShow: `/trending/tv/week?api_key=${API_KEY}`,
  //   fetchNetflixOriginals: `/discover/tv?sort_by=release_date.asc&with_networks=213&api_key=${API_KEY}`,
  fetchTopRatedMovie: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedShow: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
};

export default requests;
