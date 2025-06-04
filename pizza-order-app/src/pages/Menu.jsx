import React from 'react';
import PizzaCard from './PizzaCard';

const pizzas = [
  {
    id: 1,
    name: 'Salmon',
    image: 'https://i.imgur.com/SalmonPizza.png', // à remplacer par ton vrai lien
    price: '9.95',
    toppings: ['Saumon', 'Champignons', 'Mozzarella'],
  },
  {
    id: 2,
    name: 'Margherita',
    image: 'https://i.imgur.com/MargheritaPizza.png', // à remplacer par ton vrai lien
    price: '7.95',
    toppings: ['Tomates cerises', 'Mozzarella', 'Basilic'],
  },
  // Ajoute d'autres pizzas ici
];

export default function Menu() {
  return (
    <div className="bg-[#fef4ec] min-h-screen">
      <header className="py-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 tracking-wide">Notre Menu</h1>
        <p className="text-gray-500 text-sm">Choisissez votre pizza préférée 🍕</p>
      </header>

      <main className="px-6 md:px-12 lg:px-24 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </main>
    </div>
  );
}
