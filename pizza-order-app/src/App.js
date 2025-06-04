import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import PizzaList from './pages/PizzaList';
import CartPage from './pages/CartPage';
import DeliveryForm from './pages/DeliveryForm';

import AddPizza from './pages/admin/addPizza';
import Pizzas from './pages/admin/pizzas';
import Orders from './pages/admin/orders';
import Users from './pages/admin/users';


function App() {
  return (
    <div className="bg-cream min-h-screen font-sans">
      {/* On affiche la navbar uniquement sur les pages client */}
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<PizzaList />} />
                <Route path="/panier" element={<CartPage />} />
                <Route path="/livraison" element={<DeliveryForm />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* Routes admin sans Navbar/Footer */}
        <Route path="/admin/add" element={<AddPizza />} />
        <Route path="/admin/pizzas" element={<Pizzas />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
