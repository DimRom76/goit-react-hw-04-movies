import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Loader from '../components/Loader';

import fetchApi from '../service/apiService';

export default function VideosView() {
  const { idMovie } = useParams();

  const { isLoading, error, data } = useQuery(
    ['movieIdVideoss', idMovie],
    fetchApi.fetchVideosId,
  );

  if (isLoading) return <Loader />;

  if (error) return 'An error has occurred: ' + error.message;

  const result = data.results;

  return (
    <div>
      <ul>
        video list
        {result.map(({ key }) => (
          <li key={key}>
            {key && (
              <iframe
                id="ytplayer"
                type="text/html"
                width="640"
                height="360"
                src={`http://www.youtube.com/embed/${key}`}
                frameBorder="0"
                allowFullScreen
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
