import React, { useState, useEffect, useRef } from 'react';
import GustoSelectionPage from '../GustoSelectionPage/GustoSelectionPage';
import PoteSizeSelectionPage from '../PoteSizeSelectionPage/PoteSizeSelectionPage'

import './PoteCreationPage.css';

function PoteCreationPage() {
    const [selectedPote, setSelectedPote] = useState(null);
    const [maxGustos, setMaxGustos] = useState(0);
    const [selectedGustosID, setselectedGustosID] = useState([]);
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
            setselectedGustosID([]);
        } else {
            // Remove the last element from selectedGustosID
            if (selectedPote && selectedPote === "1000") {
                setselectedGustosID(selectedGustosID.slice(0, -1));
            }

            // Set maxGustos
            const newMaxGustos = (cardId === "250" || cardId === "500") ? 3 : 4;
            setMaxGustos(newMaxGustos);
            setSelectedPote(cardId);
        }
    };

    const handleGustosCardClick = (gustoId) => {
        // Unselect
        if (selectedGustosID.includes(gustoId)) {
            setselectedGustosID(selectedGustosID.filter(a => a !== gustoId));
        } else if (selectedGustosID.length < maxGustos) {
            // Set selectedGustosID if maxGustos isn't exceeded
            setselectedGustosID([...selectedGustosID, gustoId]);
        }
    };

    return (
        <div className="PoteCreationPage">
            <div className='PoteSizeSelectionPage'>
                <PoteSizeSelectionPage
                    selectedPote={selectedPote}
                    handlePoteCardClick={handlePoteCardClick}
                />
            </div>

            {selectedPote ?
                <div className='GustoSelectionPage' ref={gustoSelectionRef}>
                    <GustoSelectionPage
                        selectedGustosID={selectedGustosID}
                        handleGustoCardClick={handleGustosCardClick}
                        isComplete={maxGustos !== 0 ? selectedGustosID.length === maxGustos : false}
                        maxGustos={maxGustos}
                        gustos={gustos}
                    />
                </div> : null}
        </div>
    );
};

export default PoteCreationPage;
