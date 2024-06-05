import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import GustoCard from "../GustoCard/GustoCard";
import SelectionPageHeader from "../SelectionPageHeader/SelectionPageHeader";
import EstadoDelPoteCard from "../EstadoDelPoteCard/EstadoDelPoteCard";

import './GustoSelectionPage.css'

const GustoSelectionPage = ({ selectedGustos, handleGustoCardClick, isComplete, maxGustos, gustos }) => {
    return (
        <Container>
            <SelectionPageHeader
                headerTitle="Paso 2/2"
                headerSubtitle="Seleccioná tus gustos"
            />

            <Row className="mt-5 justify-content-center">
                <Col lg={8}>
                    <div className="gusto-selection-container pt-3">
                        <Row>
                            {gustos.map((gusto, index) => (
                                <Col xs={12} sm={6} lg={4} className="d-flex justify-content-center mb-3" key={index}>
                                    <GustoCard
                                        title={gusto.nombre}
                                        subtitle={gusto.tipo}
                                        description="Elaborado con ingredientes de la más alta calidad, nuestro helado de crema americana se caracteriza por su sabor exquisito y su consistencia rica y cremosa."
                                        isSelected={selectedGustos.includes(gusto.id)}
                                        gustoId={gusto.id}
                                        onClick={handleGustoCardClick}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>

                <Col xs={12} lg={{ span: 3, offset: 1 }} className="justify-content-center">
                    <EstadoDelPoteCard
                        selectedGustos={selectedGustos}
                        isComplete={isComplete}
                        maxGustos={maxGustos}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default GustoSelectionPage;
