import React from 'react';
import './HomePage.css';
import marg from '../assets/marg.jpg';
import truffle from '../assets/truffle.webp';
import burrata from '../assets/burrata-jambon.jpg';
import heroPhoto from '../assets/homepizz.jpg';

function HomePage() {
  return (
    <div className="homepage pt-20">
      {/* Hero Section */}
      <section
        className="hero-image"
        style={{ backgroundImage: `url(${heroPhoto})` }}
      >
        <div className="hero-text">
          <h1>PizzaTech</h1>
          <p>La passion de la vraie pizza italienne, livrée chez vous</p>
          <button onClick={() => window.location.href = '/menu'}>
            Commander Maintenant
          </button>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section">
        <h2>Notre Menu</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <img src={marg} alt="Pizza Margherita" />
            <h3>Pizza Margherita</h3>
            <p>Sauce tomate maison, mozzarella fondante, basilic frais.</p>
          </div>
          <div className="menu-item">
            <img src={truffle} alt="Pizza Truffe" />
            <h3>Pizza Truffe</h3>
            <p>Crème de truffe onctueuse, mozzarella, champignons frais.</p>
          </div>
          <div className="menu-item">
            <img src={burrata} alt="Pizza Burrata" />
            <h3>Pizza Burrata</h3>
            <p>Burrata crémeuse, roquette, tomates cerises et sauce tomate.</p>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="info-section">
        <h2>Pourquoi choisir PizzaTech ?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">🌿</div>
            <h3>Ingrédients frais et locaux</h3>
            <p>Nous sélectionnons uniquement des produits de qualité, pour un goût incomparable.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🍕</div>
            <h3>Recettes traditionnelles italiennes</h3>
            <p>Chaque pizza est préparée selon les méthodes ancestrales italiennes.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🔥</div>
            <h3>Cuisson au feu de bois</h3>
            <p>Un goût authentique et une cuisson parfaite à chaque fournée.</p>
          </div>
          <div className="feature-card">
            <div className="icon">⏱️</div>
            <h3>Service rapide et convivial</h3>
            <p>Nous livrons vos pizzas chaudes rapidement avec le sourire.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🏠</div>
            <h3>Ambiance chaleureuse et familiale</h3>
            <p>Chez PizzaTech, vous êtes toujours les bienvenus comme à la maison.</p>
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section className="reviews-section">
        <h2>Avis clients</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Cliente 1" />
            <h4>Claire M.</h4>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>Les meilleures pizzas que j’ai goûtées ! Fraîcheur et cuisson parfaite. Je recommande à 100%.</p>
          </div>
          <div className="review-card">
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Client 2" />
            <h4>Lucas D.</h4>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>Livraison ultra rapide et pizza toujours chaude. Un vrai délice, bravo à toute l’équipe.</p>
          </div>
          <div className="review-card">
            <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Cliente 3" />
            <h4>Emma L.</h4>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>Service client très sympa et pizza délicieuse. Je commande régulièrement sans hésiter !</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
