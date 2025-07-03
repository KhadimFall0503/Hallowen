import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Decorations.css";
import DetailModalDecoration from "../pages/DetailModalDecoration";

function Decorations() {
  const [decorations, setDecorations] = useState([]);
  const [selectedDecoration, setSelectedDecoration] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDecorations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/decorations/"
        );
        setDecorations(response.data);
        setError(null);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des décorations :",
          error
        );
        setError(
          "Impossible de charger les articles spirituels. Veuillez réessayer plus tard."
        );
      }
    };
    getDecorations();
  }, []);

  const handleAddToCart = (decoration) => {
    console.log("Ajouté au panier :", decoration.name);
    // TODO : connecter avec le panier global (context, Redux, etc.)
  };

  return (
    <section className="declaration candies-wrapper modern container">
      {/* TITRE placé en dehors de la grille */}
      <h2 className="section-title">🌙 Nos Articles Spirituels Mourides</h2>

      {error && <p className="text-danger text-center">{error}</p>}

      {/* GRILLE des cartes */}
      <div className="candies-grid">
        {decorations.map((item) => (
          <div key={item.id} className="decoration-card candy-card">
            <img
              src={item.image}
              alt={item.name}
              className="decoration-image candy-image"
              onClick={() => setSelectedDecoration(item)}
              style={{ cursor: "pointer" }}
            />
            <div className="candy-info">
              <h3 className="decor candy-name fw-bold">{item.name}</h3>
              <p className="description">{item.description}</p>
              <p className="price">{item.price} FCFA</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="btn-cart"
                aria-label={`Ajouter ${item.name} au panier`}
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal pour détails */}
      {selectedDecoration && (
        <DetailModalDecoration
          decoration={selectedDecoration}
          onClose={() => setSelectedDecoration(null)}
        />
      )}
    </section>
  );
}

export default Decorations;
