import CustomBreadcrumb from "../components/breadcrumb/Breadcrumb";
import FAQAccordion from "../components/FAQ/FAQAccordian";
import FAQCard from "../components/FAQ/FAQCard";
import faqData from "../components/FAQ/faq.json";
import CustomBreadcrumbItem from "../components/breadcrumb/Breadcrumb.interfaces";

interface FAQProps {
    breadcrumbItems: CustomBreadcrumbItem[];
}
function FAQ({ breadcrumbItems }: FAQProps) {
    return (
        <div className="container mt-4">
            {breadcrumbItems && <CustomBreadcrumb items={breadcrumbItems} />}
            <h1>Ofte stillede spørgsmål</h1>
            <FAQCard headline="Generelle spørgsmål">
                {faqData.general.map((item, index) => (
                    <FAQAccordion key={index} question={item.question} answer={item.answer} />
                ))}
            </FAQCard>
            <FAQCard headline="Ordre og Levering">
                {faqData.orders.map((item, index) => (
                    <FAQAccordion key={index} question={item.question} answer={item.answer} />
                ))} 
            </FAQCard>
            <FAQCard headline="Betaling">
                {faqData.payment.map((item, index) => (
                    <FAQAccordion key={index} question={item.question} answer={item.answer} />
                ))}
            </FAQCard>
            <FAQCard headline="Retur og bytte">
                {faqData.returns.map((item, index) => (
                    <FAQAccordion key={index} question={item.question} answer={item.answer} />
                ))}
            </FAQCard>
        </div>

    )
}

export default FAQ;