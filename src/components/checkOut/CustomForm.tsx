import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function CustomForm() {
  return (
    <Form className="d-flex gap-4 flex-column">
      <Row>
        <Form.Group as={Col}>
          <Form.Label>Fornavn</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Efternavn</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
      </Row>

      <Form.Group>
        <Form.Label>Firmanavn</Form.Label>
        <Form.Control type="text" required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Land</Form.Label>
        <Form.Select>
          <option>Danmark</option>
          <option>Sverige</option>
          <option>Norge</option>
          <option>Island</option>
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>Vejnavn og nummer</Form.Label>
        <Form.Control type="text" placeholder="Vejnavn og nummer" required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Lejlighed, værelse osv. (Valgfri)</Form.Label>
        <Form.Control
          type="text"
          placeholder="Lejlighed, værelse osv. (Valgfri)"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Postnummer</Form.Label>
        <Form.Control type="text" required />
      </Form.Group>

      <Form.Group>
        <Form.Label>By</Form.Label>
        <Form.Control type="text" required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Telefonnummer</Form.Label>
        <Form.Control type="text" required />
      </Form.Group>

      <Form.Group>
        <Form.Label>E-mailadresse</Form.Label>
        <Form.Control type="email" required />
      </Form.Group>

      <Form.Group>
        <Form.Check
          type="checkbox"
          label="Ja, jeg vil gerne tilmelde mig nyhedsbrev"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Bemærkninger til ordren</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default CustomForm;
