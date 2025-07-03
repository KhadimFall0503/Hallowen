// DetailModal.jsx
import React from "react";
import "../styles/ProductList.css";

function DetailModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Fermer la fenêtre"
        >
          &times;
        </button>
        <img
          src={product.image || "https://via.placeholder.com/400x300"}
          alt={product.name}
          className="modal-image mb-3"
        />
        <h2 className="text-warning">{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">{product.price} FCFA</p>
      </div>
    </div>
  );
}

export default DetailModal;
