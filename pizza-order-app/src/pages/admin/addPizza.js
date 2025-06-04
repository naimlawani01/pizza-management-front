import React from 'react';
import { Link } from 'react-router-dom';

export default function AddPizza() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-green-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="text-yellow-300">😊</span> Page Admin
        </h1>
        <nav className="flex flex-col gap-4">
          <Link to="/" className="hover:text-yellow-400">Dashboard</Link>
          <Link to="/admin/pizzas" className="hover:text-yellow-400">Gérer pizzas</Link>
          <Link to="/admin/orders" className="hover:text-yellow-400">Gérer commandes</Link>
          <Link to="/admin/users" className="hover:text-yellow-400">Gérer utilisateurs</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-cream min-h-screen">
        <h2 className="text-2xl font-bold mb-6 text-green-900">Ajouter une Pizza</h2>

        <form className="bg-white p-6 rounded-xl shadow-lg max-w-xl">
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">Nom :</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block font-medium mb-1">Prix :</label>
            <input
              type="text"
              id="price"
              name="price"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="ingredients" className="block font-medium mb-1">Ingrédients :</label>
            <input
              type="text"
              id="ingredients"
              name="ingredients"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>

          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition"
            >
              Enregistrer
            </button>
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Annuler
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
