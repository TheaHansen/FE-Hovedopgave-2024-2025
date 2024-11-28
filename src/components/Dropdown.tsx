import { DropdownItem } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../customCSS/dropdown.css"

interface FilterDropdownProps {
    title: string;
    dropdownLabels: string[];
}

function FilterDropdown({ title, dropdownLabels }: FilterDropdownProps) {
  return (
    <DropdownButton id="dropdown-basic-button" className="me-3 custom-dropdown" title={title}>
        
    {dropdownLabels.map((label, index) => (
        <Dropdown.Item key={index} href={`#/action-${index + 1}`} className="dropdown-item">
        {label}
        </Dropdown.Item>
    ))}

    </DropdownButton>

  );
}

export default FilterDropdown;