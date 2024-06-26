import React from 'react';
import { Card, Image, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomerQuote.css'; 

const CustomerQuote = () => {
    const imagePath = `${process.env.PUBLIC_URL}/${'gbeder.png'}`;

    return (
        <Card className='customer-quote-card d-flex align-items-start'>
            <Card.Body>
                <Card.Text className='quote-text'>
                    “Un gran helado, lo tomamos siempre antes de empezar el programa.”
                </Card.Text>
                <Row>
                    <Col xs="auto">
                        <Image src={imagePath} roundedCircle className='avatar-image' />
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