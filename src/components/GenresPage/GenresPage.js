import { useQuery } from 'react-query';

import { NavLink, useRouteMatch, Route } from 'react-router-dom';
import fetchApi from '../../service/apiService';
import Loader from '../Loader';
import MovieByGenres from '../MovieByGenres';

import s from './GenresPage.module.css';

const GanresPage = () => {
  const match = useRouteMatch();

  const { isLoading, error, data } = useQuery(
    ['ganresSelect'],
    fetchApi.fetchGanres,
  );

  if (isLoading) return <Loader />;

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h2>Жанры</h2>
      <ul className={s.container__genres}>
        {data.genres.map(genre => (
          <li key={genre.id} className={s.item__genres}>
            <NavLink
              to={{ pathname: `${match.url}/${genre.id}` }}
              activeClassName={s.active__link}
            >
              {genre.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Route path={`${match.url}/:genreId`} component={MovieByGenres} />
    </div>
  );
};

export default GanresPage;
