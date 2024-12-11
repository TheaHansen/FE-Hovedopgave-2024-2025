import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../customCSS/navbar/icon.css";
import "../../customCSS/navbar/dropdown.css";
import BasketDropdown from "../basket/BasketDropdown";
import { useBasket } from "../../context/BasketContext";
import { Link } from "react-router-dom";

//Made together
function NavigationBar() {
  return (
    <Navbar
      style={{ height: "60px" }}
      className="d-flex position-relative h-60 border border-secondary"
    >
      <Container>
        <Nav className="ml-auto position-absolute start-50 translate-middle-x custom-z-index">
          <NavDropdown title="Til tandlægen" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Procedure</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Tøj</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Værktøj</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Til tandplejeren" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Procedure</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Beklædning</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Parandontologi
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Til klinikken" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Procedure</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Uniform</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Værktøj</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Dekoration</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/tilbud" data-testid="offers-link">
            Tilbud
          </Nav.Link>
        </Nav>
        <div className="d-flex gap-4 end-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <BasketDropdown />
        </div>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
