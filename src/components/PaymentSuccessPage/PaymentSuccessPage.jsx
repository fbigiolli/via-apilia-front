import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import './PaymentSuccessPage.css'
import { useNavigate } from 'react-router-dom';



function PaymentSuccessPage() {
    let navigate = useNavigate();

    const navigateToLanding = () => {
        navigate('/');
    };

    return (
        <Row className="main-body justify-content-center">
            <Col md={12} className="mt-5 text-center success-body-col">
                <div className='header-title'>Recibimos tu compra!</div>
                <div className="header-subtitle mt-2">En breve nos pondremos en contacto con vos mediante Whatsapp para avisarte cuando el repartidor este yendo.</div>
                <Row className='justify-content-center text-center'>
                    <Col xs={12}>
                        <div>
                            <img src={'via-apilia-success.svg'} alt="Ice Cream Icon" className='success-page-icon'/> 
                            <h1 className="success-page-via-apilia">Via Apilia</h1>
                        </div>
                    </Col>
                </Row>

                <p className="text-muted mt-5">Mientras tanto... te invitamos a que sigas mirando nuestra página, o hagas otro pedido ;)</p>
                <Button onClick={navigateToLanding} className='checkout-button mt-2' variant='dark'>Volver al inicio</Button>
            </Col>
        </Row>
    );
};

export default PaymentSuccessPage;