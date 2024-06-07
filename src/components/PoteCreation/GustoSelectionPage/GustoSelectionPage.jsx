import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import GustoCard from "../GustoCard/GustoCard";
import SelectionPageHeader from "../SelectionPageHeader/SelectionPageHeader";
import EstadoDelPoteCard from "../EstadoDelPoteCard/EstadoDelPoteCard";

import './GustoSelectionPage.css'

const GustoSelectionPage = ({ selectedGustosID, handleGustoCardClick, isComplete, maxGustos, gustos }) => {
    const getNombresGustosByID = (gustos, ids) => {
        return gustos
            .filter(gusto => ids.includes(gusto.id))
            .map(gusto => gusto.nombre);
    };

    const renderGustoCards = (gustos, selectedGustosID, handleGustoCardClick, colProps) => (
        gustos.map((gusto, index) => (
            <Col {...colProps} className="d-flex justify-content-center mb-3" key={index}>
                <GustoCard
                    title={gusto.nombre}
                    subtitle={gusto.tipo}
                    description="Elaborado con ingredientes de la más alta calidad, nuestro helado de crema americana se caracteriza por su sabor exquisito y su consistencia rica y cremosa."
                    isSelected={selectedGustosID.includes(gusto.id)}
                    gustoId={gusto.id}
                    onClick={handleGustoCardClick}
                />
            </Col>
        ))
    );

    return (
        <Container>
            <SelectionPageHeader
                headerTitle="Paso 2/2"
                headerSubtitle="Seleccioná tus gustos"
            />

            <div className="d-none d-xl-block">
                <Row className="mt-5 justify-content-center">
                    <Col xl={8}>
                        <div className="gusto-selection-container pt-3 pr-3">
                            <Row>
                                {renderGustoCards(gustos, selectedGustosID, handleGustoCardClick, { xl: 4 })}
                            </Row>
                        </div>
                    </Col>

                    <Col xl={{ span: 3, offset: 1 }} className="pt-3">
                        <EstadoDelPoteCard
                            selectedGustos={getNombresGustosByID(gustos, selectedGustosID)}
                            isComplete={isComplete}
                            maxGustos={maxGustos}
                        />
                    </Col>
                </Row>
            </div>
            
            <div className="d-block d-xl-none">
                <Row className="mt-5">
                    {renderGustoCards(gustos, selectedGustosID, handleGustoCardClick, { xs: 12 })}
                </Row>

                <Row>
                    <Col xs={12} className="pt-3">
                        <div className="d-flex justify-content-center">
                            <EstadoDelPoteCard
                                selectedGustos={getNombresGustosByID(gustos, selectedGustosID)}
                                isComplete={isComplete}
                                maxGustos={maxGustos}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default GustoSelectionPage;
