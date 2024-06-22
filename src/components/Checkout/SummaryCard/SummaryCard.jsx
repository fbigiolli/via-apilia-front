import React from 'react';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { Row, Col, Container, Card, CardTitle, CardBody } from 'react-bootstrap';
import './SummaryCard.css';



const SummaryCard = ({ poteSizeText, selectedGustos, price }) => {
    return (
        <Container>
            <Row className='justify-content-center mb-3'>
                <Col xs={12} className='checkout-body'>
                    <Card className='summary-card'>
                        <CardTitle className='summary-title mt-3'>Resumen del pedido</CardTitle>
                        <CardBody className='mt-1'>
                            <Row>
                                <Col xs={12}>
                                    <p>
                                        <span className="text-muted">Tamaño:</span>{' '}
                                        <span className='highlighted'>{poteSizeText}</span>
                                    </p>
                                    <hr></hr>
                                </Col>

                                <Col xs={12}>
                                    <p class="text-muted">Gustos:</p>
                                </Col>

                                <Col xs={12} className='highlighted'>
                                    {selectedGustos.map((gusto, index) => (
                                        <span key={index}>
                                            {gusto}
                                            <br />
                                        </span>
                                    ))}
                                    <hr></hr>
                                </Col>
                                <Col xs={12}>
                                    <p><span className="text-muted">Total:</span> <span className='price'>{price}</span></p>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SummaryCard;