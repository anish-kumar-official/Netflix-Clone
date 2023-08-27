const api_key = "d97cbbaed0d7598484c0404906f88511";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`,
  requestNowplaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`,
  requestActionMovies: `https://api.themoviedb.org/3/search/movie?query=action&api_key=${api_key}`,
};

export default requests;
