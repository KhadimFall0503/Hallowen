import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ProductList.css";
import DetailModal from "../pages/DetailModal";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products/");
        setProducts(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      }
    };
    getProducts();
  }, []);

  const handleAddToCart = (product) => {
    console.log("Ajouté au panier :", product.name);
    // Tu peux connecter ici avec ton système de panier global (ex: context ou redux)
  };

  return (
    <section className="candies-wrapper modern">
      {/* Supprimé le <h2> */}
      <div className="candies-grid">
        {products.map((item) => (
          <div key={item.id} className="candy-card">
            <img
              src={item.image}
              alt={item.name}
              className="candy-image"
              onClick={() => setSelectedProduct(item)}
              style={{ cursor: "pointer" }}
            />
            <div className="candy-info">
              <h3 className="candy-name fw-bold">{item.name}</h3>
              <p className="description">{item.description}</p>
              <p className="price fw-semibold">{item.price} FCFA</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="btn-cart"
              >
                🛍️ Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de détails */}
      {selectedProduct && (
        <DetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

export default ProductsList;
