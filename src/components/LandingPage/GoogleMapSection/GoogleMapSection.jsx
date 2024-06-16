import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleMap from '../GoogleMap/GoogleMap'
import useIntersectionObserver from '../../Hooks/UseIntersectionObserver';


const GoogleMapSection = () => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <div ref={ref} className={`customer-quote-section ${isIntersecting ? 'animate' : ''}`}>
            <Container>
                <Row>
                    <Col xs={12} className='mt-5'>
                        <h1 className='title'>Encontranos</h1>
                        <p className='subtitle'>Si preferis la presencialidad, podes encontrarnos en nuestro local en Cabildo y Juramento</p>
                    </Col>
                </Row>

                <Row className='mx-auto'>
                    <Col xs={12}  className='mt-2'>
                        <GoogleMap/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GoogleMapSection;
