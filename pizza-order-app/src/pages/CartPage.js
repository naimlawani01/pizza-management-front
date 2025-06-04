import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartPage() {
  const { cart, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <span role="img" aria-label="panier">🛒</span> Votre panier
      </h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Votre panier est vide.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-300">
            {cart.map((item, index) => (
              <li key={index} className="py-3 flex justify-between">
                <span className="font-medium">{item.name}</span>
                <span className="text-gray-700">{item.price} €</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-bold">Total : {total.toFixed(2)} €</p>
            <button
              onClick={() => {
                alert('Commande passée avec succès !');
                clearCart();
              }}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Commander
            </button>
          </div>
        </>
      )}
    </div>
  );
}
