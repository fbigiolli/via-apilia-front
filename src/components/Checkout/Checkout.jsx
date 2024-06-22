import React, { useState } from 'react';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { Row, Col, Container, Button, Form, InputGroup, Alert, Card, CardTitle, CardBody, FormLabel, Spinner } from 'react-bootstrap';
import './Checkout.css';
import CardForm from '../CreditCardForm/CreditCardForm';
import SelectionPageHeader from '../PoteCreation/SelectionPageHeader/SelectionPageHeader';
import { useNavigate, useLocation } from 'react-router-dom';
import SummaryCard from './SummaryCard/SummaryCard';

const PaymentForm = () => {
    const location = useLocation();
    const { selectedGustos, poteSizeText, price } = location.state || {};

    const [tipoDePago, setTipoDePago] = useState(null);
    const [proccesingPayment, setProccesingPayment] = useState(false);

    const setTarjeta = () => {
        setTipoDePago('tarjeta');
    };

    const setTransferencia = () => {
        setTipoDePago('transferencia');
    };

    let navigate = useNavigate();

    const navigateToLanding = () => {
        setProccesingPayment(true);

        setTimeout(() => {
            navigate('/paymentSuccess');
        }, 3000);
    };

    return (
        <div className='main-body'>
            <Container>
                <Row className='justify-content-center text-center entrance-animation'>
                    <Col xs={12} className='mb-5'>
                        <SelectionPageHeader headerTitle={"Checkout"} />
                    </Col>

                    {/* SummaryCard for mobile view */}
                    <Col xs={12} className='d-md-none mb-3'>
                        <SummaryCard
                            poteSizeText={poteSizeText}
                            selectedGustos={selectedGustos}
                            price={price}
                            setTarjeta={setTarjeta}
                            setTransferencia={setTransferencia}
                        />
                    </Col>

                    <Col xs={12} md={6}>
                        <Card className='summary-card forms-card mb-3'>
                            <CardTitle className='summary-title mt-3'>Informacion de contacto</CardTitle>
                            <CardBody className='text-start mt-1'>
                                <p className="text-muted">Te pedimos un número de teléfono para poder avisarte sobre cualquier inconveniente que pudiera llegar a ocurrir, y para notificarte cuando esté yendo el repartidor.</p>
                                <Form.Group>
                                    <FormLabel className='text-muted'>Numero de telefono:</FormLabel>
                                    <InputGroup>
                                        <Form.Control
                                            type="tel"
                                            name="contacto"
                                            placeholder="Tu número de telefono"
                                            maxLength="15"
                                        />
                                        <InputGroup.Text>
                                            <ion-icon name="call-outline"></ion-icon>
                                        </InputGroup.Text>
                                    </InputGroup>

                                    <FormLabel className='mt-3 text-muted'>Direccion de entrega:</FormLabel>
                                    <InputGroup>
                                        <Form.Control
                                            type="dir"
                                            name="direccion"
                                            placeholder="Tu dirección"
                                            maxLength="20"
                                        />
                                        <InputGroup.Text>
                                            <ion-icon name="location-outline"></ion-icon>
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>

                                <Row className='mb-2 mt-3 checkout-body'>
                                    <Col xs={12}>
                                        <p className="text-muted">Seleccioná el medio de pago:</p>
                                    </Col>
                                    <Col xs={6}>
                                        <Button onClick={setTarjeta} className='checkout-button' variant='dark'>Tarjeta de Credito</Button>
                                    </Col>
                                    <Col xs={6}>
                                        <Button onClick={setTransferencia} className='checkout-button' variant='dark'>Transferencia</Button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>

                        {tipoDePago != null && <Card className='mb-3'>
                            <CardTitle className='summary-title mt-3'>Datos de pago</CardTitle>
                            <CardBody>
                                <Row className='justify-content-center mt-3'>
                                    <Col xs={12} className='checkout-body'>
                                        {tipoDePago === 'tarjeta' && <CardForm proccesingPayment={proccesingPayment} navigateFunction={navigateToLanding} />}
                                        {tipoDePago === 'transferencia' &&
                                            <Container className='transferencia-container'>
                                                <Row >
                                                    <p>Transferí a nuestro CBU: <strong>0000003100017775985106</strong> y confirmá el pago una vez hecha la transferencia.</p>

                                                    <Alert className='mt-2' key={'info'} variant={'info'}>
                                                        Este sitio es una demo, no se procesa ningun tipo de pago al tocar el botón.
                                                        <strong> NO</strong> transfieras al CBU salvo que me quieras hacer una donación ;)
                                                    </Alert>

                                                    <Button onClick={navigateToLanding} className='checkout-button mb-3' variant='dark'>
                                                        <span>Confirmar pago</span>
                                                        {proccesingPayment && <Spinner className='ms-2'
                                                            as="span"
                                                            animation="grow"
                                                            size="sm"
                                                            role="status"
                                                            aria-hidden="true"
                                                        />}
                                                    </Button>
                                                </Row>
                                            </Container>}
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>}
                    </Col>

                    <Col xs={12} md={4} className="d-none d-md-block">
                        <div className="sticky-summary">
                            <SummaryCard
                                poteSizeText={poteSizeText}
                                selectedGustos={selectedGustos}
                                price={price}
                                setTarjeta={setTarjeta}
                                setTransferencia={setTransferencia}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PaymentForm;