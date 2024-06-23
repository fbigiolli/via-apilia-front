import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarText } from "react-bootstrap";
import { Nav } from "react-bootstrap";

import './NavbarApilia.css'

function NavbarApilia() {
    return (
        <Container>
            <Navbar expand="sm">
                <Container>
                    <Navbar.Brand href="#" className="mt-3 navbar">
                        <div className="d-flex align-items-center">
                            <ion-icon size="large" name="ice-cream"></ion-icon>
                            <NavbarText>Via Apilia</NavbarText>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end mt-3">
                        <Nav className="ms-3">
                            <Nav.Link /*href="#Resenas"*/>Reseñas</Nav.Link>
                            <Nav.Link /*href="#Encontranos"*/>Encontranos</Nav.Link>
                        </Nav>
                
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
}

export default NavbarApilia;