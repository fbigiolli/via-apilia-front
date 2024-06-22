import React, { useState } from 'react';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { Row, Col, Container, Button, Form, InputGroup, Alert } from 'react-bootstrap';
import './Checkout.css';
import CardForm from '../CreditCardForm/CreditCardForm';
import SelectionPageHeader from '../PoteCreation/SelectionPageHeader/SelectionPageHeader'
import { useNavigate, useLocation } from 'react-router-dom';


const PaymentForm = () => {
    const location = useLocation();
    const { selectedGustos, poteSizeText, price } = location.state || {};

    const [tipoDePago, setTipoDePago] = useState(null);

    const setTarjeta = () => {
        setTipoDePago('tarjeta');
    };

    const setTransferencia = () => {
        setTipoDePago('transferencia');
    };

    let navigate = useNavigate();

    const navigateToLanding = () => {
        navigate('/');
    };

    return (
        <div className='main-body'>
            <Container>
                <Row className='justify-content-center text-center'>
                    <Col className='checkout-body'>
                        <SelectionPageHeader
                            headerTitle={"Checkout"}
                        />
                        <hr />


                        <div className='titles'>
                            <p >Pote Seleccionado: {poteSizeText}</p>
                        </div>

                        <div
                            className='titles'>
                            <p>Gustos seleccionados:</p>
                        </div>
                        {selectedGustos.map((gusto, index) => (
                            <span key={index}>
                                {gusto}
                                <br />
                            </span>
                        ))}
                        <hr />
                        <div className='price'>
                            <p >Total: {price}</p>
                        </div>
                        <hr />

                        <Row className='mb-3'>
                            <Col className='mb-2' xs={12}>
                                <div className='titles'>
                                    <p >Seleccioná el medio de pago:</p>
                                </div>
                            </Col>
                            <Col xs={6}>
                                <Button onClick={setTarjeta} className='checkout-button' variant='dark'>Tarjeta de Credito</Button>
                            </Col>
                            <Col xs={6}>
                                <Button onClick={setTransferencia} className='checkout-button' variant='dark'>Transferencia</Button>
                            </Col>
                        </Row>


                        {tipoDePago === 'tarjeta' && <CardForm
                            navigateFunction = {navigateToLanding}
                        />}
                        {tipoDePago === 'transferencia' &&
                            <Container className='transferencia-container'>
                                <Row >

                                    <p>Transferí a nuestro CBU: <strong>0000003100017775985106</strong> y dejanos un numero para contactarnos con vos una vez realizado el pago :)
                                    </p>

                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control
                                                type="tel"
                                                name="contacto"
                                                placeholder="Tu número de telefono"
                                                maxLength="3"
                                            />
                                            <InputGroup.Text>
                                                <ion-icon name="call-outline"></ion-icon>
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>

                                    <Alert className='mt-2' key={'info'} variant={'info'}>
                                        Este sitio es una demo, no se procesa ningun tipo de pago al tocar el botón.
                                        <strong> NO</strong> transfieras al CBU salvo que me quieras hacer una donación ;)
                                    </Alert>
                                    
                                    <Button onClick={navigateToLanding} className='checkout-button' variant='dark'>Confirmar pago</Button>
                                    
                                </Row>
                            </Container>}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PaymentForm;
