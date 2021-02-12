import { useQuery } from 'react-query';
import {
  useParams,
  NavLink,
  Route,
  useLocation,
  Link,
  useRouteMatch,
} from 'react-router-dom';

import Loader from '../components/Loader';

import fetchApi from '../service/apiService';
import apiData from '../service/apiData';

import CreditsView from './CreditsViews';
import ReviewsView from './ReviewsViews';
import VideosView from './VideosViews';

export default function MovieView() {
  const { idMovie } = useParams();
  const location = useLocation();
  const match = useRouteMatch();
  const backPage = location?.state?.backPage ?? '/';

  const { isLoading, error, data } = useQuery(
    ['movieId', idMovie],
    fetchApi.fetchMovieId,
  );

  if (isLoading) return <Loader />;

  if (error) return 'An error has occurred: ' + error.message;

  const {
    title,
    original_title,
    genres,
    release_date,
    poster_path,
    vote_average,
    overview,
    credits,
    reviews,
    videos,
  } = data;

  const genresList = apiData.getGenres(genres);

  return (
    <div>
      <div className="alignLeft">
        <Link to={backPage}>{'<- Назад'}</Link>
        {/* можно сделать через кнопку (onClick) и использовать History */}
      </div>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`}
              width="300px"
              alt={title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">
                {title} / {original_title} ({apiData.getYear(release_date)})
              </h3>
              <p className="card-text">Рейтинг: {Number(vote_average) * 10}%</p>
              <h4 className="card-title">Обзор</h4>
              <p className="card-text">{overview}</p>
              <h4 className="card-title">Жанры</h4>
              <p className="card-text">{genresList}</p>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="addInformation">
        <p>Дополнительная информация</p>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/credits`,
                state: { backPage },
              }}
            >
              В главных ролях
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: { backPage },
              }}
            >
              Обзоры
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/videos`,
                state: { backPage },
              }}
            >
              Трейлеры
            </NavLink>
          </li>
        </ul>
        <hr />
        <Route
          path={`${match.path}/credits`}
          render={props => <CreditsView {...props} credits={credits} />}
          //component={CreditsView}
        />
        <Route
          path={`${match.path}/reviews`}
          render={props => <ReviewsView {...props} data={reviews} />}
          //component={ReviewsView}
        />
        <Route
          path={`${match.path}/videos`}
          render={props => <VideosView {...props} data={videos} />}
          //component={VideosView}
        />
      </div>
    </div>
  );
}
