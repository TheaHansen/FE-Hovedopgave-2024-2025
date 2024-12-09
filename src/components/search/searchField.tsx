import { useState } from "react";
import "../../customCSS/navbar/searchField.css"

function SearchField() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded((prev) => !prev);
    } ;
    
    return (
        <div className="search-box">
            
            <form className={`search-form ${isExpanded ? "expanded" : ""}`}>
                <input 
                type="text" 
                placeholder="Søg..."
                className={`search-input ${isExpanded ? "show" : "hide"}`} 
                />
            </form>
                <button 
                type="button"
                className="search-btn"
                aria-label="Toggle search"
                onClick={handleToggle} >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                    >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
            </button>

        </div>
    )
}

export default SearchField;