import { Button, Col, Row } from "react-bootstrap";
import CustomForm from "../components/checkOut/CustomForm";
import PaymentOptions from "../components/checkOut/PaymentOptions";
import TermsAndConditionsCheckBox from "../components/checkOut/TermsAndConditionsCheckBox";
import { useBasket } from "../context/BasketContext";
import "../customCSS/checkOut/forms.css";
import ShipmentOptions from "../components/checkOut/ShipmentOptions";
import OrderList from "../components/checkOut/OrderList";

function Checkout() {
  const { basketItems } = useBasket();
  return (
    <div className="px-5 py-4">
      <Row>
        <Col>
          <h2 className="p-3 text-center">Faktureringsoplysninger</h2>
          <div className="check-out-form">
            <CustomForm />
          </div>
        </Col>

        <Col>
          <h2 className="p-3 text-center">Oversigt</h2>
          <div className="check-out-form">
            <OrderList />
          </div>

          <h2 className="p-3 text-center">Forsendelse</h2>
          <div className="check-out-form mb-4">
            <ShipmentOptions />
          </div>
          <div className="check-out-form mb-4">
            <PaymentOptions />
          </div>
          <div className="check-out-form mb-4">
            <TermsAndConditionsCheckBox />
          </div>
          <Button variant="dark">Gå til betaling</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Checkout;
