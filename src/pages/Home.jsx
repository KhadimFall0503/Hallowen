import { useState, useEffect } from "react";
import "../styles/Home.css";

import ProductList from "../components/ProductList";
import Sweet from "../components/Sweet";
import Declaration from "../components/Decorations";
import Ceramic from "../components/Ceramic";
import Testimonials from "../components/Testimonials";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/products/");
        setProducts(res.data);
      } catch (err) {
        console.error("Erreur récupération produits :", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home-page">
      {/* Section d'accueil / bannière */}
      <div className="home text-white d-flex align-items-center">
        <section className="container content py-5">
          <small className="text-warning text-uppercase fw-semibold fs-5">
            NOUVELLE COLLECTION
          </small>
          <h1 className="display-4 fw-bold mt-2">MOURIDE SHOP</h1>
          <p className="mt-3 text-box">
            Bienvenue sur Mouride Shop, la boutique dédiée à l'héritage
            spirituel et culturel du mouridisme. Retrouvez une sélection
            d’objets religieux et culturels : Baye Lahat, Xassidas, chapelets,
            encens, sandales, tissus traditionnels et plus encore.
          </p>
          <a
            href="/shop"
            className="btn btn-warning fw-bold text-white btn-lg mt-4"
            role="button"
            aria-label="Voir les produits"
          >
            DÉCOUVRIR LES PRODUITS
          </a>
        </section>
      </div>

      {/* Section des produits */}
      <section className="container my-5">
        <h2 className="text-center text-warning fw-bold mb-4 fs-1">
          Produits Recommandés
        </h2>
        {loading ? (
          <p className="text-center text-white">Chargement des produits...</p>
        ) : (
          <ProductList products={products} />
        )}
      </section>

      {/* Autres sections */}
      <Sweet />
      <Declaration />
      <Ceramic />
      <Testimonials />
    </div>
  );
}

export default Home;
