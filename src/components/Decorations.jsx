import { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Decorations.css";
import DetailModalDecoration from "../pages/DetailModalDecoration";

function Decorations() {
  const [decorations, setDecorations] = useState([]);
  const [selectedDecoration, setSelectedDecoration] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: true });

    const getDecorations = async () => {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };
    getDecorations();
  }, []);

  const handleAddToCart = (decoration) => {
    console.log("Ajouté au panier :", decoration.name);
    // TODO : connecter avec le panier global
  };

  // Carte produit avec animation
  const DecorationCard = ({ item, index }) => (
    <div
      key={item.id}
      className="decoration-card candy-card"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <img
        src={item.image}
        alt={item.name}
        className="decoration-image candy-image"
        onClick={() => setSelectedDecoration(item)}
        style={{ cursor: "pointer" }}
        tabIndex={0}
        role="button"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setSelectedDecoration(item);
          }
        }}
      />
      <div className="candy-info">
        <h3 className="decor candy-name fw-bold text-warning">{item.name}</h3>
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
  );

  return (
    <section className="declaration candies-wrapper modern container">
      <h2 className="section-title" data-aos="zoom-in">
        🌙 Nos Articles Spirituels Mourides
      </h2>

      {loading && <p className="text-center text-white py-3">Chargement...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      {!loading && !error && (
        <div className="candies-grid">
          {decorations.length > 0 ? (
            decorations.map((item, index) => (
              <DecorationCard key={item.id} item={item} index={index} />
            ))
          ) : (
            <p className="text-center text-warning">
              Aucun article disponible.
            </p>
          )}
        </div>
      )}

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
