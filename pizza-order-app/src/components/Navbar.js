import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import '../assets/css/navbar.css';

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span role="img" aria-label="pizza">🍕</span> PizzaTech
      </Link>

      <div className="navbar-links">
        <Link to="/" className="navbar-link">Accueil</Link>
        <Link to="/menu" className="navbar-link">Menu</Link>
        <Link to="/panier" className="navbar-cart">
          <FaShoppingCart />
          {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
        </Link>
      </div>
    </nav>
  );
}
