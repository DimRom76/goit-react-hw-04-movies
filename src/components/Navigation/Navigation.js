import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';

function Navigation({ languageRu, setlanguageRu }) {
  function ChangeLanguage(e) {
    if (e.target.tagName !== 'P') {
      return;
    }

    if (e.target.classList.contains('active__language')) {
      return;
    }

    setlanguageRu(!languageRu);
  }

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Brand href="https://www.themoviedb.org/movie" target="_blank">
        T M D B
      </Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink to={routes.home} exact className="mainLink">
          Home
        </NavLink>
        <NavLink to={routes.movies} className="mainLink">
          Movies
        </NavLink>
        <NavLink to={routes.genres} className="mainLink">
          Genres
        </NavLink>
      </Nav>

      <div className="languages" onClick={ChangeLanguage}>
        <p
          className={`language ${languageRu ? 'active__language' : ''}`}
          data-lang="ru-RU"
        >
          RU
        </p>
        <span className="languages__separator">|</span>
        <p
          className={`language ${!languageRu ? 'active__language' : ''}`}
          data-lang="en-EN"
        >
          EN
        </p>
      </div>
    </Navbar>
  );
}

export default Navigation;
