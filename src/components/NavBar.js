import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { IoPerson } from "react-icons/io5";
import { FaRegClock } from 'react-icons/fa';
import { FaWrench } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";
import { FaRProject } from "react-icons/fa6";
import './css/NavBar.css'

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" 
            sticky="top" 
            className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container className="section-container">
        <Navbar.Brand href="#" className="nav-title">Sean's Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link href="#about" className="nav-link">
              <IoPerson className="nav-icon" />About
            </Nav.Link>
            <Nav.Link href="#experience" className="nav-link">
              <FaRegClock className="nav-icon" />Experience
            </Nav.Link>
            <Nav.Link href="#skill" className="nav-link">
              <FaWrench className="nav-icon" />Skills
            </Nav.Link>
            <Nav.Link href="#project" className="nav-link">
              <FaRProject className="nav-icon" />Projects
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link">
              <FaPhone className="nav-icon" />Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
