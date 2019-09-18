import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar sticky="top" bg="light" variant="light">
    <Navbar.Brand href="/">
      <i className="fas fa-rocket"/>{" "}
      <span>Rocket Insurance</span>
      </Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="/">Registration</Nav.Link>
      <Nav.Link href="/quote-overview">Quote Overview</Nav.Link>
    </Nav>
  </Navbar>
  )
}


export default Navigation
