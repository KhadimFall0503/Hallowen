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
    // TODO : connecter avec panier global (context, redux, etc.)
  };

  return (
    <section className="candies-wrapper modern">
      <div className="candies-grid">
        {products.map((item) => (
          <div key={item.id} className="candy-card shadow-lg">
            <div
              className="image-container"
              onClick={() => setSelectedProduct(item)}
              style={{ cursor: "pointer" }}
            >
              <img src={item.image} alt={item.name} className="candy-image" />
            </div>
            <div className="candy-info">
              <h3 className="candy-name fw-bold fs-4 text-warning">
                {item.name}
              </h3>
              <p className="description">{item.description}</p>
              <p className="price fw-semibold">{item.price} FCFA</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="btn-cart"
                aria-label={`Ajouter ${item.name} au panier`}
              >
                🛍️ Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>

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
