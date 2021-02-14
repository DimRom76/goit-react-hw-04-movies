// import { useQuery } from 'react-query';
// import { useParams } from 'react-router-dom';

// import Loader from '../components/Loader';

// import fetchApi from '../service/apiService';

export default function CreditsView({ credits }) {
  //Если не передавать данніе пропсом а идти за ними на сервер
  //const { idMovie } = useParams();
  // const { isLoading, error, data } = useQuery(
  //   ['movieIdCredits', idMovie],
  //   fetchApi.fetchCreditsId,
  // );

  // if (isLoading) return <Loader />;

  // if (error) return 'An error has occurred: ' + error.message;

  const cast = credits.cast;
  if (cast.length === 0) return <div>No actors</div>;

  return (
    <div>
      <ul className="actors__list">
        {cast.map(({ name, character, cast_id, profile_path }) => (
          <li key={cast_id} className="actor__li">
            {profile_path && (
              <img
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`}
                alt={name}
                width="100px"
                className="actor__img"
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
