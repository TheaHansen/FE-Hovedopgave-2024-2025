import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../customCSS/navbar/icon.css";
import "../../customCSS/navbar/dropdown.css";
import SearchField from "../search/searchField";
import BasketDropdown from "../basket/BasketDropdown";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import LogoButton from "./LogoButton";

//Made together
function NavigationBar() {
  const [showRightDropdown, setShowRightDropdown] = useState(false);
  return (
    <div className="position-sticky top-0 custom-z-index bg-white">
    <Navbar
      style={{ height: "60px" }}
      className="d-flex position-relative h-60 border border-secondary"
    >
      <Container>
        <div className="start-5">
          <LogoButton />
        </div>
        <Nav className="ml-auto position-absolute start-50 translate-middle-x custom-z-index">
          <NavDropdown title="Til tandlægen" id="basic-nav-dropdown">
            <NavDropdown.ItemText
              onMouseEnter={() => setShowRightDropdown(true)}
              onMouseLeave={() => setShowRightDropdown(false)}
            >
              Procedurer
              {showRightDropdown && (
                <Dropdown
                  align="end"
                  className="position-absolute bg-white border rounded py-2"
                  style={{
                    left: "100%",
                    top: 0,
                    width: "10rem",
                  }}
                >
                  <Dropdown.Item as={Link} to="/amotio">
                    Amotio
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/endodonti">
                    Endodonti
                  </Dropdown.Item>
                </Dropdown>
              )}
            </NavDropdown.ItemText>
            <NavDropdown.Item as={Link} to="/instrumenter">
              Instrumenter
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Til tandplejeren" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Rens</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Parondontologi
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Til klinikken" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">Uniformer</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Indretning</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/tilbud" data-testid="offers-link">
            Tilbud
          </Nav.Link>
        </Nav>
        <div className="d-flex gap-4 end-5">
          <SearchField />
          <BasketDropdown />
        </div>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavigationBar;
