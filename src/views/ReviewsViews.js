import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Loader from '../components/Loader';

import fetchApi from '../service/apiService';

export default function MovieView() {
  const { idMovie } = useParams();

  const { isLoading, error, data } = useQuery(
    ['movieReviewsId', idMovie],
    fetchApi.fetchReviewsId,
  );

  if (isLoading) return <Loader />;

  if (error) return 'An error has occurred: ' + error.message;

  if (data.results.length === 0) return <div>Обзоров еще нет</div>;

  return (
    <div>
      {data.results.map(el => (
        <div key={el.id}>
          <h4>
            {el.author} ({el.created_at})
          </h4>
          <p>{el.content}</p>
        </div>
      ))}
    </div>
  );
}
