import { Button } from "react-bootstrap";
import "../customCSS/navbar/icon.css";
import { useEffect, useState } from "react";

function ScrollspyTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <Button
        variant="dark"
        className="rounded-circle d-flex justify-content-center align-items-center end-10 position-fixed bottom-10 end-5"
        style={{ width: "3rem", height: "3rem" }}
        href="#topbar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-arrow-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
          />
        </svg>
      </Button>
    )
  );
}

export default ScrollspyTop;
