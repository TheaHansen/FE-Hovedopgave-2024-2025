import { Form } from "react-bootstrap";

function ShipmentOptions() {
  return (
    <Form className="d-flex gap-2 flex-column">
      <Form.Group>
        <Form.Check type="radio" name="delivery" label="GLS" />
      </Form.Group>

      <Form.Group>
        <Form.Check type="radio" name="delivery" label="PostNord" />
      </Form.Group>
    </Form>
  );
}

export default ShipmentOptions;
