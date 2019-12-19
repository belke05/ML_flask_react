import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigator() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">
          <Link to="/">predict my salary</Link>
        </Nav.Link>
        <Nav.Link href="#features">
          <Link to="/imagesPage">Classify my image</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
