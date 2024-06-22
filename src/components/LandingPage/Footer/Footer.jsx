import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container mt-5">
            <Container>
                <Row className='justify-content-center text-center'>
                    <Col xs={12}>
                        <div>
                            <img src={'ice-cream.svg'} alt="Ice Cream Icon" className='footer-icon'/> 
                            <h1 className="footer-title">Via Apilia</h1>
                        </div>
                    </Col>
                </Row>

                <hr className='footer-hr'></hr>

                <Row className='mt-4 text-center'>
                    <Col xs={12} >
                        <h1 className='footer-copyright'>2024 © Desarrollado por Felipe Ignacio Bigiolli.</h1>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default Footer;
