import React from 'react';
import { Card } from 'react-bootstrap';
import './GustoCard.css';

const GustoCard = ({ title, subtitle, description, gustoId, isSelected, onClick }) => {
    return (
        <Card className={`gusto-card ${isSelected ? 'selected' : ''}`} onClick={() => onClick(gustoId)}>
            <Card.Body>
                <div className="gusto-card-headers">
                    <Card.Title className="gusto-card-title">{title}</Card.Title>
                    <Card.Subtitle className="gusto-card-subtitle">{subtitle}</Card.Subtitle>
                </div>
                <div className="gusto-card-body">
                    <Card.Text className="gusto-card-description">
                        {description}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
};

export default GustoCard;
