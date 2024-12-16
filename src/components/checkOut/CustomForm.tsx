import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../../customCSS/checkOut/required-star.css";

function CustomForm() {
  return (
    <Form className="d-flex gap-4 flex-column">
      <Row>
        <Form.Group as={Col}>
          <Form.Label>
            Fornavn <span className="required-star">*</span>
          </Form.Label>
          <Form.Control type="text" required />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>
            Efternavn <span className="required-star">*</span>
          </Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
      </Row>

      <Form.Group>
        <Form.Label>
          Firmanavn <span className="required-star">*</span>
        </Form.Label>
        <Form.Control type="text" required />
      </Form.Group>

      <Form.Group>
        <Form.Label>
          Land <span className="required-star">*</span>
        </Form.Label>
        <Form.Select>
          <option>Danmark</option>
          <option>Sverige</option>
          <option>Norge</option>
          <option>Island</option>
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>
          Vejnavn og nummer <span className="required-star">*</span>
        </Form.Label>
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
        <Form.Label>
          Postnummer <span className="required-star">*</span>
        </Form.Label>
        <Form.Control type="text" required />
      </Form.Group>

      <Form.Group>
        <Form.Label>
          By <span className="required-star">*</span>
        </Form.Label>
        <Form.Control type="text" required />
      </Form.Group>

      <Form.Group>
        <Form.Label>
          Telefonnummer <span className="required-star">*</span>
        </Form.Label>
        <Form.Control type="text" required />
      </Form.Group>

      <Form.Group>
        <Form.Label>
          E-mailadresse <span className="required-star">*</span>
        </Form.Label>
        <Form.Control type="email" required />
      </Form.Group>

      <Form.Group>
        <Form.Check
          type="checkbox"
          label="Ja, jeg vil gerne tilmelde mig nyhedsbrev"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Bemærkninger til ordren (Valgfri)</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default CustomForm;
