import Accordion from 'react-bootstrap/Accordion';
import "../../customCSS/faq.css"

interface FAQAccordionProps {
    question: string;
    answer: string;
}

function FAQAccordion({ question, answer }: FAQAccordionProps) {
  return (
    <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey={question}>
        <Accordion.Header>{question}</Accordion.Header>
        <Accordion.Body className="fw-light">
            {answer}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FAQAccordion;