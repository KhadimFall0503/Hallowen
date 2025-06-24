import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/CandiesList.css";

function CandiesList() {
  const [candies, setCandies] = useState([]);

  useEffect(() => {
    const getCandies = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/candies/");
        setCandies(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des bonbons :", error);
      }
    };
    getCandies();
  }, []);

  const handleAddToCart = (candy) => {
    console.log("Ajouté au panier :", candy.name);
  };

  return (
    <section className="candies-wrapper">
      <h2 className="section-title">Nos Bonbons d'Halloween</h2>
      <div className="candies-grid">
        {candies.map((candy) => (
          <div key={candy.id} className="candy-card">
            <img src={candy.image} alt={candy.name} className="candy-image" />
            <div className="candy-info">
              <h3 className="fw-bold">{candy.name}</h3>
              <p className="description">{candy.description}</p>
              <p className="price">{candy.price} €</p>
              <button
                onClick={() => handleAddToCart(candy)}
                className="btn-cart"
              >
                🛒 Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CandiesList;
