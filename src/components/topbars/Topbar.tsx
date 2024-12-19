import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


//Made by Frederikke
function Topbar() {
  return (
    <Navbar style={{ height: "30px" }} className="bg-dark">
      <Container>
          <Nav className="d-flex mx-auto justify-content-between w-50">
            <Nav.Link as={Link} to="/FAQ" className="text-light">FAQ</Nav.Link>
            <Nav.Link as={Link} to="/om-os" className="text-light">
            Om os
            </Nav.Link>
            <Nav.Link href="#kontakt" className="text-light">Kontakt</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Topbar;
