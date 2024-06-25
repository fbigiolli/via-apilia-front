import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './MainBody.css';
import { useNavigate } from 'react-router-dom';

const MainBody = () => {
    let navigate = useNavigate();

    const navigateToPoteSelectionPage = () => {
        navigate('/poteSelection');
    };

    const imagePath = `${process.env.PUBLIC_URL}/${'MainBodyImage.jpg'}`;

    return (
        <Container className="main-container text-center">
            <Row>
                <Col xs={12} className='d-flex justify-content-center '>
                    <h1 className="main-title">Via Apilia</h1>
                </Col>

                <Col xs={12} className='d-flex justify-content-center  mt-3'>
                    <p className="main-subtitle">El placer del helado hecho arte.</p>
                </Col>

                <Col xs={12} className='d-flex justify-content-center mt-2 mb-5'>
                    <Button onClick={navigateToPoteSelectionPage} variant="dark" className="pedido-button">
                        <span>Comenzar Pedido</span>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className='mt-5 mb-3'>
                    <Image src={imagePath} rounded fluid></Image>
                </Col>
            </Row>
        </Container>
    );
}

export default MainBody;
