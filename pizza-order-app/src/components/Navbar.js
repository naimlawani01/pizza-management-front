import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useCart();
  const location = useLocation();

  const navLinkClass = (path) =>
    `text-sm font-medium transition hover:text-orange-300 ${
      location.pathname === path ? 'text-orange-400 font-semibold' : ''
    }`;

  return (
    <nav className="bg-green-900 text-white w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side: Logo */}
        <Link to="/" className="text-xl font-bold tracking-wide flex items-center gap-2 hover:text-orange-300 transition">
          <span role="img" aria-label="pizza">🍕</span>
          <span>PizzaTech</span>
        </Link>

        {/* Middle: Navigation */}
        <div className="flex gap-6 items-center">
          <Link to="/" className={navLinkClass('/')}>Accueil</Link>
          <Link to="/menu" className={navLinkClass('/menu')}>Menu</Link>
        </div>

        {/* Right: Cart */}
        <div className="relative">
          <Link to="/panier" className="hover:text-orange-300 transition">
            <FaShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 w-4 h-4 bg-red-500 rounded-full border-2 border-white text-[10px] text-white flex items-center justify-center font-bold animate-bounce">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
