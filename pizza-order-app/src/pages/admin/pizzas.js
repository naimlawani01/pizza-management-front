import React from 'react';
import { Link } from 'react-router-dom';

export default function Pizzas() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-green-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="text-yellow-300">🍕</span> Page Admin
        </h1>
        <nav className="flex flex-col gap-4">
          <Link to="/" className="hover:text-yellow-400">Dashboard</Link>
          <Link to="/admin/pizzas" className="text-yellow-300 font-semibold">Gérer pizzas</Link>
          <Link to="/admin/orders" className="hover:text-yellow-400">Gérer commandes</Link>
          <Link to="/admin/users" className="hover:text-yellow-400">Gérer utilisateurs</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-cream min-h-screen">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-green-900">Gestion des pizzas</h2>
            <Link
              to="/admin/add"
              className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition"
            >
              + Ajouter une pizza
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-200">
              <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
                <tr>
                  <th className="p-3 border-b">Nom</th>
                  <th className="p-3 border-b">Prix</th>
                  <th className="p-3 border-b">Dispo</th>
                  <th className="p-3 border-b">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                {/* À remplacer par une map plus tard */}
                <tr>
                  <td className="p-3 border-b">–</td>
                  <td className="p-3 border-b">–</td>
                  <td className="p-3 border-b">–</td>
                  <td className="p-3 border-b">
                    <button className="text-blue-600 hover:underline mr-3">Modifier</button>
                    <button className="text-red-600 hover:underline">Supprimer</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
