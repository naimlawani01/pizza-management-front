import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DeliveryForm() {
  const [form, setForm] = useState({ name: '', address: '', phone: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.address || !form.phone) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    alert('Merci ! Votre commande est en route 🍕');
    navigate('/'); // ou page confirmation
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Informations de livraison</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nom complet"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Adresse complète"
          value={form.address}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Numéro de téléphone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Valider la commande
        </button>
      </form>
    </div>
  );
}
