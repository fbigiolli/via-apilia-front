
import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
// import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { Row, Col, Form, Button, InputGroup, Container } from 'react-bootstrap';
import './CreditCardForm.css'; 

const CardForm = () => {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        setState((prev) => ({ ...prev, [name]: value }));
    };

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    };

    return (
        <>  
            <Container >
                <Cards
                    number={state.number}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    name={state.name}
                    focused={state.focus}
                />

                <Row className='mt-4'>
                    <Col  className='mx-auto'>
                        <Form>
                            <Row className='mb-3'>
                                <Form.Group>
                                    <InputGroup>
                                        <Form.Control
                                            type="tel"
                                            name="number"
                                            placeholder="Card Number"
                                            value={state.number}
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                            maxLength="16"
                                        />
                                        <InputGroup.Text>
                                            <ion-icon name="card-outline"></ion-icon>
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                            </Row>

                            <Row className='mb-3'>
                                <Form.Group>
                                    <InputGroup>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Cardholder Name"
                                            value={state.name}
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                        />
                                        <InputGroup.Text>
                                            <ion-icon name="person-outline"></ion-icon>
                                        </InputGroup.Text>
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
                                            />
                                            <InputGroup.Text>
                                                <ion-icon name="calendar-outline"></ion-icon>
                                            </InputGroup.Text>
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
                                            />
                                            <InputGroup.Text>
                                                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Button className="mt-3 checkout-button" variant='dark' type="submit">
                                <span>Submit</span>
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CardForm;