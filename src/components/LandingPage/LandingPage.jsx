import React from "react";

import './LandingPage.css'
import NavbarApilia from "./Navbar/NavbarApilia";
import { Container } from "react-bootstrap";
import MainBody from "./MainBody/MainBody";

function LandingPage() {
    return (
        <Container>
            <NavbarApilia />
            <MainBody/>
        </Container>
    );
}

export default LandingPage;
