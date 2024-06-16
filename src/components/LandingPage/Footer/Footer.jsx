import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container mt-5">
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1 className="footer-title">Via Apilia</h1>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    {/* <Col xs={12} sm={6}>
                        <ion-icon size="large" name="logo-facebook" ></ion-icon>
                        <ion-icon size="large" name="logo-linkedin" ></ion-icon>
                        <ion-icon size="large" name="logo-youtube" ></ion-icon>
                        <ion-icon size="large" name="logo-instagram"></ion-icon>
                    </Col> */}


                    <Col xs={12} sm={6} /*className='text-end'*/>
                        <h1 className='footer-copyright'>2024 © Desarrollado por Felipe Ignacio Bigiolli.</h1>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Footer;
