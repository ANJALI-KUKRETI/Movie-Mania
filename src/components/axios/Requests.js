export const API_KEY = "0c44ec8e26aea5702eb3cb2e20f8938d";
// 26ba5e77849587dbd7df199727859189
// 4a0eac3b6692e4c56952182a8412654a
const requests = {
  fetchTrendingMovie: `/trending/movie/week?api_key=${API_KEY}`,
  fetchTrendingShow: `/trending/tv/week?api_key=${API_KEY}`,
  fetchTopRatedMovie: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedShow: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
};

export default requests;
