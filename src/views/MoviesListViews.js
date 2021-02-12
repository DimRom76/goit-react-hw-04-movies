import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
//import { useRouteMatch } from 'react-router-dom';
import apiData from '../service/apiData';

export default function MoviesListView({ data, backPage }) {
  return (
    <ListGroup>
      {data.map(movie => (
        <ListGroupItem key={movie.id} action variant="info">
          <NavLink
            to={{
              pathname: `/movies/${movie.id}`,
              state: { backPage },
            }}
          >
            {movie.title} / {movie.original_title} (
            {apiData.getYear(movie.release_date)})
          </NavLink>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
