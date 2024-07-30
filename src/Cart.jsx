import { Link } from 'react-router-dom';
import React from 'react';
import './Cart.css';

function Cart({ cartItems }) {
  return (
    <div className="cart-container">
      <h1>SHOPPING CART</h1>
      {/* check if the cart is empty */}
      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <ul>
          {/* iterate over cart items and display each item */}
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;



