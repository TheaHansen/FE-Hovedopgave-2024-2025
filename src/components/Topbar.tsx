import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Made by Frederikke
function Topbar() {
  return (
    <Navbar style={{height: "30px"}} bg="dark" data-bs-theme="dark">
      <Container>
          <Nav className="d-flex mx-auto justify-content-between w-50">
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#omos">Om os</Nav.Link>
            <Nav.Link href="#kontakt">Kontakt</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Topbar;