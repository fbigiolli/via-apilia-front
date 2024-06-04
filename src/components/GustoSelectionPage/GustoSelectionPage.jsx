import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import GustoCard from "../GustoCard/GustoCard";
import SelectionPageHeader from "../SelectionPageHeader/SelectionPageHeader";
import EstadoDelPoteCard from "../EstadoDelPoteCard/EstadoDelPoteCard";



const GustoSelectionPage = ({ selectedGustos, handleGustoCardClick }) => {
    return (
        <Container>
            <SelectionPageHeader
                headerTitle="Paso 2/2"
                headerSubtitle="Seleccioná tus gustos"
            />

            <Row className="mt-5 justify-content-center">
                <Col lg={8}>
                    <Row>
                        <Col xs={12} sm={6} lg={4} className="d-flex justify-content-center mb-3">
                            <GustoCard
                                title="Dulce de Leche"
                                subtitle="Dulces de leche"
                                description="Elaborado con ingredientes de la más alta calidad, nuestro helado de dulce de leche destaca por su sabor, y por su consistencia perfectamente equilibrada."
                                isSelected={selectedGustos.includes('ddl')}
                                gustoId = "ddl"
                                onClick={handleGustoCardClick}
                            />
                        </Col>

                        <Col xs={12} sm={6} lg={4} className="d-flex justify-content-center mb-3">
                        <GustoCard
                                title="Dulce de Leche"
                                subtitle="Dulces de leche"
                                description="Elaborado con ingredientes de la más alta calidad, nuestro helado de dulce de leche destaca por su sabor, y por su consistencia perfectamente equilibrada."
                                isSelected={selectedGustos.includes('asd')}
                                gustoId = "asd"
                                onClick={handleGustoCardClick}
                            />
                        </Col>

                        <Col xs={12} sm={6} lg={4} className="d-flex justify-content-center mb-3">
                        <GustoCard
                                title="Dulce de Leche"
                                subtitle="Dulces de leche"
                                description="Elaborado con ingredientes de la más alta calidad, nuestro helado de dulce de leche destaca por su sabor, y por su consistencia perfectamente equilibrada."
                                isSelected={selectedGustos.includes('123')}
                                gustoId = "123"
                                onClick={handleGustoCardClick}
                            />
                        </Col>

                        <Col xs={12} sm={6} lg={4} className="d-flex justify-content-center mb-3">
                        <GustoCard
                                title="Dulce de Leche"
                                subtitle="Dulces de leche"
                                description="Elaborado con ingredientes de la más alta calidad, nuestro helado de dulce de leche destaca por su sabor, y por su consistencia perfectamente equilibrada."
                                isSelected={selectedGustos.includes('456')}
                                gustoId = "456"
                                onClick={handleGustoCardClick}
                            />
                        </Col>

                        <Col xs={12} sm={6} lg={4} className="d-flex justify-content-center mb-3">
                        <GustoCard
                                title="Dulce de Leche"
                                subtitle="Dulces de leche"
                                description="Elaborado con ingredientes de la más alta calidad, nuestro helado de dulce de leche destaca por su sabor, y por su consistencia perfectamente equilibrada."
                                isSelected={selectedGustos.includes('asddsa')}
                                gustoId = "asddsa"
                                onClick={handleGustoCardClick}
                            />
                        </Col>

                        <Col xs={12} sm={6} lg={4} className="d-flex justify-content-center mb-3">
                        <GustoCard
                                title="Dulce de Leche"
                                subtitle="Dulces de leche"
                                description="Elaborado con ingredientes de la más alta calidad, nuestro helado de dulce de leche destaca por su sabor, y por su consistencia perfectamente equilibrada."
                                isSelected={selectedGustos.includes('hdfg')}
                                gustoId = "hdfg"
                                onClick={handleGustoCardClick}
                            />
                        </Col>
                    </Row>
                </Col>

                <Col xs={12} lg = {{ span: 3, offset: 1 }} className="justify-content-center">
                    <EstadoDelPoteCard/>
                </Col>
            </Row>
        </Container>
    );
};

export default GustoSelectionPage;
