import { Container, Nav } from "react-bootstrap";

function Footer() {
    return (
        <Nav id="kontakt" className="flex-column pb-3 pt-3 border border-secondary-emphasis">
            <Container className="text-muted">
                <Nav.Item className="pb-2"> Kontakt oplysninger</Nav.Item>
                <Nav.Item>Tandlægevej 48</Nav.Item>
                <Nav.Item>DK-2400 København</Nav.Item>
                <Nav.Item className="pb-2">Danmark</Nav.Item>
                <Nav.Item>Tlf: +45 12 34 56 78</Nav.Item>
                <Nav.Item>odontologic-kontakt@odontologic.dk</Nav.Item>
                <Nav.Item>CVR 90876534</Nav.Item>
            </Container>
        </Nav>
    )
}

export default Footer;