import { Navbar, Container, Nav } from "react-bootstrap";
import "../Style/navbar.css";
const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand className="nav title">Film Bagus</Navbar.Brand>
          <nav>
            <div className="nav select">
              <Nav.Link>Trending</Nav.Link>
              <Nav.Link>Super Hero</Nav.Link>
            </div>
          </nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
