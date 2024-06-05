import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import PoteSelectionPage from './components/PoteSelectionPage/PoteSelectionPage';
import GustoSelectionPage from './components/GustoSelectionPage/GustoSelectionPage';

function App() {
  const [selectedPote, setSelectedPote] = useState(null);
  const [maxGustos, setMaxGustos] = useState(0);
  const [selectedGustos, setSelectedGustos] = useState([]);
  const [gustos, setGustos] = useState([]);
  const gustoSelectionRef = useRef(null); 

  useEffect(() => {
    const fetchGustos = async () => {
      try {
        const response = await fetch('https://corsproxy.io/?https://via-apilia.up.railway.app/gustos');
        if (!response.ok) {
          console.error('API Error');
        }
        const data = await response.json();
        setGustos(data);
      } catch (error) {
        console.error('Error fetching gustos:', error);
      }
    };

    fetchGustos();
  }, []);

  useEffect(() => {
    if (gustoSelectionRef.current) {
      gustoSelectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedPote]);

  const handlePoteCardClick = async (cardId) => {
    // Unselect
    if (selectedPote === cardId) {
      setSelectedPote(null);
      setMaxGustos(0);
      setSelectedGustos([]);
    } else {
      // Remove the last element from selectedGustos
      if (selectedPote && selectedPote === "1000") {
        setSelectedGustos(selectedGustos.slice(0, -1));
      }

      // Set maxGustos
      const newMaxGustos = (cardId === "250" || cardId === "500") ? 3 : 4;
      setMaxGustos(newMaxGustos);
      setSelectedPote(cardId);
    }
  };

  const handleGustosCardClick = (gustoId) => {
    // Unselect
    if (selectedGustos.includes(gustoId)) {
      setSelectedGustos(selectedGustos.filter(a => a !== gustoId));
    } else if (selectedGustos.length < maxGustos) {
      // Set selectedGustos if maxGustos isn't exceeded
      setSelectedGustos([...selectedGustos, gustoId]);
    }
  };

  return (
    <div className="App">
      <div className='PoteSelectionPage'>
        <PoteSelectionPage
          selectedPote={selectedPote}
          handlePoteCardClick={handlePoteCardClick}
        />
      </div>

      {selectedPote ?
        <div className='GustoSelectionPage' ref={gustoSelectionRef}>
          <GustoSelectionPage
            selectedGustos={selectedGustos}
            handleGustoCardClick={handleGustosCardClick}
            isComplete={maxGustos !== 0 ? selectedGustos.length === maxGustos : false}
            maxGustos={maxGustos}
            gustos={gustos}
          />
        </div> : null}
    </div>
  );
};

export default App;
