import { Button, Col, Row } from "react-bootstrap";
import BasketItem from "../components/basket/BasketItem";
import CustomForm from "../components/checkOut/CustomForm";
import PaymentOptions from "../components/checkOut/PaymentOptions";
import TermsAndConditionsCheckBox from "../components/checkOut/TermsAndConditionsCheckBox";
import { useBasket } from "../context/BasketContext";
import "../customCSS/checkOut/forms.css";
import ShipmentOptions from "../components/checkOut/ShipmentOptions";

function Checkout() {
  const { basketItems } = useBasket();
  return (
    <div className="px-5 py-4">
      <Row>
        <Col>
          <h2 className="p-3">Faktureringsoplysninger</h2>
          <div className="checkOutForm">
            <CustomForm />
          </div>
        </Col>

        <Col>
          <h2 className="p-3">Oversigt</h2>
          <div className="checkOutForm">
            {basketItems.map((item) => (
              <BasketItem key={item.id} id={item.id} quantity={item.quantity} />
            ))}
          </div>

          <h2 className="p-3">Forsendelse</h2>
          <div className="checkOutForm mb-4">
            <ShipmentOptions />
          </div>
          <div className="checkOutForm mb-4">
            <PaymentOptions />
          </div>
          <div className="checkOutForm mb-4">
            <TermsAndConditionsCheckBox />
          </div>
          <Button variant="dark">Gå til betaling</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Checkout;
