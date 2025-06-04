import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

export default function PizzaCard({ pizza }) {
  const { addToCart } = useContext(CartContext);
  const [size, setSize] = useState('M');

  return (
    <div className="pizza-card">
      <img src={pizza.image} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>{pizza.toppings?.join(', ')}</p>

      <div className="size-buttons">
        {['S', 'M', 'L'].map((s) => (
          <button
            key={s}
            className={`size-button ${size === s ? 'active' : ''}`}
            onClick={() => setSize(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="pizza-price">{pizza.price} €</div>

      <button className="add-button" onClick={() => addToCart({ ...pizza, size })}>
        🍕 Ajouter
      </button>
    </div>

  );
}
