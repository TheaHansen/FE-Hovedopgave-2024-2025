import { Form } from "react-bootstrap";

function TermsAndConditionsCheckBox() {
  return (
    <Form>
      <Form.Group>
        <Form.Check
          type="checkbox"
          label="Jeg har læst og accepterer Odontologics vilkår og betingelser"
        />
      </Form.Group>
    </Form>
  );
}

export default TermsAndConditionsCheckBox;
