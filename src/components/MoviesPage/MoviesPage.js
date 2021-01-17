import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useHistory, useLocation } from 'react-router-dom';

import fetchApi from '../../service/apiService';
import Loader from '../../components/Loader';
import MoviesListViews from '../../views/MoviesListViews';

import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const history = useHistory();
  const location = useLocation();

  const [value, setValue] = useState('');
  const [query, setQuery] = useState('');

  const queryString = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (queryString === null) return;
    setQuery(queryString);
    setValue(queryString);
  }, [queryString]);

  function handleOnChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    history.push({ ...location, search: `query=${value.trim()}` });
  }

  const { isLoading, error, data } = useQuery(
    ['movieSelect', query],
    fetchApi.fetchSearchMovie,
  );

  return (
    <div>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={s.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleOnChange}
          value={value}
        />
      </form>

      {isLoading && <Loader />}

      {error && 'An error has occurred: ' + error.message}

      {data && (
        <MoviesListViews
          data={data.results}
          backPage={location.pathname + location.search}
        />
      )}
    </div>
  );
};

export default MoviesPage;
