// DetailModal.jsx
import React from "react";
import "../styles/CandiesList.css";

function DetailModal({ candy, onClose }) {
  if (!candy) return null;

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
          src={candy.image || "https://via.placeholder.com/400x300"}
          alt={candy.name}
          className="modal-image mb-3"
        />
        <h2 className="text-warning">{candy.name}</h2>
        <p>{candy.description}</p>
        <p className="price">{candy.price} €</p>
      </div>
    </div>
  );
}

export default DetailModal;
