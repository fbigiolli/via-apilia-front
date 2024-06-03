import React from 'react';
import { Card } from 'react-bootstrap';
import './PoteCard.css';

const PoteCard = ({ imageSrc, title, subtitle, cardId, isSelected, onClick }) => {

  return (
    <Card className={`pote-card ${isSelected ? 'selected' : ''}` }  onClick={() => onClick(cardId)}>
      <Card.Img variant="top" src={imageSrc} className="pote-card-img" />
      <Card.Body>
        <Card.Title className="pote-card-title">{title}</Card.Title>
        <Card.Text className="pote-card-subtitle">{subtitle}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PoteCard;
