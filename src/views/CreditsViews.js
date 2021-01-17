import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Loader from '../components/Loader';

import fetchApi from '../service/apiService';

export default function MovieView() {
  const { idMovie } = useParams();

  const { isLoading, error, data } = useQuery(
    ['movieIdCredits', idMovie],
    fetchApi.fetchCreditsId,
  );

  if (isLoading) return <Loader />;

  if (error) return 'An error has occurred: ' + error.message;

  const cast = data.cast;

  return (
    <div>
      <ul>
        {cast.map(({ name, character, cast_id, profile_path }) => (
          <li key={cast_id}>
            {profile_path && (
              <img
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`}
                alt={name}
                width="100px"
              />
            )}
            <p>
              <b>{name}</b> - {character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
