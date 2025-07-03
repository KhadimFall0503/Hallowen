import React from "react";
import "../styles/Card.css"; // Ton style si tu en as un

function Card({ image, name, description, price, onAddToCart, onClick }) {
  return (
    <div className="mouride-card" onClick={onClick}>
      <div className="mouride-card-image">
        <img src={image} alt={name} />
      </div>
      <div className="mouride-card-body">
        <h5 className="mouride-card-title">{name}</h5>
        <p className="mouride-card-description">{description}</p>
        <div className="mouride-card-footer">
          <span className="mouride-price">{price} FCFA</span>
          <button
            className="mouride-btn"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart();
            }}
          >
            🛍️ Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
