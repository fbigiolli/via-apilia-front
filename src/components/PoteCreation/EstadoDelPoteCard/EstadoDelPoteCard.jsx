import React from 'react';
import { Card, Button, CardSubtitle } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './EstadoDelPoteCard.css';


const EstadoDelPoteCard = ({ selectedGustos, isComplete, maxGustos, selectedPote, prices }) => {

    const poteSizeText = {
        250: '1/4 Kg',
        500: '1/2 Kg',
        1000: '1 Kg'
    }

    let navigate = useNavigate();

    const navigateToCheckoutPage = () => {
        if(selectedGustos.length > 0){
            navigate('/checkout', {
                state: {
                    selectedGustos: selectedGustos,
                    poteSizeText: poteSizeText[selectedPote],
                    price: prices[selectedPote]
                }
            });
        }
    };

    return (
        <Card className="card-estado-del-pote mb-3">
            <Card.Body className="d-flex flex-column justify-content-between mx-2 mt-2">
                <div>
                    <Card.Title className="card-title-header">
                        Estado del Pote
                    </Card.Title>

                    <CardSubtitle className="card-text-gustos mt-1">
                        Gustos seleccionados:
                    </CardSubtitle>

                    <Card.Text className="card-text-gustos-details mt-3">
                        {selectedGustos.map((gusto, index) => (
                            <span key={index}>
                                {gusto}
                                <br />
                            </span>
                        ))}
                    </Card.Text>
                </div>

                <div>

                    <div className="card-body-status d-flex align-items-center">
                        {isComplete ? (
                            <>
                                <div className="card-vector">
                                    <ion-icon name="checkmark-circle"></ion-icon>
                                </div>
                                <Card.Text className="card-text-status">
                                    El pote está completo
                                </Card.Text>
                            </>
                        ) : (
                            <Card.Text className="card-text-status">
                                {selectedGustos.length}/{maxGustos} gustos seleccionados
                            </Card.Text>
                        )}
                    </div>


                    <div className="card-body-buttons">
                        {/* <Button className="card-button" variant='dark'>
                            <span>Agregar otro pote</span>
                        </Button> */}
                        <Button onClick={navigateToCheckoutPage} className="card-button" variant='dark'>
                            <span>Ir al checkout</span>
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default EstadoDelPoteCard;
