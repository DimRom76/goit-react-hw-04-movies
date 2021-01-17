import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Brand href="https://www.themoviedb.org/movie" target="_blank">
        T M D B
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/" exact="true">
          Home
        </Nav.Link>
        <Nav.Link href="/movies">Movies</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
