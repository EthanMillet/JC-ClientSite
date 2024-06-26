import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './pages/styles/nav.css'

function NavBar() {

    const themes = {
      theme1 : "theme1",
      theme2 : "theme2",
      theme3 : "theme3"
    }

    return (


            <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Joy In Christ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="navButton">HOME</Nav.Link>
            <Nav.Link href="/about" className="navButton">ABOUT</Nav.Link>
            <Nav.Link href="/contact" className="navButton">CONTACT</Nav.Link>
            
            <NavDropdown title="KNOW THE SAVIOR" id="basic-nav-dropdown">
              
              <Link className="navButton" to="/content" state={{from: themes.theme1}}>Who Is Jesus Christ</Link>
              <Link className="navButton" to="/content" state={{from: themes.theme2}}>What Has Jesus Christ Done</Link>
              <Link className="navButton"to="/content" state={{from: themes.theme3}}>What Is The Doctrine of Jesus Christ</Link> 
            
            </NavDropdown>            
            
            <NavDropdown title="RESOURCES" id="basic-nav-dropdown">
              
              <NavDropdown.Item className="navButton" href="https://www.churchofjesuschrist.org/?lang=eng">Latter Day Saints</NavDropdown.Item>
              <NavDropdown.Item className="navButton" href="https://www.churchofjesuschrist.org/welcome/find-a-church?lang=eng">Find a Church</NavDropdown.Item>
              <NavDropdown.Item className="navButton" href="https://www.churchofjesuschrist.org/comeuntochrist/lp/basic-beliefs/meet-with-missionaries?lang=eng">
              Meet With Missionaries
              </NavDropdown.Item>
              <NavDropdown.Item className="navButton" href="https://www.churchofjesuschrist.org/comeuntochrist/lp/basic-beliefs/book-of-mormon?lang=eng">Get a Book of Mormon</NavDropdown.Item>
            
            </NavDropdown>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       

    );
}

  
  export default NavBar;