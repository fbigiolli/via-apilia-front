import React from 'react';
import { Card, Button, CardSubtitle } from 'react-bootstrap';
import './EstadoDelPoteCard.css';

const EstadoDelPoteCard = () => {
    return (
        <Card className="card-estado-del-pote">
            <Card.Body className="d-flex flex-column justify-content-between mx-2 mt-2">
                <div>
                    <Card.Title className="card-title-header">
                        Estado del Pote
                    </Card.Title>

                    <CardSubtitle className="card-text-gustos mt-1">
                        Gustos seleccionados:
                    </CardSubtitle>

                    <Card.Text className="card-text-gustos-details mt-3">
                        Dulce de Leche <br></br>
                        Dulce de Leche <br></br>
                        Dulce de Leche
                    </Card.Text>
                </div>

                <div className="mt-auto">
                    <div className="card-body-status d-flex align-items-center ">
                        <div className="card-vector">
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </div>
                        <Card.Text className="card-text-status">
                            El pote está completo
                        </Card.Text>
                    </div>

                    <div className="card-body-buttons">
                        <Button className="card-button" variant='dark'>
                            <span>Agregar otro pote</span>
                        </Button>
                        <Button className="card-button" variant='dark'>
                            <span>Ir al checkout</span>
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default EstadoDelPoteCard;
