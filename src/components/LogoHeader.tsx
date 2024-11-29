import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LogoImage from "../images/logo/odontologicLogoSized.jpg";

//Made by Thea
function LogoHeader() {
  return (
    <Navbar>
      <Container className="justify-content-center">
        <Navbar.Brand href="/">
          <img
            src={LogoImage}
            width="200"
            height="120"
            className="d-inline-block align-top"
            alt="Odontologic logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default LogoHeader;
