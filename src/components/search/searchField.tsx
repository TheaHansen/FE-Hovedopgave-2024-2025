import { useRef, useState } from "react";
import "../../customCSS/navbar/searchField.css";
import "../../customCSS/navbar/searchDropdown.css";
import { getRequest } from "../../services/requests";
import SearchResult from "./SearchResult.interfaces";
import { useNavigate } from "react-router-dom";

function SearchField() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleToggle = () => {
        setIsExpanded((prev) => {
            if (!prev) {
                setTimeout(() => inputRef.current?.focus(), 100); // Focus after expanding
            }
            return !prev;
        });
    };

    const handleSearch = async () => {
        if (!searchQuery.trim()) {
            setSearchResults([]);
            setIsDropdownVisible(false);
            return;
        }

        try {
            const data = await getRequest(
                `products/search?name=${encodeURIComponent(searchQuery)}`
            );

            if (data) {
                setSearchResults(data);
                setIsDropdownVisible(true);
            } else {
                setSearchResults([]);
                setIsDropdownVisible(false);
            }
        } catch (error) {
            console.error("Error fetching search results: ", error);
            setSearchResults([]);
            setIsDropdownVisible(false);
            alert("Der er sket en fejl");
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);

        if (value.trim()) {
            handleSearch();
        } else {
            setSearchResults([]);
            setIsDropdownVisible(false);
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log("In handleblur");
        
        const nextFocus = e.relatedTarget as HTMLElement;
        if (nextFocus && nextFocus.classList.contains("search-dropdown-item")) {
            return;
        }

        setTimeout(() => {
            setIsDropdownVisible(false);
        }, 100); 
    };

    const handleResultClick = (id: number) => {
        console.log("in handleresultclick");
        navigate(`/product/${id}`);
        setSearchQuery("");
        setIsDropdownVisible(false);
    };

    const handleFormSubit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search-results?query=${encodeURIComponent(searchQuery)}`);
            setSearchQuery("");
        }
    }

    return (
        <div className="search-box">
            <form className={`search-form ${isExpanded ? "expanded" : ""}`} onSubmit={handleFormSubit}>
                <input
                    type="text"
                    placeholder="Søg..."
                    className={`search-input ${isExpanded ? "show" : "hide"}`}
                    value={searchQuery}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    ref={inputRef}
                />
            </form>
            <button
                type="button"
                className="search-btn"
                aria-label="Toggle search"
                onClick={handleToggle}
            >
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

            {isDropdownVisible && (
                <div className="search-dropdown">
                    {searchResults.length > 0 ? (
                        searchResults.map((result) => (
                            <div
                                key={result.id}
                                className="search-dropdown-item"
                                tabIndex={0} //make it focusable for onblur to work
                                onMouseDown={() => handleResultClick(result.id)}
                            >
                                {result.title}
                            </div>
                        ))
                    ) : (
                        <div className="search-dropdown-item">No results found</div>
                    )}
                </div>
            )}
        </div>
    );
}

export default SearchField;
