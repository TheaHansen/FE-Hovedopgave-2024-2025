import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type ButtonProps = {
  to: string;
  children: React.ReactNode;
};

const ToPageButton: React.FC<ButtonProps> = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Button variant="dark" onClick={handleClick}>
      {children}
    </Button>
  );
};

export default ToPageButton;
