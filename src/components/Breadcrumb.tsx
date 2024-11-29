import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "../customCSS/breadcrumb.css"

interface BreadcrumbProps {
    items: string[];
}

function CustomBreadcrumb({ items }: BreadcrumbProps) {
    return (
        <Breadcrumb className="black">
          {items.map((item, index) => (
            <Breadcrumb.Item 
            key={index} 
            active={index === items.length - 1}
            className={index === items.length - 1 ? "active-breadcrumb" : "clickable-breadcrumb"}>
              {item}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      );
};

export default CustomBreadcrumb;