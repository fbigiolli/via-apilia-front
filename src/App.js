import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PoteCreationPage from './components/PoteCreation/PoteCreationPage/PoteCreationPage';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/poteSelection" element={<PoteCreationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
