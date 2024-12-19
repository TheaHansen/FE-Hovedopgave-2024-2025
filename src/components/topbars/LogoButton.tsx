import { Navbar } from "react-bootstrap";
import LogoImage from "/images/logo/odontologicLogoSized.jpg";
import { useState, useEffect } from "react";

function LogoButton() {
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
      <Navbar.Brand href="/">
        <img
          src={LogoImage}
          width="100"
          height="auto"
          className="d-inline-block align-top"
          alt="Odontologic logo"
        />
      </Navbar.Brand>
    )
  );
}

export default LogoButton;
