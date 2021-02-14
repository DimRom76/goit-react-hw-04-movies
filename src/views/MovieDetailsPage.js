import { useQuery } from 'react-query';
import { useParams, useLocation, Link, useRouteMatch } from 'react-router-dom';
import { useContext } from 'react';

import Loader from '../components/Loader';

import fetchApi from '../service/apiService';
import apiData from '../service/apiData';
import LanguageContext from '../service/LanguageContext';

import AddInformation from './AddInformation';
import routes from '../routes';

export default function MovieView() {
  const languageRu = useContext(LanguageContext);
  const { idMovie } = useParams();
  const location = useLocation();
  const match = useRouteMatch();
  //проверям есть ли у location атрибут state затем атрибут backPage,
  // если это все есть берем из location иначе из routes.home
  const backPage = location?.state?.backPage ?? routes.home;

  const { isLoading, error, data } = useQuery(
    ['movieId', languageRu, idMovie],
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

      <AddInformation
        backPage={backPage}
        match={match}
        credits={credits}
        reviews={reviews}
        videos={videos}
      />
    </div>
  );
}
