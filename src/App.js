import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import PoteCreationPage from './components/PoteCreation/PoteCreationPage/PoteCreationPage';
import LandingPage from './components/LandingPage/LandingPage';
import Checkout from './components/Checkout/Checkout'
import PaymentSuccessPage from './components/PaymentSuccessPage/PaymentSuccessPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/poteSelection" element={<PoteCreationPage />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/paymentSuccess" element={<PaymentSuccessPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
