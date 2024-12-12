import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../customCSS/navbar/icon.css";
import "../../customCSS/navbar/dropdown.css";
import SearchField from "../search/searchField";
import BasketDropdown from "../basket/BasketDropdown";
import { useBasket } from "../../context/BasketContext";


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
          <Nav.Link href="/tilbud">Tilbud</Nav.Link>
        </Nav>
        <div className="d-flex gap-4 end-5">
          <SearchField />
          <BasketDropdown />
        </div>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
