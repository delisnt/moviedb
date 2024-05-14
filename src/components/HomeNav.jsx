import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function HomeNav() {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand><Link to='/'> Delisnt Movie DB</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to=''>Home</Link></Nav.Link>
            <Nav.Link><Link to='movies'>Movies</Link></Nav.Link>
            <Nav.Link><Link to='login'>Login</Link></Nav.Link>
          </Nav>
          <input type="text" placeholder="Search..." className="p-1" />
        </Container>
      </Navbar>
    </div>
  );
}

export default HomeNav;
