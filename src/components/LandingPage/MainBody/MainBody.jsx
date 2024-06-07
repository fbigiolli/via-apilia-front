import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './MainBody.css';

const MainBody = () => {
    return (
        <Container className="mi-container">
            <Row className="justify-content-center align-items-center">
                <Col xs={12}>
                    <h1 className="mi-title">Via Apilia</h1>
                </Col>
            </Row>
            <Row className="justify-content-center align-items-center">
                <Col xs={12}>
                    <p className="mi-subtitle">El placer del helado hecho arte.</p>
                </Col>
            </Row>
            <Row className="justify-content-center align-items-center">
                <Button variant="dark" className="mi-button">
                    <span className="mi-button-text">Comenzar Pedido</span>
                </Button>
            </Row>
        </Container>
    );
}

export default MainBody;
