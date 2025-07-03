import "../styles/Shop.css";
import ProductList from "../components/ProductList";
import Declaration from "../components/Declaration";

function Shop() {
  return (
    <div className="shop-page">
      {/* Bannière d'accueil de la page Shop */}
      <div className="shop-banner">
        <section className="container content py-5">
          <small className="text-warning text-uppercase fw-semibold fs-5">
            COLLECTION 2025
          </small>
          <h1 className="display-4 fw-bold mt-2">TOUS NOS PRODUITS</h1>
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

      {/* Produits : section d’affichage */}
      <div className="container">
        <ProductList />
        <Declaration />
      </div>
    </div>
  );
}

export default Shop;
