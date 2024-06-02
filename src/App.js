import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PoteCard from './components/PoteCard/PoteCard';
import './App.css';

function App() {
  const [selectedPote, setSelectedPote] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedPote(cardId);
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={12} className="mt-5 text-center">
            <div className='header-title'>Paso 1/2</div>
            <div className='header-subtitle'>Seleccioná el tamaño del pote</div>
          </Col>
        </Row>

        <Row className="mt-5 justify-content-center">
          <Col xs={12} sm={6} lg={3} className="d-flex justify-content-center mb-3">
            <PoteCard
              imageSrc="/helados-1-4.jpg"
              title="1/4 Kilo"
              subtitle="Máximo 3 gustos"
              cardId="250"
              isSelected={selectedPote === "250"}
              onClick={handleCardClick}
            />
          </Col>
          <Col xs={12} sm={6} lg={3} className="d-flex justify-content-center mb-3">
            <PoteCard
              imageSrc="/helados-1-4.jpg"
              title="1/2 Kilo"
              subtitle="Máximo 3 gustos"
              cardId="500"
              isSelected={selectedPote === "500"}
              onClick={handleCardClick}
            />
          </Col>
          <Col xs={12} sm={6} lg={3} className="d-flex justify-content-center mb-3">
            <PoteCard
              imageSrc="/helados-1-4.jpg"
              title="1 Kilo"
              subtitle="Máximo 4 gustos"
              cardId="1000"
              isSelected={selectedPote === "1000"}
              onClick={handleCardClick}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
