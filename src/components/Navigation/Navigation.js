import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Brand href="https://www.themoviedb.org/movie" target="_blank">
        T M D B
      </Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink to="/" exact className="mainLink">
          Home
        </NavLink>
        <NavLink to="/movies" className="mainLink">
          Movies
        </NavLink>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
