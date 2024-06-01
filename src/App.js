import React, { useState } from 'react';
import PoteCard from './components/PoteCard/PoteCard';
import './App.css';

function App() {
  const [selectedPote, setSelectedPote] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedPote(cardId);
  };

  return (
    <div className="App">
      <div className="container px-5">
        <div className='row justify-content-center d-flex'>
          <div className='col-md-12 mt-5 text-center'>
            <div className='header-title'>Paso 1/2</div>
            <div className='header-subtitle'>Seleccioná el tamaño del pote</div>
          </div>
        </div>

        <div className="row mt-5 justify-content-center mx-auto gap-0 ">
          <div className="col-xs-12 col-sm-6 col-lg-3 mb-3">
            <PoteCard
              imageSrc="/helados-1-4.jpg"
              title="1/4 Kilo"
              subtitle="Máximo 3 gustos"
              cardId="250"
              isSelected={selectedPote === "250"}
              onClick={handleCardClick}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-3 mb-3">
            <PoteCard
              imageSrc="/helados-1-4.jpg"
              title="1/2 Kilo"
              subtitle="Máximo 3 gustos"
              cardId="500"
              isSelected={selectedPote === "500"}
              onClick={handleCardClick}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-3 mb-3">
            <PoteCard
              imageSrc="/helados-1-4.jpg"
              title="1 Kilo"
              subtitle="Máximo 4 gustos"
              cardId="1000"
              isSelected={selectedPote === "1000"}
              onClick={handleCardClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
