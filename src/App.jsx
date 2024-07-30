import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Homepage from './homepage';
import GamesPage from './GamesPage';
import JoinPage from './JoinPage';
import NotFoundPage from './NotFoundPage';
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Header cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/games" element={<GamesPage cart={cart} setCart={setCart} />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/cart" element={<Cart cartItems={cart} />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



