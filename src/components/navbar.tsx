import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../customCSS/navbar/dropdown.css';
import '../customCSS/navbar/icon.css';


function NavigationBar() {
  return (
    <Navbar style={{height: "60px"}} className="d-flex position-relative h-60 border border-secondary">
      <Container>
        {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">*/}
          <Nav className="ml-auto position-absolute start-50 translate-middle-x">
            <NavDropdown title="Til tandlægen" id="basic-nav-dropdown" className="no-arrow-dropdown">
              <NavDropdown.Item href="#action/3.1">Procedure</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Tøj
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Værktøj</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Til tandplejeren" id="basic-nav-dropdown" className="no-arrow-dropdown">
              <NavDropdown.Item href="#action/3.1">Procedure</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Beklædning
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Parandontologi</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Til klinikken" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Procedure</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Uniform
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Værktøj</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Dekoration
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#tilbud">Tilbud</Nav.Link>
          </Nav>
        {/*</Navbar.Collapse>*/}
        <div className="d-flex gap-4 end-5">   
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket" viewBox="0 0 16 16">
        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"/>
        </svg>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;