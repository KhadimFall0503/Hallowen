import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Declaration.css";
import DetailModalDecoration from "../pages/DetailModalDecoration"; // modal spécifique décorations

function Declaration() {
  const [decorations, setDecorations] = useState([]);
  const [selectedDecoration, setSelectedDecoration] = useState(null);

  useEffect(() => {
    const getDecorations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/decorations/"
        );
        setDecorations(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des décorations :",
          error
        );
      }
    };
    getDecorations();
  }, []);

  const handleAddToCart = (decoration) => {
    console.log("Ajouté au panier :", decoration.name);
  };

  return (
    <section className="declaration candies-wrapper modern container">
      <div>
        <h2 className="section-title">🎃 Nos Décorations Halloween</h2>
        <div className="candies-grid">
          {decorations.map((decoration) => (
            <div key={decoration.id} className="decoration-card candy-card">
              <img
                src={decoration.image}
                alt={decoration.name}
                className="decoration-image candy-image"
                onClick={() => setSelectedDecoration(decoration)}
                style={{ cursor: "pointer" }}
              />
              <div className="candy-info">
                <h3 className="decor candy-name fw-bold">{decoration.name}</h3>
                <p className="description">{decoration.description}</p>
                <p className="price">{decoration.price} €</p>
                <button
                  onClick={() => handleAddToCart(decoration)}
                  className="btn-cart"
                >
                  🎃 Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedDecoration && (
        <DetailModalDecoration
          decoration={selectedDecoration}
          onClose={() => setSelectedDecoration(null)}
        />
      )}
    </section>
  );
}

export default Declaration;
