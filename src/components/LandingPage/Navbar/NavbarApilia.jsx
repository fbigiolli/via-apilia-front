import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button, NavbarText } from "react-bootstrap";
import { Nav } from "react-bootstrap";

import './NavbarApilia.css'

function NavbarApilia() {
    return (
        <Container>
            <Navbar >
                <Container>
                    <Navbar.Brand href="#" className="mt-3 navbar">
                        <div className="d-flex align-items-center">
                            <ion-icon size="large" name="ice-cream"></ion-icon>
                            <NavbarText>Via Apilia</NavbarText>
                        </div>
                    </Navbar.Brand>

                    <Navbar.Collapse className="justify-content-end mt-3">
                        <Nav>
                            <Nav.Link href="#About">About</Nav.Link>
                        </Nav>
                        <div className="ms-4">
                            <Button className="consulta-button" variant="dark">Consultar pedido</Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
}

export default NavbarApilia;
