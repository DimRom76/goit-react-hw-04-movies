import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

import Loader from '../Loader';
import fetchApi from '../../service/apiService';
import MoviesListViews from '../../views/MoviesListViews';

const MoviesPage = () => {
  const { isLoading, error, data } = useQuery(
    ['trending'],
    fetchApi.fetchTrending,
  );

  const location = useLocation();

  if (isLoading) return <Loader />;

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h1>Популярные фильмы</h1>
      <MoviesListViews data={data.results} backPage={location.pathname} />
    </div>
  );
};

export default MoviesPage;
