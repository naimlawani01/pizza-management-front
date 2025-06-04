// pages/PizzaList.jsx
import React from 'react';
import PizzaCard from '../components/PizzaCard';
import { PizzaList } from '../data/pizzas';

export default function PizzaListPage() {
  // Transformation de l'objet en tableau
  const pizzasArray = Object.values(PizzaList);

  return (
    <div className="menu-page">
      <h1 className="text-center mb-4">Notre Menu</h1>
      <p className="text-center mb-8 text-sm text-gray-600">Choisissez votre pizza préférée 🍕</p>

      <div className="menu-grid">
        {pizzasArray.map((pizza, index) => (
          <PizzaCard key={index} pizza={{ ...pizza, price: (pizza.price / 100).toFixed(2) }} />
        ))}
      </div>
    </div>
  );
}
