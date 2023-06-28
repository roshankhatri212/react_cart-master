import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand className="text-white" onClick={() => navigate("/")}>
          MEORCART
        </Navbar.Brand>

        <Navbar.Brand className="text-white" onClick={() => navigate("/cart")}>
          CART
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
