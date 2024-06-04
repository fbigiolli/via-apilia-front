import React, { useState } from 'react';
import './App.css';
import PoteSelectionPage from './components/PoteSelectionPage/PoteSelectionPage';
import GustoSelectionPage from './components/GustoSelectionPage/GustoSelectionPage';

function App() {
  const [selectedPote, setSelectedPote] = useState(null);
  const [selectedGustos, setSelectedGustos] = useState(Array(4));

  const handlePoteCardClick = (cardId) => {
    if(selectedPote === cardId){
      setSelectedPote(null);
    }else{
      setSelectedPote(cardId);
    }
  };

  const handleGustosCardClick = (gustoId) => {
    if (selectedGustos.includes(gustoId)) {
      setSelectedGustos(selectedGustos.filter( a => a !== gustoId))
    } else {
      setSelectedGustos([...selectedGustos, gustoId])
    }
  }

  return (
    <div className="App">
      <div className='PoteSelectionPage'>
        <PoteSelectionPage
          selectedPote = {selectedPote}
          handlePoteCardClick = {handlePoteCardClick}  
        />
      </div>

      <div className='GustoSelectionPage'>
        <GustoSelectionPage
          selectedGustos = {selectedGustos}
          handleGustoCardClick={handleGustosCardClick}
        />
      </div>
    </div>
  );
};

export default App;