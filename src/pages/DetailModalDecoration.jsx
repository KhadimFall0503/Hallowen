import { useEffect } from "react";
import "../styles/Decorations.css"; // même fichier que pour les styles globaux

function DetailModalDecoration({ decoration, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <img
          src={decoration.image}
          alt={decoration.name}
          className="modal-image"
        />
        <h2 className="candy-name">{decoration.name}</h2>
        <p className="description">{decoration.description}</p>
        <p className="price fw-bold">{decoration.price} €</p>
      </div>
    </div>
  );
}

export default DetailModalDecoration;
