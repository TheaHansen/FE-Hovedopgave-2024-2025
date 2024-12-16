import { Form } from "react-bootstrap";
import "../../customCSS/checkOut/required-star.css";

function TermsAndConditionsCheckBox() {
  return (
    <Form>
      <Form.Group>
        <Form.Check
          type="checkbox"
          label={
            <>
              Jeg har læst og accepterer Odontologics vilkår og betingelser{" "}
              <span className="required-star">*</span>
            </>
          }
          required
        />
      </Form.Group>
    </Form>
  );
}

export default TermsAndConditionsCheckBox;
