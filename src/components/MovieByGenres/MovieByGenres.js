import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useContext } from 'react';

import MoviesListViews from '../../views/MoviesListViews';
import Loader from '../Loader';

import fetchApi from '../../service/apiService';
import LanguageContext from '../../service/LanguageContext';

export default function MovieByGanres() {
  const languageRu = useContext(LanguageContext);
  const { genreId } = useParams();
  const location = useLocation();
  //   console.log(location.pathname);
  //   console.log(genreId);

  const { isLoading, error, data } = useQuery(
    ['movieByGenres', languageRu, genreId],
    fetchApi.fetchMovieByGenres,
  );

  if (isLoading) return <Loader />;

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <MoviesListViews data={data.results} backPage={location.pathname} />
    </div>
  );
}
