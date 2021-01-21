const API_KEY = '?api_key=fb4eca5dd3545235e4fd6796c70d4d40';
const LANGUAGE = '&language=ru-RU';
const MAIN_URL = 'https://api.themoviedb.org/3/';
// https://api.themoviedb.org/3/trending/movie/day?api_key=fb4eca5dd3545235e4fd6796c70d4d40
// ЖАНРЫ;
// https://api.themoviedb.org/3/genre/movie/list?api_key=fb4eca5dd3545235e4fd6796c70d4d40

//api.themoviedb.org/3/discover/movie?api_key=fb4eca5dd3545235e4fd6796c70d4d40&language=en-US&sort_by=popularity.desc&with_genres=Western&page=1
//api.themoviedb.org/3/discover/movie?api_key=fb4eca5dd3545235e4fd6796c70d4d40&language=en-US&with_genres=14&sort_by=popularity.desc
//http://api.themoviedb.org/3/discover/movie?api_key=fb4eca5dd3545235e4fd6796c70d4d40&language=en-US&with_genres=14,1&query=bat

http: https: const fetchTrending = async () => {
  const res = await fetch(`${MAIN_URL}trending/movie/day${API_KEY}${LANGUAGE}`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const fetchSearchMovie = async ({ queryKey }) => {
  const query = queryKey[1];
  if (query === '') {
    return '';
  }
  const res = await fetch(
    `${MAIN_URL}search/movie${API_KEY}${LANGUAGE}&query=${query}`,
  );
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const fetchMovieId = async ({ queryKey }) => {
  const id = queryKey[1];
  const res = await fetch(`${MAIN_URL}movie/${id}${API_KEY}${LANGUAGE}`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const fetchCreditsId = async ({ queryKey }) => {
  const id = queryKey[1];
  const res = await fetch(
    `${MAIN_URL}movie/${id}/credits${API_KEY}${LANGUAGE}`,
  );
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const fetchReviewsId = async ({ queryKey }) => {
  const id = queryKey[1];
  const res = await fetch(
    `${MAIN_URL}movie/${id}/reviews${API_KEY}${LANGUAGE}`,
  );
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const fetchApi = {
  fetchTrending,
  fetchMovieId,
  fetchCreditsId,
  fetchReviewsId,
  fetchSearchMovie,
};

export default fetchApi;
