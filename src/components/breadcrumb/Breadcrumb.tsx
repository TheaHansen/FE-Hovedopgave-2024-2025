import Breadcrumb from "react-bootstrap/Breadcrumb";
import "../../customCSS/breadcrumb.css";
import { Link } from "react-router-dom";
import CustomBreadcrumbItem from "../breadcrumb/Breadcrumb.interfaces";


interface BreadcrumbProps {
  items: CustomBreadcrumbItem[];
}

function CustomBreadcrumb({ items }: BreadcrumbProps) {
  return (
    <Breadcrumb className="black">
      {items.map((item, index) => (
        <Breadcrumb.Item
        key={index}
        active={index === items.length - 1}
        className={
          index === items.length - 1
            ? "active-breadcrumb"
            : "clickable-breadcrumb"
        }
        data-testid="breadcrumb-item"
      >
        {index === items.length - 1 ? (
          item.label 
        ) : (
          <Link to={item.path || "#"}>{item.label}</Link>
        )}
      </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}

export default CustomBreadcrumb;
