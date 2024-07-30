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
  // state variable to manage the cart
  const [cart, setCart] = useState([]);

  return (
    <Router>
      {/* header component with cart count */}
      <Header cartCount={cart.length} />
      <Routes>
        {/* routes for the pages */}
        <Route path="/" element={<Homepage />} />
        {/* route for the games page, passing cart and setCart as props */}
        <Route path="/games" element={<GamesPage cart={cart} setCart={setCart} />} />
        <Route path="/join" element={<JoinPage />} />
        {/* route for the cart page, passing cart items as props */}
        <Route path="/cart" element={<Cart cartItems={cart} />} />
        {/* route for handling 404 not found */}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      {/* footer component */}
      <Footer />
    </Router>
  );
}

export default App;




