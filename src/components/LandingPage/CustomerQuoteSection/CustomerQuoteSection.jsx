import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerQuote from '../CustomerQuote/CustomerQuote';

import './CustomerQuoteSection.css'

const CustomerQuoteSection = () => {
    return (
        <Container>
            <Row className='mt-5'>
                <Col xs={12} className='mt-5'>
                    <h1 className='title'>Reseñas</h1>
                    <p className='subtitle'>Lo que opinan las grandes personalidades sobre nuestro helado</p>
                </Col>
            </Row>

            <Row className='justify-content-center mx-auto'>
                <Col xs={12} md={6} xl={4} className='mt-2'>
                    <CustomerQuote />
                </Col>
                <Col xs={12} md={6} xl={4} className='mt-2'>
                    <CustomerQuote />
                </Col>
                <Col xs={12} md={6} xl={4} className='mt-2'>
                    <CustomerQuote />
                </Col>
            </Row>
        </Container>
    );
};

export default CustomerQuoteSection;