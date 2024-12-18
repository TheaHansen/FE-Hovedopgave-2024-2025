import { Form } from "react-bootstrap";

function PaymentOptions() {
  return (
    <Form className="d-flex gap-2 flex-column">
      <Form.Group>
        <Form.Check type="radio" name="payment" label="Kreditkort" />
      </Form.Group>

      <Form.Group>
        <Form.Check type="radio" name="payment" label="Mobilepay" />
      </Form.Group>
    </Form>
  );
}

export default PaymentOptions;
