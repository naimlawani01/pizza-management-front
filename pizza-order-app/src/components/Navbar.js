import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="flex items-center justify-between p-4 bg-green-900 text-white shadow-md">
      <div className="flex gap-4 items-center">
        <Link to="/" className="text-xl font-bold tracking-wide">
          PizzaTech <span role="img" aria-label="pizza">🍕</span>
        </Link>
        <Link to="/menu" className="hover:underline text-sm">Menu</Link>
      </div>

      <div className="relative">
        <Link to="/panier">
          <FaShoppingCart className="text-2xl" />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
          )}
        </Link>
      </div>
    </nav>
  );
}
