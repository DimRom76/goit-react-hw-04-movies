import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import apiData from '../service/apiData';
import LanguageContext from '../service/LanguageContext';

export default function MoviesListView({ data, backPage }) {
  const languageRu = useContext(LanguageContext);
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
            {movie.title} {languageRu && ` / ${movie.original_title}`} (
            {apiData.getYear(movie.release_date)})
          </NavLink>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
