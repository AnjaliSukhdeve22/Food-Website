// OffcanvasNavbar.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';
import '../style/Offcanvasnavcar.css'
function OffcanvasNavbar() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="custom-navbar mb-3" sticky="top">
          <Container fluid>
            <Navbar.Brand href="#">KindKitchen</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
               <Nav className="justify-content-end flex-grow-1 pe-3">
  <Nav.Link as={Link} to="/">Home</Nav.Link>
  <Nav.Link as={Link} to="/about">About</Nav.Link>


                  <NavDropdown
                    title="Menu"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
  <NavDropdown.Item as={Link} to="/menu/starters">Starters</NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/menu/maincourse">Main Course</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/menu/Dessert">Desserts</NavDropdown.Item>

                    <NavDropdown.Item as={Link} to='/menu/Beverages'>Beverages</NavDropdown.Item>
                  </NavDropdown>
                    <Nav.Link as={Link} to="Gallery">Gallery</Nav.Link>
<Nav.Link as={Link} to="/SpecialOffers">SpecialOffers</Nav.Link>
<Nav.Link as={Link} to="/Contact">Contact</Nav.Link>

<Nav.Link as={Link} to='/LoginPage'>Login</Nav.Link>

                </Nav>
               
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasNavbar;
