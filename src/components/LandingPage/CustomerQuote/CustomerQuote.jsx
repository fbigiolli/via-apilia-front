import React from 'react';
import { Card, Image, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomerQuote.css'; // Importa el archivo CSS

const CustomerQuote = () => {
    return (
        <Card className='customer-quote-card d-flex align-items-start'>
            <Card.Body>
                <Card.Text className='quote-text'>
                    “El unico helado que no me hizo cagarme encima hasta el momento”
                </Card.Text>
                <Row>
                    <Col xs="auto">
                        <Image src='gbeder.png' roundedCircle className='avatar-image' />
                    </Col>
                    <Col>
                        <div className='user-info'>
                            <div className='user-name'>German Beder</div>
                            <div className='user-company'>Paren La Mano</div>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CustomerQuote;