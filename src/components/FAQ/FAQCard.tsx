import Card from 'react-bootstrap/Card';
import FAQAccordion from './FAQAccordian';
import { ReactNode } from 'react';

interface FAQCardProps {
    headline: string;
    children: ReactNode;
}

function FAQCard({ headline, children }: FAQCardProps) {
  return (
    <Card
        style={{ width: "70%" }}
        className="mx-auto my-5">
      <Card.Header as="h5">{headline}</Card.Header>
      <Card.Body>
        <Card.Text>
            {children}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FAQCard;