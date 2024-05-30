import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PoteCard.css';

const PoteCard = ({ imageSrc, title, subtitle }) => {
    return (
        <Card className="custom-card">
            <Card.Img
                variant="top"
                src={imageSrc}
                className="custom-card-img"
            />
            <Card.Body className="custom-card-body">
                <Card.Title className="custom-card-title">
                    {title}
                </Card.Title>
                <Card.Text className="custom-card-subtitle">
                    {subtitle}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PoteCard;
