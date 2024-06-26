import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import { Row, Col, Form, Button, InputGroup, Container, Alert, Spinner } from 'react-bootstrap';
import './CreditCardForm.css';

const CardForm = ({ navigateFunction, proccesingPayment }) => {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const [errors, setErrors] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: ''
    });

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        setState((prev) => ({ ...prev, [name]: value }));
    };

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        if (!state.number || !/^\d{13,18}$/.test(state.number)) {
            newErrors.number = 'Número de tarjeta inválido (13-18 dígitos)';
            isValid = false;
        }

        if (!state.expiry || !/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(state.expiry)) {
            newErrors.expiry = 'Fecha de expiración inválida (MM/YY)';
            isValid = false;
        } else {
            const [month, year] = state.expiry.split('/').map(Number);
            const currentDate = new Date();
            const expiryDate = new Date(`20${year}`, month);
            if (expiryDate <= currentDate) {
                newErrors.expiry = 'La tarjeta ha expirado';
                isValid = false;
            }
        }

        if (!state.cvc || !/^\d{3}$/.test(state.cvc)) {
            newErrors.cvc = 'CVC inválido (3 dígitos)';
            isValid = false;
        }

        if (!state.name || !/^[a-zA-Z\s.]+$/.test(state.name)) {
            newErrors.name = 'Nombre del propietario inválido (solo letras, espacios y puntos)';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (validateForm()) {
            navigateFunction();
        }
    };

    return (
        <>
            <Container className='credit-card-form-container'>
                <Cards
                    number={state.number}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    name={state.name}
                    focused={state.focus}
                />

                <Row className='mt-4'>
                    <Col className='mx-auto'>
                        <Form onSubmit={handleSubmit}>
                            <Row className='mb-3'>
                                <Form.Group>
                                    <InputGroup>
                                        <Form.Control
                                            type="tel"
                                            name="number"
                                            placeholder="Número de tarjeta"
                                            value={state.number}
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                            maxLength="18"
                                            isInvalid={!!errors.number}
                                        />
                                        <InputGroup.Text>
                                            <ion-icon name="card-outline"></ion-icon>
                                        </InputGroup.Text>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.number}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>

                            <Row className='mb-3'>
                                <Form.Group>
                                    <InputGroup>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Nombre del propietario"
                                            value={state.name}
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                            isInvalid={!!errors.name}
                                        />
                                        <InputGroup.Text>
                                            <ion-icon name="person-outline"></ion-icon>
                                        </InputGroup.Text>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.name}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>

                            <Row>
                                <Col xs={6}>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control
                                                type="tel"
                                                name="expiry"
                                                placeholder="MM/YY"
                                                value={state.expiry}
                                                onChange={handleInputChange}
                                                onFocus={handleInputFocus}
                                                maxLength="5"
                                                isInvalid={!!errors.expiry}
                                            />
                                            <InputGroup.Text>
                                                <ion-icon name="calendar-outline"></ion-icon>
                                            </InputGroup.Text>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.expiry}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Col>

                                <Col xs={6}>
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control
                                                type="tel"
                                                name="cvc"
                                                placeholder="CVC"
                                                value={state.cvc}
                                                onChange={handleInputChange}
                                                onFocus={handleInputFocus}
                                                maxLength="3"
                                                isInvalid={!!errors.cvc}
                                            />
                                            <InputGroup.Text>
                                                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                                            </InputGroup.Text>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.cvc}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Alert className='mt-2' key={'info'} variant={'info'}>
                                Este sitio es una demo, no se procesa ningun tipo de pago al tocar el botón.
                                <strong> NO</strong> transfieras al CBU salvo que me quieras hacer una donación ;)
                            </Alert>

                            <Button type="submit" className="mb-3 checkout-button" variant='dark'>
                                <span>Pagar</span>
                                {proccesingPayment && <Spinner className='ms-2'
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />}
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CardForm;
