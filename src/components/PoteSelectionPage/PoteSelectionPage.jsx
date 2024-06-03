import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import PoteCard from '../PoteCard/PoteCard';
import SelectionPageHeader from '../SelectionPageHeader/SelectionPageHeader';

import './PoteSelectionPage.css';

function PoteSelectionPage({ selectedPote, handlePoteCardClick }) {
    return (
        <Container>
            <SelectionPageHeader
                headerTitle="Paso 1/2"
                headerSubtitle="Seleccioná el tamaño del pote"
            />

            <Row className="mt-5 justify-content-center">
                <Col xs={12} sm={6} lg={3} className="d-flex justify-content-center mb-3">
                    <PoteCard
                        imageSrc="/helados-1-4.jpg"
                        title="1/4 Kilo"
                        subtitle="Máximo 3 gustos"
                        cardId="250"
                        isSelected={selectedPote === "250"}
                        onClick={handlePoteCardClick}
                    />
                </Col>
                <Col xs={12} sm={6} lg={3} className="d-flex justify-content-center mb-3">
                    <PoteCard
                        imageSrc="/helados-1-4.jpg"
                        title="1/2 Kilo"
                        subtitle="Máximo 3 gustos"
                        cardId="500"
                        isSelected={selectedPote === "500"}
                        onClick={handlePoteCardClick}
                    />
                </Col>
                <Col xs={12} sm={6} lg={3} className="d-flex justify-content-center mb-3">
                    <PoteCard
                        imageSrc="/helados-1-4.jpg"
                        title="1 Kilo"
                        subtitle="Máximo 4 gustos"
                        cardId="1000"
                        isSelected={selectedPote === "1000"}
                        onClick={handlePoteCardClick}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default PoteSelectionPage;
