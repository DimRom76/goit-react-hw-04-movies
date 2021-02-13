// import { useQuery } from 'react-query';
// import { useParams } from 'react-router-dom';

// import Loader from '../components/Loader';

// import fetchApi from '../service/apiService';

const StyleLi = { listStyle: 'none' };

export default function VideosView({ data }) {
  // const { idMovie } = useParams();

  // const { isLoading, error, data } = useQuery(
  //   ['movieIdVideoss', idMovie],
  //   fetchApi.fetchVideosId,
  // );

  // if (isLoading) return <Loader />;

  // if (error) return 'An error has occurred: ' + error.message;

  if (data.results.length === 0) return <div>No trailers</div>;

  const result = data.results;

  return (
    <div>
      <center>
        <ul>
          {result.map(({ key, name }) => (
            <li key={key} style={StyleLi}>
              {key && (
                <iframe
                  title={name}
                  id="ytplayer"
                  type="text/html"
                  width="640"
                  height="360"
                  src={`https://www.youtube.com/embed/${key}`}
                  frameBorder="0"
                  allowFullScreen
                />
              )}
            </li>
          ))}
        </ul>
      </center>
    </div>
  );
}
