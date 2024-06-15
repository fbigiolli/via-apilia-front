import React from 'react';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { Row, Col, Container } from 'react-bootstrap';
import './Checkout.css';
import CardForm from '../CreditCardForm/CreditCardForm';
import SelectionPageHeader from '../PoteCreation/SelectionPageHeader/SelectionPageHeader'

const PaymentForm = () => {
    return (
        <div className='main-body'>
            <Container>
                <Row className='justify-content-center text-center'>
                    <Col className='checkout-body'>
                        <SelectionPageHeader
                            headerTitle={"Checkout"}
                        />

                        <div className='titles'>
                            <p >Pote Seleccionado: 1/4kg</p>
                        </div>

                        <div
                            className='titles'>
                        </div>
                        <p>Gustos seleccionados:</p>
                        <span>Dulce de leche</span><br />
                        <span>Limon</span><br />
                        <span>Crema del Cielo</span>

                        <hr />

                        <div className='price'>
                            <p >Total: $3000</p>
                        </div>

                        <CardForm />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PaymentForm;
