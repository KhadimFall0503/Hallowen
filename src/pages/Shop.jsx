import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Shop.css";
import ProductList from "../components/ProductList";
import DetailModal from "../pages/DetailModal";

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // État pour gérer le produit sélectionné (modal)
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        const [candiesRes, decorationsRes] = await Promise.all([
          axios.get("http://localhost:8000/api/products/"),
          axios.get("http://localhost:8000/api/decorations/"),
        ]);

        const candiesWithType = candiesRes.data.map((p) => ({
          ...p,
          type: "candy",
        }));
        const decorationsWithType = decorationsRes.data.map((p) => ({
          ...p,
          type: "decoration",
        }));

        setAllProducts([...candiesWithType, ...decorationsWithType]);
      } catch (error) {
        console.error("Erreur lors de la récupération :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  const filteredProducts = searchTerm
    ? allProducts.filter((product) => {
        const queryWords = searchTerm.trim().toLowerCase().split(/\s+/);
        const name = product.name?.toLowerCase() || "";
        const description = product.description?.toLowerCase() || "";
        return queryWords.every(
          (word) => name.includes(word) || description.includes(word)
        );
      })
    : allProducts;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  // Fonction déclenchée au clic sur un produit
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  // Fermer la modal
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="shop-page">
      <div className="shop-banner">
        <section className="container content py-5">
          <small className="text-warning text-uppercase fw-semibold fs-5">
            COLLECTION 2025
          </small>
          <h1 className="display-4 fw-bold mt-2 text-white">
            TOUS NOS PRODUITS
          </h1>
          <p className="mt-3 text-box">
            Explorez notre sélection d’accessoires inspirés de la tradition
            mouride : Baye La, Xassidas, chapelets, encens, images pieuses et
            autres objets spirituels pour nourrir votre foi et embellir votre
            quotidien.
          </p>
          <a
            href="/"
            className="btn btn-warning fw-bold text-white btn-lg mt-4"
            role="button"
            aria-label="Retour à l'accueil"
          >
            RETOUR ACCUEIL
          </a>
        </section>
      </div>

      <div className="container my-5">
        <h5 className="text-white mb-3">🔍 Rechercher un produit</h5>
        <form onSubmit={handleSearchSubmit} className="d-flex" role="search">
          <input
            type="search"
            placeholder="Ex : Xassida, Chapelet..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control me-2 rounded-pill px-4 py-2"
            aria-label="Recherche"
          />
          <button type="submit" className="btn btn-warning rounded-pill px-4">
            Rechercher
          </button>
        </form>
      </div>

      <div className="container pb-5">
        {loading ? (
          <p className="text-center text-white py-5">Chargement...</p>
        ) : filteredProducts.length > 0 ? (
          <>
            <p className="text-center text-warning mb-3">
              {filteredProducts.length} produit
              {filteredProducts.length > 1 ? "s" : ""} trouvé
              {filteredProducts.length > 1 ? "s" : ""}
            </p>
            <ProductList
              products={filteredProducts}
              onSelectProduct={handleSelectProduct} // <-- fonction valide ici
            />
          </>
        ) : (
          <p className="text-center text-light py-4">
            Aucun produit ne correspond à votre recherche.
          </p>
        )}
      </div>

      {/* Modal de détail */}
      <DetailModal product={selectedProduct} onClose={handleCloseModal} />
    </div>
  );
}

export default Shop;
